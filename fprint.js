        var company = document.currentScript.getAttribute('company');
        var app = document.currentScript.getAttribute('app');
        var apikey = document.currentScript.getAttribute('apikey');
        var pixel_code = document.currentScript.getAttribute('pixel_code');

        var url = "https://app.appsflyer.com/" + app + "?pid=bytedanceglobal_int&af_adset=tiktok_land&c=";
        var naming = "company_" + company + "_id_"
        var qs = (function(a) {
            if (a == "") return {};
            var b = {};
            for (var i = 0; i < a.length; ++i) {
                var p = a[i].split('=', 2);
                if (p.length == 1)
                    b[p[0]] = "";
                else
                    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
            }
            return b;
        })(window.location.search.substr(1).split('&'));
        var ttclid = ""
        if (!(typeof qs["ttclid"] === 'undefined')) {
            var ttclid = qs["ttclid"].trim();
        }
        var fprint = {
            apikey: apikey,
            pixel_code: pixel_code,
            ttclid: ttclid,
            useragent: navigator.userAgent
        }
        $.ajax({
            url: 'https://api.gamesforyouonline.com/tiktok/fprint',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function(data) {
                final_url = url + naming + data.id + "_test";
                $("a.applink").attr("href", final_url);
            },
            data: JSON.stringify(fprint)
        }); 
