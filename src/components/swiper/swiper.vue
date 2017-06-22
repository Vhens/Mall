<template>
  <div class="swiper">
    <swiper id="swiper_vertical"
            :pagination-visible="true"
            @slide-change-start="onSlideChangeStart"
            @slide-change-end="onSlideChangeEnd"
            @slide-revert-start="onSlideRevertStart"
            @slide-revert-end="onSlideRevertEnd"
            @slider-move="onSliderMove">
        <div class="slide-1">↑<br>o<br>↓</div>
        <div v-for="n in [2,3]">Page {{n}}</div>
    </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'vue-swiper'
export default {
  name: 'swiper',
  components: {Swiper},
  methods: {
    onSlideChangeStart (currentPage) {
    console.log('onSlideChangeStart', currentPage);
    },
    onSlideChangeEnd (currentPage) {
    console.log('onSlideChangeEnd', currentPage);
    }
 }
}
</script>

<style>
</style>
