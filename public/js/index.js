function play() {
    var i = $('#input').val()
    setCookie("addr", i);

    //如果是直接给流名字 就补完
    if (i.indexOf("/live/") < 0) {
        i = "rtmp://" + window.location.hostname + "/live/" + i;
    }

    //补关键字

    if (i.indexOf('rtmp://') < 0) {
        i = "rtmp://" + i;
    }


    console.log(i)


    $('#player').html('<object pluginspage="http://www.macromedia.com/go/getflashplayer" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="800" height="450" id="ckplayer_a1" name="ckplayer_a1" align="middle"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="true"><param name="quality" value="high"><param name="bgcolor" value="#FFF"><param name="wmode" value="transparent"><param name="movie" value="/ckplayer.swf"><param name="flashvars" value="f=rtmp://119.147.180.57/live/cj&amp;c=0&amp;p=1&amp;v=100"><embed allowscriptaccess="always" allowfullscreen="true" quality="high" bgcolor="#FFF" wmode="transparent" src="/ckplayer.swf" flashvars="f=' + i + '&amp;c=0&amp;p=1&amp;v=100" width="800" height="450" name="ckplayer_a1" id="ckplayer_a1" align="middle" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></object>')


}

$(function() {

    var i = getCookie("addr")
    $('#input').val(i);
})

function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}