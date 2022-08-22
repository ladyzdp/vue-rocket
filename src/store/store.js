import Vue from 'vue';


export let store = Vue.observable({
    queryParam: null,
    dataSource: []
});


export let mutations = {
    setQueryParam(data) {
        store.queryParam = data;
    },
    setDataSource(data) {
        store.dataSource = data;
    }
}