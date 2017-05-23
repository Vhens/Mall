<template>
  <div class="integral">
        <header class="integral-header">
             <span class="item icon iconfont icon-jiantou"></span>
             <span class="item">我的积分</span>
             <span class="item"></span>
        </header>
        <section class="conent">
            <div class="sum-integral">
                100
            </div>
            <ul>
                <li>
                    <div class="item">
                        <p class="name">购物返回积分</p>
                        <p class="time">2017-05-20 04:20:56</p>
                    </div>
                    <div class="item">
                        +50积分
                    </div>
                </li>
                <li>
                    <div class="item">
                        <p class="name">购物返回积分</p>
                        <p class="time">2017-05-20 04:20:56</p>
                    </div>
                    <div class="item">
                        +50积分
                    </div>
                </li>
            </ul>
        </section>
  </div>
</template>

<script>
export default {
  name: 'integral'
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.integral{
    .integral-header{
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
    .conent{
        .sum-integral{
            width:100%;
            height:px2rem(150);
            line-height:px2rem(150);
            margin-top:20px;
            text-align:center;
            font-size:px2rem(60);
            background-color:#fff;
            color:#FC605A;
        }
        ul{
            margin-top:20px;
            background-color:#fff;
        }
        li{
            display:flex;
            align-items:center;
            padding:5%;
            .item{
                flex:1;
                .name{
                    font-size:px2rem(40);
                }
                .time{
                    margin-top:10px;
                    font-size:px2rem(24);
                    color:#444;
                }
            }
            .item:nth-of-type(2){
                text-align:right;
                font-size:px2rem(40);
                color:#FC605A;
            }
        }
        li:not(:last-child){
            z-index:3;
            @include border-1px(bottom,#ccc)
        }
    }
}
</style>
