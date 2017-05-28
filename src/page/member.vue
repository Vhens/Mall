<template>
  <div class="member" v-cloak>
      <!-- 会员中心头部开始 -->
      <header class="member-header">
          <div class="item-header">
                <img src="../assets/img/tx.jpg" alt="">
          </div>
          <div class="item-header">
            <p class="name">史蒂夫</p>
            <p class="integrate"><i class="icon iconfont icon-huizhanghuiyuan"></i>5652&nbsp;sdsdds</p>
          </div>
          <div class="item-header">
              <p class="sign">签到</p>
          </div>
      </header>
      <!-- 会员中心头部结束 -->
      <!-- 会员中心订单状态开始 -->
      <section class="order-status">
          <p class="order-header">
              <i class="order-icon icon iconfont icon-dingdan"></i>
              <i class="title">全部订单</i>
              <i class=" icon iconfont icon-jiantou"></i>
          </p>
          <ul>
              <li>
                  <router-link to="">
                      <i class="icon iconfont icon-daifahuo"></i>
                      <p class="name">待发货</p>
                  </router-link>
              </li>
              <li>
                  <router-link to="">
                      <i class="icon iconfont icon-fukuan"></i>
                      <p class="name">待付款</p>
                  </router-link>
              </li>
              <li>
                  <router-link to="">
                      <i class="icon iconfont icon-daishouhuo"></i>
                      <p class="name">待收货</p>
                  </router-link>
              </li>
              <li>
                  <router-link to="">
                      <i class="icon iconfont icon-pingjia"></i>
                      <p class="name">待评论</p>
                  </router-link>
              </li>
          </ul>
      </section>
      <!-- 会员中心订单状态结束 -->
      <!-- 会员中心列表开始 -->
      <section class="member-list">
            <ul>
                <li>
                    <router-link to="/Datum">
                       <i class="icon iconfont icon-icon1"></i>
                       <i class="title">个人信息</i>
                       <i class=" icon iconfont icon-jiantou"></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                       <i class="icon iconfont icon-lanmeiwodeshoucang"></i>
                       <i class="title">我的收藏</i>
                       <i class=" icon iconfont icon-jiantou"></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/Integral">
                       <i class="icon iconfont icon-jifen"></i>
                       <i class="title">我的积分</i>
                       <i class=" icon iconfont icon-jiantou"></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/Address">
                       <i class="icon iconfont icon-dizhi"></i>
                       <i class="title">地址管理</i>
                       <i class=" icon iconfont icon-jiantou"></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                       <i class="icon iconfont icon-fenxiao"></i>
                       <i class="title">我的分销</i>
                       <i class=" icon iconfont icon-jiantou"></i>
                    </router-link>
                </li>
                 <li>
                    <router-link to="">
                       <i class="icon iconfont icon-yaoqinghaoyou2"></i>
                       <i class="title">邀请好友</i>
                       <i class=" icon iconfont icon-jiantou"></i>
                    </router-link>
                </li>
            </ul>
      </section>
      <!-- 会员中心列表结束-->
      <btn  :btn="btnData"></btn>
  </div>
</template>

<script>
import btn from '@/components/button/btnA';
export default {
  name: 'member',
  components:{
    btn
  },
  data(){
    return{
        btnData:[
            {
                "name":"退出",
                "url":"/Login"
            }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
[v-cloak] {
  display: none;
}
    .member{
        .member-header{
            display:flex;
            flex-flow:nowrap row;
            justify-content:center;
            align-items:center;
            width:100%;
            height:px2rem(240);
            background-color:#FC605A;
        }
        .item-header{
            flex:1;
            img{
                width:px2rem(150);
                height:px2rem(150);
                border-radius:50%;
            }
            .name{
                font-size:px2rem(36);
                font-weight:bold;
                color:#fff;
            }
            .integrate{
                margin-top:10px;
                font-size:px2rem(30);
                color:#fff;
            }
            .sign{
                width:px2rem(150);
                height:px2rem(80);
                line-height:px2rem(80);
                font-size:px2rem(30);
                margin-left:20px;
                background-color:#fff;
                border-radius:4px;
            }
        }
        .item-header:nth-of-type(1),.item-header:nth-of-type(3){
            text-align:center;
        }
        .order-status{
            .order-header{
                display:flex;
                align-items:baseline ;
                width:100%;
                padding:0 px2rem(60);
                height:px2rem(100);
                @include border-1px(bottom,#ccc);
                background-color:#fff;
                z-index:3;
                i{
                   font-style:normal
                }
                i:nth-of-type(2){
                  flex-grow:2;
                  font-size:px2rem(36);
                  color:#666;
                }

                .order-icon{
                    font-size:px2rem(70);
                    transform:translateY(2px);
                    color:#666;
                }
                .icon-jiantou{
                    font-size:px2rem(60);
                }
                .title{
                    font-size:px2rem(30);
                }
            }
            ul{
                display:flex;
                align-items:center;
                padding:3%;
                background-color:#fff;
            }
            li{
                flex:1;
                text-align:center;
                .icon{
                    font-size:px2rem(80);
                }
                .name{
                    margin-top:5px;
                    font-size:px2rem(36);
                }
            }
        }
        .member-list{
            ul{
                margin-top:20px;
                background-color:#fff;
            }
            a{
                display:flex;
                align-items:center;
                width:100%;
                padding:px2rem(30) px2rem(60);
                height:px2rem(100);
                i{
                   font-style:normal
                }
                i:nth-of-type(2){
                    flex-grow:2;
                    transform:translateX(px2rem(30));
                }
                .icon{
                    font-size:px2rem(60);
                }
                .title{
                    font-size:px2rem(36);
                }
            }
            li:not(:last-child){
                z-index:3;
                @include border-1px(bottom,#ccc);
            }
        }

    }
</style>
