<template>
  <div class="cirLoad">
         <span class="circles-loader">Loading&#8230;</span>
  </div>
</template>

<script>
export default {
  name: 'cirLoad'
}
</script>

<style lang="scss" scoped>
.cirLoad{
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    background:#fff;
    z-index:300;
    overflow:hidden;
    .circles-loader:not(:required) {
          position: relative;
          top:40%;
          left:45%;
          transform:translate(-50%,-45%);
          text-indent: -9999px;
          display: inline-block;
          width: 80px;
          height: 80px;
          background: rgba(255, 204, 51, 0.9);
          border-radius: 100%;
          -moz-animation: circles-loader 3s infinite ease-in-out;
          -webkit-animation: circles-loader 3s infinite ease-in-out;
          animation: circles-loader 3s infinite ease-in-out;
          -moz-transform-origin: 50% 100%;
          -ms-transform-origin: 50% 100%;
          -webkit-transform-origin: 50% 100%;
          transform-origin: 50% 100%;
    }
    .circles-loader:not(:required)::before {
          background: rgba(255, 102, 0, 0.6);
          border-radius: 100%;
          content: '';
          position: absolute;
          width: 80px;
          height: 80px;
          top: 35px;
          left: -50px
    }
    .circles-loader:not(:required)::after {
          background: rgba(255, 51, 0, 0.4);
          border-radius: 100%;
          content: '';
          position: absolute;
          width: 80px;
          height: 80px;
          top: 60px;
          left: 5.82532px;
    }
    @keyframes circles-loader {
      0% {
        -moz-transform: rotate(-720deg);
        -ms-transform: rotate(-720deg);
        -webkit-transform: rotate(-720deg);
        transform: rotate(-720deg);
      }
      50% {
        -moz-transform: rotate(720deg);
        -ms-transform: rotate(720deg);
        -webkit-transform: rotate(720deg);
        transform: rotate(720deg);
      }
    }
}
</style>
