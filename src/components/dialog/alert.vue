<template>
    <div class="dialog">
        <div class="dialog-wrapper">
            <div class="dialog-header">
                <span class="dialog-header-title">温馨提示</span>
            </div>
            <div class="dialog-content">
                的时刻撒大家
            </div>
            <div class="dialog-btns">
                <div class="btn cancel-btn">取消</div>
                <div class="btn sure-btn">确定</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';
    .dialog {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        background: rgba(0, 0, 0, .4);
        z-index:999;
        .dialog-wrapper {
            position: absolute;
            left: 50%;
            top: 30%;
            width:100%;
            max-width: px2rem(600);
            transform: translateX(-50%);
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
            box-sizing: border-box;
            animation: dialog .5s;
        }
        .dialog-header {
            padding: 15px;
            font-size:px2rem(36);
            text-align:center;
            @include border-1px(bottom,#ccc)
        }
        .dialog-content {
            padding: 40px 20px;
            color: #475669;
            font-size:px2rem(32);
            text-align: center;
        }
        .dialog-btns {
            text-align: center;
            font-size:0;
            @include border-1px(top,#ccc)
            .btn {
                display:inline-block;
                width:50%;
                padding: 15px;
                font-size: px2rem(30);
            }
            .btn:first-child{
                 @include border-1px(right,#ccc)
            }
        }
    }
    @keyframes dialog {
        from{
            top: 15%;
        }
    }
</style>