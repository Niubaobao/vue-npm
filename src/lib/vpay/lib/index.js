import vpay from './pay'

const myPlugin = {
  install(Vue) {
    Vue.component('vpay', vpay)
  }
}

export default myPlugin
