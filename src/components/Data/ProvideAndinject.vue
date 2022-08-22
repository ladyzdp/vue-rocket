<template>
  <div class="parent-warp">
    <h6>使用provide/inject通信</h6>
    <div class="info-card" v-if="itemInfo">
      姓名：{{ itemInfo.name }} <br />
      身份证号码：{{ itemInfo.idCard }} <br />
      性别：{{ itemInfo.sex }} <br />
      出生日期：{{ itemInfo.birthday }} <br />
    </div>

    <div class="info-card" v-else>暂无子组件回传信息</div>
    <InjectList />
  </div>
</template>

<script>
import InjectList from "./InjectList.vue";
export default {
  name: "ProvideAndinject",
  components: { InjectList },
  data() {
    return {
      list: [
        {
          name: "孙秋梅",
          idCard: "220625197004204426",
          sex: "女",
          birthday: "1970年04月20日",
        },
        {
          name: "冯祺",
          idCard: "130229198811102019",
          sex: "男",
          birthday: "1988年11月10日",
        },
        {
          name: "赵麒",
          idCard: "131123198801271713",
          sex: "男",
          birthday: "1988年01月27日",
        },
        {
          name: "于晓勇",
          idCard: "53012219991211531X",
          sex: "男",
          birthday: "1999年12月11日",
        },
      ],
      itemInfo: null,
    };
  },
  provide() {
    return {
      proList: this.list,
      itemInfo:this.setItemInfo,
    };
  },
  methods: {
    setItemInfo(item){
        this.itemInfo = item

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