<template>
  <div class="datum">
     <header class="datum-header">
         <span class="item icon iconfont icon-jiantou"></span>
         <span class="item">我的资料</span>
         <span class="item"></span>
     </header>
     <section class="datum-content">
         <ul>
             <li>
                 <router-link to="">
                    <div class="item">头像</div>
                    <div class="item">
                        <img src="../assets/img/tx.jpg" alt="">
                    </div>
                    <div class="item">
                        <span class="icon iconfont icon-jiantou"></span>
                    </div>
                 </router-link>
             </li>
             <li>
                <router-link to="/updateName">
                    <div class="item">昵称</div>
                    <div class="item">
                       vhen
                    </div>
                    <div class="item">
                        <span class="icon iconfont icon-jiantou"></span>
                    </div>
                 </router-link>
             </li>
             <li>
                <router-link to="">
                    <div class="item">性别</div>
                    <div class="item">
                        <select name="" id="" v-model="selected">
                            <option value="0">男</option>
                            <option value="1">女</option>
                        </select>
                    </div>
                    <div class="item">
                        <span class="icon iconfont icon-jiantou"></span>
                    </div>
                 </router-link>
             </li>
         </ul>
     </section>
  </div>
</template>

<script>
export default {
  name: 'datum',
  data(){
    return{
        selected:0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.datum{
    .datum-header{
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#fff;
        box-shadow:0 -1px 2px #444;
        .item{
            flex:1;
            display:block;
            height:px2rem(100);
            line-height:px2rem(100);
            text-align:center;
            font-size:px2rem(36);
        }
        .icon-jiantou{
            font-size:px2rem(50);
            text-align:right;
            transform:rotate(180deg) translateX(-10px);
        }
        .item:nth-of-type(1){
            color:#444;
        }
        .item:nth-of-type(3){
            color:#fc605a;
        }
    }
    .datum-content{
        ul{
            margin-top:10px;
            background-color:#fff;
            li{
                padding:3% 5%;
            }
            li:not(:last-child){
                z-index:3;
                 @include border-1px(bottom,#ccc);
            }
        }
        a{
            display:flex;
            align-items:center;
            font-size:px2rem(36);
            .icon{
                font-size:px2rem(50);
            }
            select {
                 appearance:none;
                 border:none;
                 outline:none;
                 font-size:px2rem(36);
                 color:#666;
            };
            .item:nth-of-type(2){
                flex-grow:2;
                text-align:right;
                transform:translateX(-20px);
                img{
                    width:px2rem(80);
                    height:px2rem(80);
                    border-radius:50%;
                }
            }
        }
    }
}
</style>
