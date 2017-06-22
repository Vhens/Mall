<template>
  <div class="head">
      <header class="head-content">
          <span class="title">商城首页</span>
      </header>
  </div>
</template>

<script>
export default {
  name: 'head'
}
</script>

<style lang="scss" scoped>
 @import '../../assets/sass/main.scss';
  .head{
      position:fixed;
      top:0;
      left:0;
      right:0;
      z-index:3;
      width:100%;
      min-width:320px;
      max-width:640px;
      height:px2rem(120);
      line-height:px2rem(120);
      background-color:#FC605A;
      .head-content{
            text-align:center;
      }
      .title{
            font-size:px2rem(36);
            color:#fff;
      }
  }
</style>
