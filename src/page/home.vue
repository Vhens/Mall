<template>
  <div class="home">
        <app-head></app-head>
        <slide :slides="slides" :inv="invTime"></slide>
        <list></list>
  </div>
</template>

<script>

import appHead from '@/components/header/appHead'
import list from '@/page/list'
import slide from '@/components/slide/slide'
export default {
  name: 'home',
  components:{
    appHead,
    list,
    slide
  },
  data(){
    return{
          invTime: 2000,
          slides: [
            {
              src: require('../assets/img/img2.jpg'),
              href: 'http://www.baidu.com'
            },
            {
              src: require('../assets/img/img3.jpg'),
              href: 'http://www.baidu.com'
            },
            {
              src: require('../assets/img/img4.jpg'),
              href: 'http://www.baidu.com'
            },
            {
              src: require('../assets/img/img5.jpg'),
              href: 'http://www.baidu.com'
            }
          ]
    }
  }
}
</script>

<style>
</style>
