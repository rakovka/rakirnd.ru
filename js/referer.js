    function referer(){
        engines =
            [
                {start:'https://web.archive.org/web/20161205093736/http://www.google./', query:'q', name:'google'},
                {start:'https://web.archive.org/web/20161205093736/http://yandex./', query:'text', name:'yandex'},
                {start:'rambler.ru/search', query:'query', name:'rambler'},
                {start:'https://web.archive.org/web/20161205093736/http://go.mail.ru/', query:'q', name:'mailru', cp1251:true},
                {start:'https://web.archive.org/web/20161205093736/http://www.bing.com/', query:'q', name:'bing'},
                {start:'search.yahoo.com/search', query:'p', name:'yahoo'},
                {start:'https://web.archive.org/web/20161205093736/http://ru.ask.com/', query:'q', name:'ask'},
                {start:'https://web.archive.org/web/20161205093736/http://search.qip.ru/search', query:'query', name:'qip'}
            ];

        var ref=document.referrer,req="",engine="", start, cp1251;

        for (var i in engines){
            if  (!engines.hasOwnProperty(i))
                continue;
            if (ref.indexOf(engines[i].start)==-1)
                continue;
            start = ref.indexOf('?' + engines[i].query + '=')
            if (start == -1){
                start = ref.indexOf('&' + engines[i].query + '=');
                if (start == -1)
                    return false;
            }
            engine = engines[i].name;
            req = engines[i].query;
            cp1251 = engines[i].hasOwnProperty('cp1251');
        }
        if (!engine)
            return false;
        ref = ref.substr(start + req.length + 2);
        var end = ref.indexOf('&');
        if (end != -1)
            ref = ref.substr(0, end);
        if (cp1251){
            function win2unicode(str) {
                var charmap   = unescape(
                    "%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409%u2039%u040A%u040C%u040B%u040F"+
                        "%u0452%u2018%u2019%u201C%u201D%u2022%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F"+
                        "%u00A0%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB%u00AC%u00AD%u00AE%u0407"+
                        "%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457")
                var code2char = function(code) {
                    if(code >= 0xC0 && code <= 0xFF) return String.fromCharCode(code - 0xC0 + 0x0410)
                    if(code >= 0x80 && code <= 0xBF) return charmap.charAt(code - 0x80)
                    return String.fromCharCode(code)
                }
                var res = ""
                for(var i = 0; i < str.length; i++) res = res + code2char(str.charCodeAt(i))
                return res
            }
            ref = unescape(ref);
            ref = win2unicode(ref);
        }else
            ref = decodeURIComponent(ref);
        ref = ref.replace(/[+]+/g, ' ')
        return {"���������": engine, "������": ref};
    }

    var refer = JSON.stringify(referer());
    refer = refer.replace(/\"/g, '');
    refer = refer.replace(/\:/g, ': ');
    refer = refer.replace(/\,/g, ', ');
    refer = refer.replace(/\{/g, '');
    refer = refer.replace(/\}/g, '');
/*
     FILE ARCHIVED ON 09:37:36 Dec 05, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:56:29 Feb 22, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/