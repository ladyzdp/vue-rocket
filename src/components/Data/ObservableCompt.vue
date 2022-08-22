<template>
  <div class="parent-warp">
    <h6>使用observable通信</h6>
    <div class="info-card" v-if="itemInfo">
      姓名：{{ itemInfo.name }} <br />
      身份证号码：{{ itemInfo.idCard }} <br />
      性别：{{ itemInfo.sex }} <br />
      出生日期：{{ itemInfo.birthday }} <br />
    </div>

    <div class="info-card" v-else>暂无子组件回传信息</div>
    <ObservableList />
  </div>
</template>

<script>
import ObservableList from "./ObservableList.vue";
import {store,mutations} from '@/store/store';
export default {
  name: "ObservableCompt",
  components: { ObservableList },
  data() {
    return {
      list: [
        {
          name: "周奇文",
          idCard: "441223197310053619",
          sex: "男",
          birthday: "1973年10月05日",
        },
        {
          name: "赵月莲",
          idCard: "370830197011191920",
          sex: "女",
          birthday: "1970年11月19日",
        },
        {
          name: "周振淮",
          idCard: "360622197701015315",
          sex: "男",
          birthday: "1977年01月01日",
        },
        {
          name: "张奕锋",
          idCard: "510525199108103411",
          sex: "男",
          birthday: "1991年08月10日",
        },
      ],
    };
  },
  created() {
    mutations.setDataSource(this.list);
  },
  computed: {
    itemInfo() {
      return store.queryParam;
    },
  },
};
</script>

<style lang="css" scoped>
.info-card {
  border: 1px dashed #999;
  margin: 30px 0;
  padding: 15px;
  font-weight: bold;
}
.parent-warp {
  border: 1px dashed red;
  padding: 20px;
}
</style>