<template>
  <div class="slide" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-piont">
<!--       <li @click="goto(prevIndex)">&lt;</li> -->
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{on: index === nowIndex}"></a>
      </li>
<!--       <li @click="goto(nextIndex)">&gt;</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv();
  }
}
</script>


<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(640px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-640px);
}
.slide {
  position: relative;
  width: 100%;
  height: px2rem(350);
  margin-top:px2rem(120);
  overflow: hidden;
  .slide-img {
    width: 100%;
    img {
      width: 100%;
      height:100%;
      position: absolute;
      top: 0;
    }
  }
  .slide-piont {
    position: absolute;
    bottom: 10px;
    left:35%;
     li {
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
        color: #fff;
        a{
          display:inline-block;
          width:10px;
          height:10px;
          border-radius:50%;
          background-color:rgba(0,0,0,.6);
        }
      }
      .on {
        background-color:#fff;
      }
  }
}
</style>
