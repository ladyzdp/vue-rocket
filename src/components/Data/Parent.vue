<template>
  <div class="parent-warp">
    <h6>父组件获取子组件中回传的信息</h6>
    <div class="info-card" v-if="itemInfo">
      姓名：{{ itemInfo.name }} <br />
      身份证号码：{{ itemInfo.idCard }} <br />
      性别：{{ itemInfo.sex }} <br />
      出生日期：{{ itemInfo.birthday }} <br />
    </div>

    <div class="info-card" v-else>暂无子组件回传信息</div>
    <List :list="list" @getUserInfo="getUserInfo" />
  </div>
</template>

<script>
import List from "./List.vue";
export default {
  name: "Parent",
  components: { List },
  data() {
    return {
      list: [
        {
          name: "曹一萌",
          idCard: "330825198907153827",
          sex: "女",
          birthday: "1989年07月15日",
        },
        {
          name: "陈敬花",
          idCard: "13092619930420652X",
          sex: "女",
          birthday: "1993年04月20日",
        },
        {
          name: "俞锡林",
          idCard: "61022119900713611X",
          sex: "男",
          birthday: "1990年07月13日",
        },
        {
          name: "王荣堂",
          idCard: "431123199808042919",
          sex: "男",
          birthday: "1998年08月04日",
        },
      ],
      itemInfo: null,
    };
  },
  methods: {
    getUserInfo(item) {
      this.itemInfo = item;
    }
    
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