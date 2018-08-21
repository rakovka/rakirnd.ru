$(function(){
	// start counter code
    var d = [7,6,5,4,3,2,1];
    var today = new Date();
    var end = new Date(today.getFullYear(),today.getMonth(),today.getDate() + d[today.getDay()], 23, 59, 59);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {
               document.getElementById("countdown").innerHTML = "Акция окончена";;
                return;
            }
            var days = Math.floor(distance / _day);
            if (days < 10) days = '0' + days;
            var hours = Math.floor((distance % _day) / _hour);
            if (hours < 10) hours = '0' + hours;
            var minutes = Math.floor((distance % _hour) / _minute);
            if (minutes < 10) minutes = '0' + minutes;
            var seconds = Math.floor((distance % _minute) / _second);
            if (seconds < 10) seconds = '0' + seconds;
            
            $(".count_line .d").html(days);
            $(".count_line .h").html(hours);
            $(".count_line .m").html(minutes);
            $(".count_line .s").html(seconds);
        }

        timer = setInterval(showRemaining, 1000);
	
	
	
	
	});
	
/*
     FILE ARCHIVED ON 00:10:39 Mar 14, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:11:52 Feb 23, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/