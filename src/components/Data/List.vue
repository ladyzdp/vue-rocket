<template>
  <div class="children-wrap">
    <h6>通过Props接收数据并渲染的列表组件</h6>
    <ul v-if="list.length > 0">
      <li v-for="(item, index) in list" :key="index" class="grid mg20">
        <div>
          <div v-if="item.name">姓名：{{ item.name }}</div>
          <div v-if="item.idCard">身份证号码：{{ item.idCard }}</div>
          <div v-if="item.sex">性别：{{ item.sex }}</div>
          <div v-if="item.birthday">出生日期：{{ item.birthday }}</div>
        </div>
        <div>
          <a
            v-if="eventType == 'props'"
            href="javascript:;"
            role="button"
            class="outline"
            @click="getInfo(item)"
            >获取信息</a
          >
          <a
            v-if="eventType == 'eventBus'"
            href="javascript:;"
            role="button"
            @click="triggerEventBus(item)"
            >获取信息</a
          >
          <a v-if="eventType == 'router'" href="/detail" role="button">详情</a>
        </div>
      </li>
    </ul>
    <!-- 插槽 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    eventType: {
      type: String,
      default: "props",
    },
  },
  data() {
    return {};
  },
  methods: {
    getInfo(item) {
      this.$emit("getUserInfo", item);
    },
    triggerEventBus(item) {
      this.$bus.$emit("getDataInfo", item);
    },
  },
};
</script>
<style lang="css" scoped>
.mg20 {
  margin: 20px 0;
}
.children-wrap {
  border: 1px dashed #17ce07;
}
</style>