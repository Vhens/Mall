<template>
  <div class="register">
     <header class="register-header">
        <router-link to="" class="item">取消</router-link>
        <router-link to="" class="item">登录</router-link>
        <router-link to="/Register" class="item">注册</router-link>
     </header>
     <div class="register-content">
         <div class="item">
             <label for="userName">
                <i class="icon iconfont icon-zhanghao"></i>账号
             </label>
             <input type="text" id="userName" placeholder="请输入账号">
         </div>
         <div class="item">
             <label for="pwd">
                <i class="icon iconfont icon-mima"></i>密码
             </label>
             <input type="password" id="pwd" placeholder="请输入密码">
         </div>
        <div class="item">
             <label for="pwd">
                <i class="icon iconfont icon-mima"></i>密码
             </label>
             <input type="password" id="repwd" placeholder="请输入确认密码">
         </div>
     </div>
     <btn :btn="btnData"></btn>
  </div>
</template>

<script>
import btn from '@/components/button/btnA';
export default {
  name: 'register',
  components:{
    btn
  },
  data(){
    return{
        btnData:[
            {
                "name":"立即注册",
                "url":"/Login"
            }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.register{
    .register-header{
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
        .item:nth-of-type(1){
            color:#444;
        }
        .item:nth-of-type(3){
            color:#fc605a;
        }
    }
    .register-content{
        width:100%;
        margin-top:20px;
        .item{
             width:100%;
             height:px2rem(120);
             padding:0 5%;
             line-height:px2rem(120);
             background-color:#fff;
             margin-bottom:10px;
        }
        label{
            display:inline-block;
            width:24%;
            font-size:px2rem(36);
            .icon{
                margin-right:5px;
            }
            .icon-zhanghao{
                color:#fc605a;
                font-size:px2rem(42)
            }
            .icon-mima{
                color:#45c018;
                font-size:px2rem(46)
            }
        }
        input[type="text"],input[type="password"]{
            width:70%;
            height:px2rem(80);
            line-height:px2rem(80);
            font-size:px2rem(36);
            outline:none;
        }
        input-placeholder{
            font-size:px2rem(36);
        }
    }
}
</style>
