$(document).ready(function() {
    getDataforChart();
 

});




var aqeel_tot = 2097;
var shimar_tot = 786;
var shehanzlogonjesaleem_tot = 4331;
var adeeb_tot = 3010;
var hiruni_tot = 1983;
var pepsi_tot = 1029;
var danuja_tot = 858;
var abish_tot = 1377;
var apiseg_tot = 2267;
var chamathka_tot = 1665;
var ammar_tot = 2200;
var sarah_tot = 1138;
var japangirl_tot = 181;
var mittunawaz_tot = 500;
var wwnahnahnah_tot = 292;
var mudithjay_tot = 0;
var demolisher_tot = 95;
var deshsatan_tot = 135;
var fezal_tot = 149;
var gibran_tot = 234;
var janiya_tot = 3;
var keshali_tot = 28;
var laky_tot = 31;
var maneesha_tot = 19;
var thivvyan_tot = 168;
var whitefang_tot = 17;
var zeenathshadim_tot = 3;
var alex_tot = 64;


function getDataforChart() {

    var preFix = "https://spreadsheets.google.com/feeds/list/";
    var SheetID = "15I3aeJBo65O14hQlqgom7D3FxbpDE7_mslrAPygId64";
    var postFix = "/1/public/values?alt=json";

    var spreadsheetURL = preFix + SheetID + postFix;

    //    console.log(spreadsheetURL);

    function httpGetAsync(theUrl, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    };

     httpGetAsync(spreadsheetURL, res => console.log(JSON.parse(res)));

    $.getJSON(spreadsheetURL, function(data) {
        var entry = data.feed.entry;
        var length = entry.length;

        var points = 0;
      
         document.getElementById("theinitialdate").innerHTML=(data.feed.entry[0]['gsx$date']['$t']);
        
        document.getElementById("thefinaldate").innerHTML=(data.feed.entry[length-1]['gsx$date']['$t']);
        
        var i;
        for (i = 1; i <= length - 1; i++) {


            points = (data.feed.entry[i]['gsx$chat']['$t']);
            points_pre = (data.feed.entry[i-1]['gsx$chat']['$t']);

            
if(points.indexOf("Aqeel") !== -1 && points_pre.indexOf("Aqeel") == -1){aqeel_tot += 1;}
else if(points.indexOf("Shimar") !== -1 && points_pre.indexOf("Shimar") == -1){shimar_tot += 1;}
else if(points.indexOf("Shehan Zlogonje Saleem") !== -1 && points_pre.indexOf("Shehan Zlogonje Saleem") == -1){shehanzlogonjesaleem_tot += 1;}
else if(points.indexOf("Adeeb") !== -1 && points_pre.indexOf("Adeeb") == -1){adeeb_tot += 1;}
else if(points.indexOf("Hiruni") !== -1 && points_pre.indexOf("Hiruni") == -1){hiruni_tot += 1;}
else if(points.indexOf("Pepsi") !== -1 && points_pre.indexOf("Pepsi") == -1){pepsi_tot += 1;}
else if(points.indexOf("Danuja") !== -1 && points_pre.indexOf("Danuja") == -1){danuja_tot += 1;}
else if(points.indexOf("Abish") !== -1 && points_pre.indexOf("Abish") == -1){abish_tot += 1;}
else if(points.indexOf("Apiseg") !== -1 && points_pre.indexOf("Apiseg") == -1){apiseg_tot += 1;}
else if(points.indexOf("Chamathka") !== -1 && points_pre.indexOf("Chamathka") == -1){chamathka_tot += 1;}
else if(points.indexOf("Ammar") !== -1 && points_pre.indexOf("Ammar") == -1){ammar_tot += 1;}
else if(points.indexOf("Sarah") !== -1 && points_pre.indexOf("Sarah") == -1){sarah_tot += 1;}
else if(points.indexOf("Japan Girl") !== -1 && points_pre.indexOf("Japan Girl") == -1){japangirl_tot += 1;}
else if(points.indexOf("Mittu Nawaz") !== -1 && points_pre.indexOf("Mittu Nawaz") == -1){mittunawaz_tot += 1;}
else if(points.indexOf("W W Nah Nah Nah") !== -1 && points_pre.indexOf("W W Nah Nah Nah") == -1){wwnahnahnah_tot += 1;}
else if(points.indexOf("Mudith Jay") !== -1 && points_pre.indexOf("Mudith Jay") == -1){mudithjay_tot += 1;}
else if(points.indexOf("Demolisher") !== -1 && points_pre.indexOf("Demolisher") == -1){demolisher_tot += 1;}
else if(points.indexOf("Desh Satan") !== -1 && points_pre.indexOf("Desh Satan") == -1){deshsatan_tot += 1;}
else if(points.indexOf("Fezal") !== -1 && points_pre.indexOf("Fezal") == -1){fezal_tot += 1;}
else if(points.indexOf("Gibran") !== -1 && points_pre.indexOf("Gibran") == -1){gibran_tot += 1;}
else if(points.indexOf("Janiya") !== -1 && points_pre.indexOf("Janiya") == -1){janiya_tot += 1;}
else if(points.indexOf("Keshali") !== -1 && points_pre.indexOf("Keshali") == -1){keshali_tot += 1;}
else if(points.indexOf("Laky") !== -1 && points_pre.indexOf("Laky") == -1){laky_tot += 1;}
else if(points.indexOf("Maneesha") !== -1 && points_pre.indexOf("Maneesha") == -1){maneesha_tot += 1;}
else if(points.indexOf("Thivvyan") !== -1 && points_pre.indexOf("Thivvyan") == -1){thivvyan_tot += 1;}
else if(points.indexOf("Whitefang") !== -1 && points_pre.indexOf("Whitefang") == -1){whitefang_tot += 1;}
else if(points.indexOf("Zeenath Shadim") !== -1 && points_pre.indexOf("Zeenath Shadim") == -1){zeenathshadim_tot += 1;}
else if(points.indexOf("Alex") !== -1 && points_pre.indexOf("Alex") == -1){alex_tot += 1;}

        //   console.log(smadata);





        }
        
        
var maximum = Math.max(aqeel_tot,
shimar_tot,
shehanzlogonjesaleem_tot,
adeeb_tot,
hiruni_tot,
pepsi_tot,
danuja_tot,
abish_tot,
apiseg_tot,
chamathka_tot,
ammar_tot,
sarah_tot,
japangirl_tot,
mittunawaz_tot,
wwnahnahnah_tot,
mudithjay_tot,
demolisher_tot,
deshsatan_tot,
fezal_tot,
gibran_tot,
janiya_tot,
keshali_tot,
laky_tot,
maneesha_tot,
thivvyan_tot,
whitefang_tot,
zeenathshadim_tot,
alex_tot);
        

      console.log(maximum);
        
        
              document.getElementById("aqeel_text").innerHTML = "Aqeel   :" + Math.round(aqeel_tot);  document.getElementById("aqeel_bar").style.width = Math.round(aqeel_tot*100/maximum) + "%"; 
      document.getElementById("shimar_text").innerHTML = "Shimar   :" + Math.round(shimar_tot);  document.getElementById("shimar_bar").style.width = Math.round(shimar_tot*100/maximum) + "%"; 
      document.getElementById("shehanzlogonjesaleem_text").innerHTML = "Shehan Zlogonje Saleem   :" + Math.round(shehanzlogonjesaleem_tot);  document.getElementById("shehanzlogonjesaleem_bar").style.width = Math.round(shehanzlogonjesaleem_tot*100/maximum) + "%"; 
      document.getElementById("adeeb_text").innerHTML = "Adeeb   :" + Math.round(adeeb_tot);  document.getElementById("adeeb_bar").style.width = Math.round(adeeb_tot*100/maximum) + "%"; 
      document.getElementById("hiruni_text").innerHTML = "Hiruni   :" + Math.round(hiruni_tot);  document.getElementById("hiruni_bar").style.width = Math.round(hiruni_tot*100/maximum) + "%"; 
      document.getElementById("pepsi_text").innerHTML = "Pepsi   :" + Math.round(pepsi_tot);  document.getElementById("pepsi_bar").style.width = Math.round(pepsi_tot*100/maximum) + "%"; 
      document.getElementById("danuja_text").innerHTML = "Danuja   :" + Math.round(danuja_tot);  document.getElementById("danuja_bar").style.width = Math.round(danuja_tot*100/maximum) + "%"; 
      document.getElementById("abish_text").innerHTML = "Abish   :" + Math.round(abish_tot);  document.getElementById("abish_bar").style.width = Math.round(abish_tot*100/maximum) + "%"; 
      document.getElementById("apiseg_text").innerHTML = "Apiseg   :" + Math.round(apiseg_tot);  document.getElementById("apiseg_bar").style.width = Math.round(apiseg_tot*100/maximum) + "%"; 
      document.getElementById("chamathka_text").innerHTML = "Chamathka   :" + Math.round(chamathka_tot);  document.getElementById("chamathka_bar").style.width = Math.round(chamathka_tot*100/maximum) + "%"; 
      document.getElementById("ammar_text").innerHTML = "Ammar   :" + Math.round(ammar_tot);  document.getElementById("ammar_bar").style.width = Math.round(ammar_tot*100/maximum) + "%"; 
      document.getElementById("sarah_text").innerHTML = "Sarah   :" + Math.round(sarah_tot);  document.getElementById("sarah_bar").style.width = Math.round(sarah_tot*100/maximum) + "%"; 
      document.getElementById("japangirl_text").innerHTML = "Japan Girl   :" + Math.round(japangirl_tot);  document.getElementById("japangirl_bar").style.width = Math.round(japangirl_tot*100/maximum) + "%"; 
      document.getElementById("mittunawaz_text").innerHTML = "Mittu Nawaz   :" + Math.round(mittunawaz_tot);  document.getElementById("mittunawaz_bar").style.width = Math.round(mittunawaz_tot*100/maximum) + "%"; 
      document.getElementById("wwnahnahnah_text").innerHTML = "W W Nah Nah Nah   :" + Math.round(wwnahnahnah_tot);  document.getElementById("wwnahnahnah_bar").style.width = Math.round(wwnahnahnah_tot*100/maximum) + "%"; 
      document.getElementById("mudithjay_text").innerHTML = "Mudith Jay   :" + Math.round(mudithjay_tot);  document.getElementById("mudithjay_bar").style.width = Math.round(mudithjay_tot*100/maximum) + "%"; 
      document.getElementById("demolisher_text").innerHTML = "Demolisher   :" + Math.round(demolisher_tot);  document.getElementById("demolisher_bar").style.width = Math.round(demolisher_tot*100/maximum) + "%"; 
      document.getElementById("deshsatan_text").innerHTML = "Desh Satan   :" + Math.round(deshsatan_tot);  document.getElementById("deshsatan_bar").style.width = Math.round(deshsatan_tot*100/maximum) + "%"; 
      document.getElementById("fezal_text").innerHTML = "Fezal   :" + Math.round(fezal_tot);  document.getElementById("fezal_bar").style.width = Math.round(fezal_tot*100/maximum) + "%"; 
      document.getElementById("gibran_text").innerHTML = "Gibran   :" + Math.round(gibran_tot);  document.getElementById("gibran_bar").style.width = Math.round(gibran_tot*100/maximum) + "%"; 
      document.getElementById("janiya_text").innerHTML = "Janiya   :" + Math.round(janiya_tot);  document.getElementById("janiya_bar").style.width = Math.round(janiya_tot*100/maximum) + "%"; 
      document.getElementById("keshali_text").innerHTML = "Keshali   :" + Math.round(keshali_tot);  document.getElementById("keshali_bar").style.width = Math.round(keshali_tot*100/maximum) + "%"; 
      document.getElementById("laky_text").innerHTML = "Laky   :" + Math.round(laky_tot);  document.getElementById("laky_bar").style.width = Math.round(laky_tot*100/maximum) + "%"; 
      document.getElementById("maneesha_text").innerHTML = "Maneesha   :" + Math.round(maneesha_tot);  document.getElementById("maneesha_bar").style.width = Math.round(maneesha_tot*100/maximum) + "%"; 
      document.getElementById("thivvyan_text").innerHTML = "Thivvyan   :" + Math.round(thivvyan_tot);  document.getElementById("thivvyan_bar").style.width = Math.round(thivvyan_tot*100/maximum) + "%"; 
      document.getElementById("whitefang_text").innerHTML = "Whitefang   :" + Math.round(whitefang_tot);  document.getElementById("whitefang_bar").style.width = Math.round(whitefang_tot*100/maximum) + "%"; 
      document.getElementById("zeenathshadim_text").innerHTML = "Zeenath Shadim   :" + Math.round(zeenathshadim_tot);  document.getElementById("zeenathshadim_bar").style.width = Math.round(zeenathshadim_tot*100/maximum) + "%"; 
      document.getElementById("alex_text").innerHTML = "Alex   :" + Math.round(alex_tot);  document.getElementById("alex_bar").style.width = Math.round(alex_tot*100/maximum) + "%"; 
        

        //     plotChart();

    });
}

