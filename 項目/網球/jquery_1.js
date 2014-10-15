$( document ).ready( function() {
  var theme = "網球" ;
  
  $( "#menu" ).menu();
  $( "#足球" ).click( function() {
    theme = "足球" ;
    document.getElementById("st").innerHTML = "<b>足球</b>";
  } );
  $( "#乒乓球" ).click( function() {
    theme = "乒乓球" ;
    document.getElementById("st").innerHTML = "<b>乒乓球</b>";
  } );
  $( "#羽毛球" ).click( function() {
    theme = "羽毛球" ;
    document.getElementById("st").innerHTML = "<b>羽毛球</b>";
  } );
  $( "#田徑" ).click( function() {
    theme = "田徑" ;
    document.getElementById("st").innerHTML = "<b>田徑</b>";
  } );
  $( "#籃球" ).click( function() {
    theme = "籃球" ;
    document.getElementById("st").innerHTML = "<b>籃球</b>";
  } );
  $( "#棒球" ).click( function() {
    theme = "棒球" ;
    document.getElementById("st").innerHTML = "<b>棒球</b>";
  } );
  $( "#排球" ).click( function() {
    theme = "排球" ;
    document.getElementById("st").innerHTML = "<b>排球</b>";
  } );
  $( "#網球" ).click( function() {
    theme = "網球" ;
    document.getElementById("st").innerHTML = "<b>網球</b>";
  } );
  $( "#單車" ).click( function() {
    theme = "單車" ;
    document.getElementById("st").innerHTML = "<b>單車</b>";
  } );
  $( "#撞球" ).click( function() {
    theme = "撞球" ;
    document.getElementById("st").innerHTML = "<b>撞球</b>";
  } );
  $( "#健身運動" ).click( function() {
    theme = "健身運動" ;
    document.getElementById("st").innerHTML = "<b>健身運動</b>";
  } );
  $( "#高爾夫球" ).click( function() {
    theme = "高爾夫球" ;
    document.getElementById("st").innerHTML = "<b>高爾夫球</b>";
  } );
  
  
  
  
  $( "#歷史" ).click( function() {
    if ( theme === "網球" ) {
      document.getElementById("main-text").innerHTML = "<b>網球</b><br>\
網球的前身是14世紀流行於法國宮廷的一種叫「掌球戲」（又稱手球）（handball）的遊戲。規則是兩名玩家隔著一條繩子，使用手掌將被布包著頭髮製成的球互相對打。其後這種遊戲經過發展和改良，用網代替繩子，並將以手擊球改為用木製球拍，隨後木拍更拉上弦線。由18世紀開始，歐洲民間也開始出現這種遊戲，並且於19世紀盛行於歐洲。<br><br>\
現代的網球則於1873年12月由華爾特·科洛普頓·溫菲爾德（Walter Clopton Wingfield）少校在英國發明，當時這個遊戲是用來在後院的派對中取悅客人。他是根據老的室內網球或者稱為原網球的遊戲創造這項運動的。根據大多數網球歷史學家，現代網球的規則也大多數從此而來，因為溫菲爾德從這兩項運動中借鑒了大量元素，還借鑒了法國皇室網球的一些技巧規則。<br><br>\
1877年在英國倫敦溫布爾頓舉行了首場溫布頓網球錦標賽，為現代網球史上最早的比賽。隨著國際網球總會於1913年成立，網球運動亦於世界各地得以廣泛發展。在1881年5月21日，美國國家草地網球聯盟（現在的美國網球聯盟）成立以規範規則和競技制度。美國國家男子單打錦標賽，就是現在的美國網球公開賽，1881年首次在美國羅得島州的新港舉行。<br>\
美國國家女子單打錦標賽在1887年舉行。網球也在法國（法國網球公開賽1891年）流行。世界著名的網球公開賽有：溫布爾頓網球公開賽、美國網球公開賽、澳洲網球公開賽和法國網球公開賽。今天，這四項賽事被稱為大滿貫。關於草地網球的規則80年之內都沒有改變，少有的改變例如1970年美國網球公開賽第一次試行搶七規則（由詹姆士·凡·阿蘭發明）。<br><br>\
1900年，著名的一年一度台維斯盃網球公開賽在國家隊之間舉行。<br><br>\
1926年，商人C.C.派爾（C. C. Pyle）建立了首個職業網球巡迴賽，隊員由美國和法國網球運動員組成。最值得稱道的早期職業網球選手有美國的溫尼·理察斯（Vinnie Richards）和法國女子蘇珊·朗格倫（Suzanne Lenglen）。當一個隊員成為職業選手後，他/她就不能參加業餘選手賽。<br><br>\
1968年，由於商業的壓力導致這項制度的廢棄，網球進入了開放年代（Open Era），又稱公開化年代，即所有選手都可以競爭所有賽事，而頂級選手可以靠打網球謀生，這是網球運動的重要分水嶺，走向商業化、公開化、職業化。藉此，國際職業網球輪建立，借電視轉播網球傳遍了整個世界，從此不再是英國上流社會的專有運動。<br><br>\
1954年，詹姆士·凡·阿蘭創建了國際網球名人堂，一個在美國羅得島州的新港的非營利博物館。這個博物館裡面搜集了大量的網球紀念品和大量全世界網球成員的獎品和獎章。每年，在此都要舉行一次草地網球賽，並且舉行接納新的聲譽禮堂成員的典禮。" ;
    } // if
  } );
  
  
  $( "#規則" ).click( function() {
    if ( theme === "網球" ) {
      
    } // if
  } );
  
  
  $( "#紀錄" ).click( function() {
    if ( theme === "網球" ) {
      
    } // if
  } );
  
  
  $( "#器材" ).click( function() {
    if ( theme === "網球" ) {
      
    } // if
  } );
  
  
  $( "#影片" ).click( function() {
    if ( theme === "網球" ) {
      
    } // if
  } );
  
  
  $( "#圖片" ).click( function() {
    if ( theme === "網球" ) {
      
    } // if
  } );
  
  
  $( "#文章" ).click( function() {
    if ( theme === "網球" ) {
      
    } // if
  } );
  
});

