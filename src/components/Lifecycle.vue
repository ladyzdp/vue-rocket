<template>
  <div>
    <div>生命周期钩子</div>
      <ul >
        <li>beforeCreate:{{ 1 }}</li>
        <li>created:{{ created }}</li>
        <li>beforeMount:{{ beforeMount }}</li>
        <li>mounted:{{ mounted }}</li>
        <li>beforeUpdate:{{ beforeUpdate }}</li>
        <li>updated:{{ updated }}</li>
        <li>activated:{{ activated }}</li>
        <li>deactivated:{{ deactivated }}</li>
        <li>beforeDestroy:{{ beforeDestroy }}</li>
        <li>destroyed:{{ destroyed }}</li>
      </ul>
    <hr />
    <div>示例数据：{{ message }}</div>
    <br />
    <button type="button" @click="changeMessage" class="outline">更新数据</button>
    <br />
    
  </div>
</template>
<script>
let init = 0;
import { Mixins } from "@/mixins/Mixins";

export default {
  mixins:[Mixins],
  data() {
    return {
      message: "更新前数据++++++",
      show: true,
      beforeCreate: null,
      created: null,
      beforeMount: null,
      mounted: null,
      beforeUpdate: null,
      updated: null,
      activated: null,
      deactivated: null,
      beforeDestroy: null,
      destroyed: null,
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
      ],
    };
  },
  methods: {
    changeMsg() {
      this.message = "更新后数据------";
    },
    toggleStatus() {
      this.show = !this.show;
    },
  },
  beforeCreate() {
    init = 0;
    init++;
    console.log(init);
    this.beforeCreate = init;
    console.log("------beforeCreate------", init);
  },
  created() {
    init++;
    this.created = init;
    console.log("------created------", init);
  },
  beforeMount() {
    init++;
    this.beforeMount = init;
    console.log("------beforeMount------", init);
  },
  mounted() {
    init++;
    this.mounted = init;
    console.log("------mounted------", init);
  },
  beforeUpdate() {
    // init++;
    // this.beforeUpdate++;
    console.log("------beforeUpdate------", init);
  },
  updated() {
    // init++;
    // this.updated++;
    console.log("------updated------", init);
  },
  activated() {
    init++;
    this.activated = init;
    // alert("activated：" + init);
    console.log("------activated------", init);
  },
  deactivated() {
    init++;
    this.deactivated = init;
    alert("deactivated：" + init);
    console.log("------deactivated------", init);
  },
  beforeDestroy() {
    init++;
    alert("beforeDestroy：" + init);
    this.beforeDestroy = init;
    console.log("------beforeDestroy------", init);
  },
  destroyed() {
    init++;
    alert("destroyed：" + init);
    this.destroyed = init;
    console.log("------destroyed------", init);
  },
};
</script>