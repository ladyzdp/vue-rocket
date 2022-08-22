<template>
  <div class="children-wrap">
    <h6>通过observable接收数据并渲染的列表组件</h6>
    <ul v-if="proList && proList.length > 0">
      <li v-for="(item, index) in proList" :key="index" class="grid mg20">
        <div>
          姓名：{{ item.name }} <br />
          身份证号码：{{ item.idCard }} <br />
          性别：{{ item.sex }} <br />
          出生日期：{{ item.birthday }} <br />
        </div>
        <div>
          <a
            href="javascript:;"
            role="button"
            class="contrast"
            @click="getInfo(item)"
            >获取信息</a
          >
          
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {store,mutations} from '@/store/store';

export default {

  data() {
    return {
    };
  },
  computed:{
    proList(){
      return store.dataSource
    }
  },
  methods: {
    getInfo(item) {
      mutations.setQueryParam(item)
    },
   
  },
};
</script>
<style lang="css" scoped>
.mg20 {
  margin: 20px 0;
}
.children-wrap{
    border: 1px dashed #17ce07;
}
</style>