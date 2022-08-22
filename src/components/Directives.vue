<template>
  <div>
    <div v-if="show">v-if指令</div>
    <div v-else-if="!show">v-else-if指令</div>
    <div v-else>v-else指令</div>
    <div v-show="show">v-show指令</div>
    <hr />
    <div>
      <h6>v-for指令</h6>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div>姓名：{{ item.name }}</div>
          <div>身份证号：{{ item.idCard }}</div>
        </li>
      </ul>
    </div>
    <hr />
    <List :list="list">
      <h6>v-slot指令</h6>
      <button type="button" class="secondary" @click="toggleStatus">
        切换显示隐藏状态
      </button>
    </List>
    <br />
    <hr />
    <h6>v-html指令</h6>
    <div v-html="html"></div>
    <hr />
    <h6>v-model和修饰符</h6>
    <form>
      <div class="grid">
        <label for="name">
          Name
          <input
            ref="name"
            type="text"
            id="name"
            name="name"
            v-model.trim="form.name"
            placeholder="Name"
            required
          />
        </label>

        <label for="age">
          Age
          <input
            type="number"
            id="age"
            name="age"
            :min="0"
            v-model.number="form.age"
            placeholder="Age"
            required
          />
        </label>
      </div>
      <button type="button" @click="submitForm">submit</button>
    </form>
  </div>
</template>

<script>
import List from "@/components/Data/List.vue";
export default {
  components: { List },
  data() {
    return {
      show: true,
      form: {
        name: null,
        age: null,
      },

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

  created() {
    //  this.$refs.name.focus();
    this.$nextTick(() => {
      this.$refs.name.focus();
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