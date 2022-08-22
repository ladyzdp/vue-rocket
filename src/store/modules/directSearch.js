

const directSearch = {
  state: {
    queryParam: null,
    dataSource:[]
  },
  mutations: {
    SET_QUERYPARAM: (state, fields) => {
      console.log('queryParam', fields)
      state.queryParam = fields
    },
    SET_DATASOURCE:(state, fields) => {
      console.log('dataSource', fields)
      state.dataSource = fields
    },
  },
  actions: {
    setQueryParam({ commit }, param) {
      commit('SET_QUERYPARAM', param)
    },
    setDataSource({ commit }, param) {
      commit('SET_DATASOURCE', param)
    }
    

  }
}

export default directSearch
