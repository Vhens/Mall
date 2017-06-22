<template>
  <div class="order">
        <header class="order-header">
             <span class="item icon iconfont icon-jiantou"></span>
             <span class="item">待发货</span>
             <span class="item"></span>
        </header>
        <section class="title">
            <div class="item">
                <i class="icon iconfont icon-dizhi"></i>
            </div>
            <div class="item">
                <p class="name">史蒂夫&nbsp;15624897324</p>
                <p class="addr">安徽省合肥市高新区科学大道天波路浙商大厦a座806</p>
            </div>
        </section>
        <section class="content">
            <ul>
                <li>
                    <div class="item">
                        <img src="../assets/img/detail-ban02.png" alt="">
                    </div>
                    <div class="item">
                        <p class="name">超级大品牌服装，现在够买只要998</p>
                        <p class="color">颜色：经典绮丽款</p>
                        <p class="size">尺寸：L</p>
                        <p><span  class="price">￥32.00</span><span class="count">x3</span></p>
                        <p><input type="button" name="" value="退货/退款"></p>
                    </div>
                </li>
                <li>
                    <div class="item-1 tf">运费</div>
                    <div class="item-1 tr">包邮</div>
                </li>
                 <li>
                    <div class="item-1 tf">商品总额</div>
                    <div class="item-1 tr">￥96.00</div>
                </li>
            </ul>
            <div class="info">
               <p class="tf">
                    下单时间：2015-1125 22:04:41<br>订单编号：214484605204859
                </p>
            </div>
        </section>
  </div>
</template>

<script>
export default {
  name: 'order',
  components:{
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.order{
    .order-header{
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
    .title{
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#fff;
        margin-top:10px;
        padding:20px 0;
        .item:nth-of-type(1){
            text-align:center;
            flex:0 0 px2rem(100);
            .icon{
               font-size:px2rem(66);
            }
        }
        .item:nth-of-type(2){
            font-size:px2rem(36);
            padding:0 10px;
            color:#666;
            .addr{
                margin-top:10px;
            }
        }
    }
    .content{
        margin-top:10px;
        margin-bottom:px2rem(170);
        background-color:#fff;
        li{
            display:flex;
            justify-content:center;
            padding:5%;
        }
        li:not(:last-child){
            border-bottom:1px solid #ccc;
        }
        .item-1{
            flex:1;
            color:#666;
        }
        .item{
            img{
                width:px2rem(260);
                height:px2rem(300)
            }
            .name{
                font-size:px2rem(36);
            }
            .color,.size{
                padding-top:5px;
                font-size:px2rem(26);
                color:#666;
            }
            .price{
                display:inline-block;
                 font-size:px2rem(36);
                 font-weight:bold;
                 padding-top:5px;
                 color:#FC605A;
            }
            .count{
                 display:inline-block;
                 font-size:px2rem(24);
                 float:right;
                 color:#666;
            }
            input[type="button"]{
                width:px2rem(150);
                height:px2rem(60);
                outline:none;
                border-radius:4px;
                margin-top:10px;
                border:1px solid #45C018;
                color:#45C018;
                background-color:#fff;
            }
        }
        .item:nth-of-type(1){
            flex:0 0 px2rem(300)
        }
        .info{
            padding:5%;
            border-top:1px solid #ccc;
            color:#666;
            line-height:px2rem(40);
        }
    }
}
</style>
