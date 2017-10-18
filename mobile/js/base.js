$(function(){
    var deviceWidth = document.documentElement.clientWidth > 767 ? 500: document.documentElement.clientWidth;
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    //导航
    $('.indexNav ul li,.indexFootNav ul li').click(function(){
        var index = $(this).index();
        switch (index){
            case 0:
            window.location.href='index.html';
                break;
            case 1:
            window.location.href='position.html';
                break;
            case 2:
            window.location.href='study.html';
                break;
            case 3:
            window.location.href='article.html';
                break;
            case 4:
            isTypePhone();
                break;
        }
    });
});
// if(!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
//     window.location.href = "http://www.wmq1688.com/index.html";
// }

// var url ="http://112.74.87.226:8080/home";//本地测试
// var url ="/home";//服务器测试
var url ="http://www.wmq1688.com/";//正式环境
// var url ="http://192.168.254.120/home";//后台IP


//jqAjax封装
function ajaxPackage(url,json){
    return $.ajax({
        url:url,
        type:'POST',
        dataType:'json',
        data:json,
    })
}
//判断安卓还是ios
function isTypePhone(){
    if(navigator.userAgent.match(/(iPhone|iPad|ios)/i)){
        window.open('https://itunes.apple.com/cn/app/wai-mao-quan/id1022780872')
    }else if(navigator.userAgent.match(/(Android)/i)){
        window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.veinixi.wmq')
    }
}
//获取url参数
function getUrl() { 
    var url = location.search; //获取url中"?"符后的字串 
    var theRequest = new Object(); 
    if (url.indexOf("?") != -1) { 
        var str = url.substr(1);
        strs = str.split("&"); 
        for(var i = 0; i < strs.length; i ++) { 
            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]); 
        } 
    }
    return theRequest; 
}


