<template>
  <div class="parent-warp">
    <h6>使用事件总线Vuex通信</h6>
    <div class="info-card" v-if="itemInfo">
      姓名：{{ itemInfo.name }} <br />
      身份证号码：{{ itemInfo.idCard }} <br />
      性别：{{ itemInfo.sex }} <br />
      出生日期：{{ itemInfo.birthday }} <br />
    </div>

    <div class="info-card" v-else>暂无子组件回传信息</div>
    <VuexList />
  </div>
</template>

<script>
import VuexList from "./VuexList.vue";
export default {
  name: "VuexCompt",
  components: { VuexList },
  data() {
    return {
      list: [
        {
          name: "章世钊",
          idCard: "421222198703245317",
          sex: "男",
          birthday: "1987年03月24日",
        },
        {
          name: "邹丽娜",
          idCard: "51012219901027262X",
          sex: "女",
          birthday: "1990年10月27日",
        },
        {
          name: "江雪原",
          idCard: "410926197203255718",
          sex: "男",
          birthday: "1972年03月25日",
        },
        {
          name: "张旭和",
          idCard: "430921198404116817",
          sex: "男",
          birthday: "1984年04月11日",
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("setDataSource", this.list);
  },
  computed: {
    itemInfo() {
      return this.$store.getters.queryParam;
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