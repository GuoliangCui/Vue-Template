<template>
  <div class="home">
    地址：{{ apiUrl }}
    <div v-for="item in dataList" :key="item.name">
      <img :src="item.headUrl" style="width:50px;height:50px;" alt="" />
      {{ item.name }}:{{ item.age }} {{ item.address }}
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import {UserService} from '@/service/index'
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  data() {
    return {
      apiUrl: "guoliang",
      dataList: []
    };
  },
  mounted() {
    // this.apiUrl=process.env.VUE_APP_BASE_API;
    this.getData();
  },
  methods: {
    getData() {
      UserService.getUserList().then(res => {
        this.dataList = res.data;
        console.log(res, "返回数据");
      });
    }
  }
  // components: {
  //   HelloWorld
  // }
};
</script>
<style lang="less" scoped>
.home {
  // background: url(~assets/imgs/back.png) no-repeat center center;
  background-size: 100% 100%;
  border: 1px solid red;
}
</style>
