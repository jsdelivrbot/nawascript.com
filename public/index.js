document.getElementById("one").style.color = "#777";

var sdegree = 0;

$(window).scroll(function() {

    sdegree ++ ;
    sdegree = sdegree + 2 ;
    var srotate = "rotate(" + sdegree + "deg)";
    $("img").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
});
