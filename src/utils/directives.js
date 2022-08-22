const Directives = {
    install(Vue) {
        // input数据框自动获得焦点
        Vue.directive('focus', {
            inserted: function (el) {
                el.focus();
            },
        })
    }

}
export default Directives