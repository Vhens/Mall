export const formatDate =(str) =>{
    if(!str){
        return ''
    }
    let date=new Date(str);
    // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    let time=new Date().getTime()-date.getTime()
    if(time<0){
        return ''
    }else if(time/1000<30){
        return '刚刚'
    }else if(time/1000<60){
        return parseInt(time/1000)+'秒之前'
    }else if(time/(1000*60)<60){
        return parseInt(time/(1000*60))+"分钟之前"
    }else if(time/(1000*60*60)<24){
        return parseInt(time/(1000*60*60))+"小时之前"
    }else if(time/(1000*60*60*24)){
        return parseInt(time/(1000*60*60*24))+"天之前"
    }else if(time/(1000*60*60*24*30)<31){
        return parseInt(time/(1000*60*60*24*30))+"月之前"
    }else{
        return parseInt(time/(1000*60*60*24*365))+"年之前"
    }
}