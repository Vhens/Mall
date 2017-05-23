<template>
  <div class="cart">
         <header class="cart-header">
             <span class="item icon iconfont icon-jiantou"></span>
             <span class="item">购物车</span>
             <span class="item"></span>
        </header>
         <alert></alert>
        <section class="content">

           <div class="list">
                <div class="item">
                    <check-a style="display:inline;"></check-a>
                    <img src="../assets/img/detail-ban02.png" alt="">
                </div>
                <div class="item">
                    <p class="name line-1">超级大品牌服装，现在买只要998</p>
                    <p class="color">颜色：经典绮丽款</p>
                    <p class="size">尺寸：L</p>
                    <p class="price">￥653.00</p>
                    <div class="item-box">
                       <div class="sub-item">
                            <span>-</span>
                            <span>3</span>
                            <span>+</span>
                       </div>
                       <div class="sub-item">
                           <i class="icon iconfont icon-shanchu"></i>
                       </div>
                    </div>
                </div>
           </div>
        </section>
        <section class="balance">
            <div class="balance-box">
                <div class="item"><b>合计：￥108.90</b></div>
                <div class="item">
                    <router-link to="">去结算（2）</router-link>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
import checkA from '@/components/button/checkA'
import alert from '@/components/dialog/alert'
export default {
  name: 'cart',
  components:{
    checkA,
    alert
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.cart{
     .cart-header{
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#fc605a;
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
            color:#fff;
            transform:rotate(180deg) translateX(-10px);
        }
        .item:nth-of-type(2){
            color:#fff;
        }
        .item:nth-of-type(3){
            color:#fc605a;
        }
    }
    .list{
        display:flex;
        justify-content:flex-start;
        margin-top:10px;
        padding:3%;
        background-color:#fff;
        .item{
            flex:1 100px;
            width:100%;
            height:100%;

            img{
                width:px2rem(240);
                height:px2rem(240);
                vertical-align:middle;
            }
            .name{
                font-size:px2rem(36)
            }
            .color,.size{
                margin-top:5px;
                font-size:px2rem(30);
                color:#999;
            }
            .price{
                margin-top:5px;
                text-align:right;
                font-size:px2rem(36);
                color:#fc605a;
            }
        }
        .item-box{
            display:flex;
            align-items:center;
            margin-top:10px;
            .sub-item{
                flex:1;
                font-size:0;
                span{
                    display:inline-block;
                    width:px2rem(55);
                    height:px2rem(55);
                    line-height::px2rem(50);
                    text-align:center;
                    font-size:px2rem(36);
                    border:1px solid #ccc;
                }
                span:nth-of-type(1){
                    border-top-left-radius:4px;
                    border-bottom-left-radius:4px;
                    border-right:none;
                }
                span:nth-of-type(3){
                    border-top-right-radius:4px;
                    border-bottom-right-radius:4px;
                    border-left:none;
                }
                .icon-shanchu{
                    font-size:px2rem(50);

                }
            }
            .sub-item:last-child{
                text-align:right;
            }
        }
    }
    .balance{
        position:fixed;
        bottom:px2rem(160);
        left:0;
        width:100%;
    }
    .balance-box{
        display:flex;
        align-items:center;
        height:px2rem(100);
        .item,a{
            flex:1;
            font-size:px2rem(40);
            color:#fff;
            padding:5%;
            text-align:center;
        }
        .item:nth-of-type(1){
            background-color:rgba(0,0,0,.7);
        }
        .item:nth-of-type(2){
            background-color:#45C018;
        }
    }
}
</style>
