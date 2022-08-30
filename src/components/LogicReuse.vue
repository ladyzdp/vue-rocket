<template>
  <div>
    <h6>filter过滤器演示</h6>
    <ul>
      <li>金额：{{ momount | NumberFormat }}</li>
      <li :title="disc">项目描述：{{ disc | ellipsis }}</li>
    </ul>
    <hr />
    <h6>directive自定义指令演示</h6>
    <form>
      <div class="grid">
        <label for="firstname">
          姓名
          <input
            ref="firstname"
            type="text"
            id="firstname"
            name="firstname"
            v-focus
            v-model.trim="form.firstname"
            placeholder="请输入您的姓名"
            required
          />
        </label>
      </div>
      <button type="button" @click="submitForm">提交</button>
    </form>
    <hr />
    <h6>Mixins 混入演示</h6>
    <div>{{ message }}</div>
    <br>
    <button type="button" @click="changeMessage">调用Mixins方法</button>
  </div>
</template>

<script>
// import List from "@/components/Data/List.vue";
import { Mixins } from "@/mixins/Mixins";
export default {
  //   components: { List },
  mixins: [Mixins],
  data() {
    return {
      show: true,
      form: {
        firstname: null,
      },
      momount: 10000244,
      disc: "“天眼”数字远程监控系统通过企业内部互联网（Intranet）和国际互联网（internet）实现远程视频监控，主要适合于连锁店、幼儿园、家居、工厂、消防、银行、高速公路、商场、酒店、旅游景点、小区、医院、码头港口等地。",
      html: "<div> <button type='button' class='outline'>v-html指令</button></div>",
      list: [
        {
          name: "赵刘伟",
          idCard: "341323198205181818",
        },
        {
          name: "张顺太",
          idCard: "610124197305126715",
        },
        {
          name: "庄绪强",
          idCard: "411526198101022511",
        },
        {
          name: "郭雪剑",
          idCard: "13052719861023681x",
        },
      ],
    };
  },
  // 局部自定义指令
  // directives: {
  //   focus: {
  //     inserted: function (el) {
  //       el.focus();
  //     },
  //   },
  // },
  // 局部过滤器
  // filters: {
  //   capitalize: function (value) {
  //     if (!value) return "";
  //     console.log(value)
  //     value = value.toString();
  //     return value.toUpperCase();
  //   },
  // },
  mounted() {
    console.log(this.$refs.firstname);
    this.$nextTick(() => {
      this.$refs.firstname.focus();
    });
  },
  methods: {
    toggleStatus() {
      this.show = !this.show;
    },
    submitForm() {
      console.log("this.form=====", { ...this.form });
    },
  },
};
</script>