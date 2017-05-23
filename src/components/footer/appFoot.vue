<template>
  <div class ="foot">
      <footer>
          <ul>
             <li>
                 <router-link to="/Home">
                   <i class="icon iconfont icon-shouyeshouye"></i>
                   <p class="name"> 首页</p>
                 </router-link>
             </li>
             <li>
                 <router-link to="/Classify">
                    <i class="icon iconfont icon-sort"></i>
                    <p class="name">分类</p>
                 </router-link>
             </li>
             <li>
                 <router-link to="/Cart">
                   <i class="icon iconfont icon-gouwuche"></i>
                   <p class="name">购物车</p>
                 </router-link>
             </li>
             <li>
                 <router-link to="/Member">
                    <i class="icon iconfont icon-huiyuanzhongxin"></i>
                    <p class="name">会员中心</p>
                 </router-link>
             </li>
          </ul>
      </footer>
  </div>
</template>

<script>

export default {
  name: 'foot'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import '../../assets/sass/main.scss';
  .foot{
      position:fixed;
      bottom:0;
      left:0;
      z-index:3;
      width:100%;
      background-color:#fff;
    ul{
        display:flex;
        flex-flow:nowrap row;
        text-align:center;
        height:px2rem(150);
        @include border-1px(top,#ccc);
        box-shadow:0 -1px 1px #ccc;
      li{
        flex:1;
        font-size:px2rem(24);
        padding:10px;
        .name{
          margin-top:5px;
        }
      }
      .icon{
         font-size:px2rem(70);
      }
    }
  }
</style>