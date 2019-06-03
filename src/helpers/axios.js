import axios from 'axios'
export class Request {
  constructor ({ baseURL }) {
    Object.assign(this, axios.create({ baseURL }))
    for (let method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
      this['$' + method] = function () { return this[method].apply(this, arguments).then(res => res && res.data) }
    }
  }
  setHeader (key, value) {
    this.defaults.headers.common[key] = value
  }
}

const instance = new Request({ baseURL: '' })
function axiosHelper (Vue, options) {
  instance.defaults.baseURL = options.apiUrl
  if (options.store) { options.store.$axios = instance }
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get () {
        return instance
      }
    }
  })
}

export { axiosHelper, instance }
