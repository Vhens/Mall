<template>
  <div class="updateName">
        <header class="updateName-header">
             <span class="item icon iconfont icon-jiantou"></span>
             <span class="item">修改昵称</span>
             <span class="item"></span>
        </header>
        <div class="content">
            <label for="nickName"><i class="icon iconfont icon-zhanghao"></i></label>
            <input type="text" id="nickName" placeholder="vhen">
        </div>
        <p class="limit">推荐使用中文，5-25字符</p>
        <btn :btn="btnData"></btn>
  </div>
</template>

<script>
import btn from '@/components/button/btnA';
export default {
  name: 'updateName',
  components:{
    btn
  },
  data(){
    return{
        btnData:[
            {
                "name":"保存",
                "url":"/Datum"
            }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.updateName{
    .updateName-header{
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
    .content{
        width:100%;
        margin-top:20px;
        padding:5%;
        background-color:#fff;
        .icon-zhanghao{
            font-size:px2rem(60);
            margin-right:10px;
            color:#FC605A;
        }
        input[type="text"]{
            width:70%;
            height:px2rem(80);
            line-height:px2rem(80);
            font-size:px2rem(36);
            outline:none;
        }
    }
    .limit{
        padding:6%;
        font-size:px2rem(26);
        color:#666;
    }
}
</style>
