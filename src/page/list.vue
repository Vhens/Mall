<template>
  <div class="list">
     <section class="wrapper">
         <div class="list-item">
             <div class="title">
                 <div class="item">服装</div>
                 <div class="item"><i class="icon iconfont icon-jiantou"></i> </div>
            </div>
            <div class="content">
                <ul>
                    <li>
                        <router-link to="">
                            <div class="item">
                                <img src="../assets/img/detail-ban02.png" alt="">
                                <p class="name">女装</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="item">
                                <img src="../assets/img/detail-ban02.png" alt="">
                                <p class="name">女装</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
         </div>
        <div class="list-item">
             <div class="title">
                 <div class="item">服装</div>
                 <div class="item"><i class="icon iconfont icon-jiantou"></i> </div>
            </div>
            <div class="content">
                <ul>
                    <li>
                        <router-link to="">
                            <div class="item">
                                <img src="../assets/img/detail-ban02.png" alt="">
                                <p class="name">女装</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <div class="item">
                                <img src="../assets/img/detail-ban02.png" alt="">
                                <p class="name">女装</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
         </div>
     </section>
  </div>
</template>
<script>
export default {
  name: 'list'
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.list{
    margin-bottom:px2rem(180);
    .list-item{
        margin-bottom:5%;
    }
    .title{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:3% 5%;
        background-color:#fff;
        margin-bottom:5%;
        .item{
            flex:1;

        }
        .item:nth-of-type(1){
           font-size:px2rem(36);
           color:#45c018;
        }
        .item:nth-of-type(2){
            text-align:right;
        }
        .icon{
               font-size:px2rem(50)
        }
    }
    .content{
        ul{
            display:flex;
            justify-content:center;
            li{
                flex:1;
                padding:0 3%;
                overflow:hidden;
            }
            .item{
                position:relative;
                width:px2rem(325);
                height:auto;
                img{
                   display:block;
                   width:px2rem(325);
                   height:px2rem(325);
                   vertical-align:middle;
                }
                .name{
                    position: absolute;
                    bottom:0;
                    left:0;
                    width:100%;
                    height:px2rem(80);
                    line-height:px2rem(80);
                    text-align:center;
                    background-color:rgba(0,0,0,.3);
                    font-size:px2rem(36);
                    color:#fff;
                }
            }
        }
    }
}
</style>
