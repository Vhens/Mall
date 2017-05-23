<template>
  <div class="checkA">
    <input id="checkbox-1" name="checkbox" type="checkbox" checked>
    <label for="checkbox-1"></label>
  </div>
</template>

<script>
export default {
  name: 'checkA'
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';>
/**
 * 自定义复选框样式
 */
input[type='checkbox']{
    display:none;
}
input[type='checkbox']+label{
    display:inline-block;
    position:relative;
    overflow:hidden;
    width:15px;
    height:15px;
    border:1px solid orange;
    background-color:#fff;
    cursor:pointer;
    @include border-radius(2px)
}
input[type='checkbox']+label:after{
    content:'√';
    position:absolute;
    top:1px;
    left:1px;
    width:13px;
    height:13px;
    line-height:13px;
    text-align:center;
    background-color:orange;
    color:#fff;
    font-size:12px;
    font-weight:bold;
    font-family:微软雅黑;
    @include border-radius(2px);
    @include transform(translateY(-18px) rotate(45deg));
    @include transition(transform .2s ease-out)
}
input[type='checkbox']:checked+label:after{
    @include transform(translateY(0));
    @include transition(transform .2s ease-in)
}

input[type='checkbox']{
    display:none;
}
input[type='checkbox']+label{
    display:inline-block;
    position:relative;
    overflow:hidden;
    width:18px;
    height:18px;

    border:1px solid orange;
    background-color:#fff;
    margin-right:10px;
    cursor:pointer;
    @include border-radius(50%)
}

input[type='checkbox']+label:after{
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

 input[type='checkbox']:checked+label{
    background-color:#fff;
    @include transition(background-color .2s ease-in)
}
input[type='checkbox']:checked+label:after{
    background-color:orange;
    @include transform(scale(1));
    @include transition(transform .2s ease-in);
}
</style>
