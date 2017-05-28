<template>
  <div class="classify">
        <header class="classify-header">
             <span class="item icon iconfont icon-jiantou"></span>
             <span class="item"><input type="search"></span>
             <span class="item"><i class="icon iconfont icon-sousuo"></i></span>
        </header>
    <div class="classify-wrapper">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul
                <li class="menu-item" :class="{'current': currentIndex === index}" v-for="(item,index) in goods" :key="index" @click="selectMenu(index,$event)">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="goods-wrapper" ref="goodsWrapper">
            <ul>
                <li class="item goods-list" v-for="(item,index) in goods" >
                    <p class="title">{{item.name}}</p>
                    <div class="content">
                        <router-link to=""  class="sub-item" v-for="(good,index) in item.good" :key="index" >
                            <div class="sub-content">
                                <div class="img"><img :src="good.picture"  alt=""></div>
                                <div class="name">{{good.name}}</div>
                            </div>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BScroll from 'better-scroll';
// import Swiper from 'vue-swiper'
export default {
  name: 'classify',
  components:{
  },
  data(){
    return{
        goods:[],
        listHeight: [],
        scrollY: 0,
    }
  },
  created(){
    Vue.axios.get('./data/goodData.json').then((res)=>{
       this.goods=res.data.goods
        this.$nextTick( ()=> {
            this._initScroll();
            this._calculateHeight();
        })
    },(error)=>{
        console.log(error);
    })
  },
  computed:{
        currentIndex() {
            for( let i = 0, l = this.listHeight.length; i < l; i++) {
                let height1 = this.listHeight[i];
                let height2 = this.listHeight[i+1];
                if( !height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                    return i;
                }
            }
            return 0;
        },
    },
  methods:{
        selectMenu(index,event) {
            if(!event._constructed) {// 去掉自带click事件的点击
                return;
            }
            let goodList = this.$refs.goodsWrapper.getElementsByClassName('goods-list');
            let el = goodList[index];
            this.goodsScroll.scrollToElement(el,300);
        },
        _initScroll(){
            this.menuScroll=new BScroll(this.$refs.menuWrapper,{
                click: true
            })
            this.goodsScroll=new BScroll(this.$refs.goodsWrapper,{
                probeType: 3,
                click: true
            })
            this.goodsScroll.on('scroll', (pos) => {
                this.scrollY = Math.abs(Math.round(pos.y));
            });
        },
        _calculateHeight() {
            let goodList = this.$refs.goodsWrapper.getElementsByClassName('goods-list');
            let height = 0;
            this.listHeight.push(height);
            for( let i = 0; i < goodList.length; i++) {
                let item = goodList[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }
        }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.classify{
     .classify-header{
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
        .item:nth-of-type(1){
            flex:0 0 px2rem(100);;
        }
        .item:nth-of-type(2){
            color:#fff;
            input[type="search"]{
                width:px2rem(500);
                height:px2rem(60);
                line-height:px2rem(60);
                border-radius:4px;
                padding-left:10px;
                outline:none;
            }
        }
        .item:nth-of-type(3){
            flex:0 0 px2rem(100);
            color:#fff;
        }
    }
   .classify-wrapper{
        position:absolute;
        top:px2rem(100);
        bottom:px2rem(170);
        display:flex;
        width:100%;
        min-width:320px;
        max-width:640px;
        overflow:hidden;
        .menu-wrapper{
            flex:0 0 px2rem(180);
            background: #f3f5f7;
            .menu-item{
                display:table;
                width: px2rem(180);
                height: px2rem(100);
                line-height: px2rem(100);
                padding: 0 12px;
                z-index:3;
                @include border-1px(bottom,#ccc);
                &.current{
                    background-color:#fff;
                }
                span{
                    display: table-cell;
                    width: px2rem(180);
                    vertical-align: middle;
                    font-size:px2rem(24);
                };
            }
        }
        .goods-wrapper{
            flex:1;
            background-color:#fff;
            .title{
                width:100%;
                padding:3% 5%;
                background-color:#f2f2f2;
                font-size:px2rem(36);
            }
            .content{
                padding:5%;
                font-size:0;
                .sub-item{
                    display:inline-block;
                    width:50%;
                }
                .img{
                    width:px2rem(255);
                    height:px2rem(255);
                    padding:3%;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .name{
                    width:100%;
                    height:px2rem(60);
                    line-height:px2rem(60);
                    text-align:center;
                    font-size:px2rem(32)
                }
            }
        }
    }
}

</style>
