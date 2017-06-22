<template>
  <div id="app">
    <div class="content">
        <transition name="slide-fade">
          <keep-alive>
               <cirLoad  v-if="isLoad" ></cirLoad>
               <router-view></router-view>
          </keep-alive>
        </transition>
    </div>
    <app-foot v-show="getFootState"></app-foot>
  </div>
</template>

<script>
import appFoot from '@/components/footer/appFoot'
import cirLoad from '@/components/loading/cirLoad'
import { mapGetters } from 'Vuex';
export default {
  name: 'app',
  components:{
    appFoot,
    cirLoad
  },
  computed:{
      ...mapGetters(
          ['getFootState']
        )
  },
  data(){
    return{
      isLoad:false
    }
  },
  watch:{
    $route(to){
      let path=to.path.substring(1);
      if(path=="order"||path=="Login"||path=="Register"||path=="Cart"){
         this.$store.dispatch('hideFoot');
      }
      else{
        this.$store.dispatch('showFoot')
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/sass/main.scss';
#app{
    min-width:320px;
    max-width:640px;
    margin:0 auto;
}
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
