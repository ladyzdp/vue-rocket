import Bus from 'vue';
// eventBus 事件总线注册
let install = function (Vue) {
  Vue.prototype.$bus = new Bus();
};
export default { install };