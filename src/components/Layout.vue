<template>
  <div id="app">
   <!--  <app-head></app-head> -->
    <div class="content">
        <transition name="slide-fade">
          <keep-alive>
               <cirLoad  v-if="isLoad"></cirLoad>
               <router-view></router-view>
          </keep-alive>
        </transition>
    </div>
    <app-foot></app-foot>
  </div>
</template>

<script>

import appHead from '@/components/header/appHead'
import appFoot from '@/components/footer/appFoot'
import cirLoad from '@/components/loading/cirLoad'
export default {
  name: 'app',
  components:{
    appHead,
    appFoot,
    cirLoad
  },
  data(){
    return{
      isLoad:false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
.content{
  width:100%;
  height:100%;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>
