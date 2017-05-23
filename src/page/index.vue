<template>
  <div class="box">
      <p v-for="item in msg.user">{{item.userName}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data(){
    return {
        msg:''
    }
  },
  created(){
    Vue.axios.get('./data/userData.json').then((res)=>{
       this.msg=res.data;
    },(error)=>{
        console.log(error);
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import '../assets/sass/main.scss';
$color:red;
.box{
    width:px2rem(600);
    height:px2rem(600);
    color:$color;
    @include border-1px(border,#ccc);
}
</style>

