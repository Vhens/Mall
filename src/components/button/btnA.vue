<template>
  <div class="btn-a">
     <router-link v-for="(item,index) in btn" :key="index" :to="item.url">{{item.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'btnA',
  props:{
    btn:{
        type:Array,
        default:[]
    }
  }

}
</script>

<style lang="scss" scoped>
  @import '../../assets/sass/main.scss';
  .btn-a{
     margin:px2rem(60) px2rem(50)  px2rem(180) px2rem(50);
     a{
        display:inline-block;
        width:100%;
        height:px2rem(100);
        line-height:px2rem(100);
        font-size:px2rem(38);
        color:#fff;
        text-align:center;
        border-radius:8px;
        background-color:#FC605A;
     }
  }
</style>
