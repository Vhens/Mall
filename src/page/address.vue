<template>
  <div class="address">
        <header class="address-header">
             <span class="item icon iconfont icon-jiantou"></span>
             <span class="item">地址管理</span>
             <span class="item">添加</span>
        </header>
        <section class="content">
            <ul>
                <li>
                    <router-link to="">
                        <p class="name">vhen 18606066451 <span class="default">默认</span></p>
                        <p class="addr">福建厦门</p>
                    </router-link>
                </li>
            </ul>
        </section>
  </div>
</template>

<script>
export default {
  name: 'address'
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.address{
    .address-header{
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
        margin-top:20px;
        li{
            background-color:#fff;
            padding:5%;
        }
        li:not(:last-child){
            z-index:3;
            @include border-1px(bottom,#ccc)
        }
        .name{
            width:100%;
            height:px2rem(40);
            font-size:px2rem(36);
            .default{
                display:inline-block;
                width:px2rem(100);
                height:px2rem(60);
                line-height:px2rem(60);
                font-size:px2rem(28);
                text-align:center;
                border-radius:4px;
                color:#fff;
                background-color:#45c018;
            }
        }
        .addr{
            margin-top:10px;
            font-size:px2rem(26)
        }
    }
}
</style>
