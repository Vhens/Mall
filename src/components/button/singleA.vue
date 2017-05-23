<template>
  <div class="radioA">
        <input id="radio-1" name="radio" type="radio" checked>
        <label for="radio-1"></label>
        <input id="radio-2" name="radio" type="radio">
        <label for="radio-2"></label>
  </div>
</template>

<script>
export default {
  name: 'radioA'
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
/**
 * 自定义单选框样式
 */
input[type='radio']{
    display:none;
}
input[type='radio']+label{
    display:inline-block;
    position:relative;
    overflow:hidden;
    width:18px;
    height:18px;
    vertical-align:middle;
    border:1px solid #888;
    background-color:#fff;
    margin-right:10px;
    cursor:pointer;
    @include border-radius(50%)
}

input[type='radio']+label:after{
    content:'';
    position:absolute;
    top:2px;
    left:2px;
    width:12px;
    height:12px;

    background-color:orange;
    @include border-radius(50%);
    @include transform(scale(0));
    @include transition(transform .2s ease-out)
}

 input[type='radio']:checked+label{
    background-color:#fff;
    @include transition(background-color .2s ease-in)
}
input[type='radio']:checked+label:after{
    background-color:orange;
    @include transform(scale(1));
    @include transition(transform .2s ease-in);
}
</style>
