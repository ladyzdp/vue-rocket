<template>
  <div class="parent-warp">
    <h6>使用事件总线eventBus通信</h6>
    <div class="info-card" v-if="itemInfo">
      姓名：{{ itemInfo.name }} <br />
      身份证号码：{{ itemInfo.idCard }} <br />
      性别：{{ itemInfo.sex }} <br />
      出生日期：{{ itemInfo.birthday }} <br />
    </div>

    <div class="info-card" v-else>暂无子组件回传信息</div>
    <List :list="list" eventType="eventBus" />
  </div>
</template>

<script>
import List from "./List.vue";
export default {
  name: "EventBus",
  components: { List },
  data() {
    return {
      list: [
        {
          name: "朱利恒",
          idCard: "430525199208011418",
          sex: "男",
          birthday: "1992年08月01日",
        },
        {
          name: "高永旭",
          idCard: "140522198909235411",
          sex: "男",
          birthday: "1989年09月23日",
        },
        {
          name: "于宝辉",
          idCard: "321023199807182118",
          sex: "男",
          birthday: "1998年07月18日",
        },
        {
          name: "曹淑娥",
          idCard: "610724197808126429",
          sex: "女",
          birthday: "1978年08月12日",
        },
      ],
      itemInfo: null,
    };
  },
  created() {
    this.$bus.$on("getDataInfo", (item) => {
      this.setItemInfo(item);
    });
  },
  beforeDestroy() {
    this.$bus.$off("getDataInfo");
  },
  methods: {
    setItemInfo(item) {
      this.itemInfo = item;
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