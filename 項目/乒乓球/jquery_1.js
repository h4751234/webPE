$( document ).ready( function() {
  var theme = "乒乓球" ;
  
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
    if ( theme === "乒乓球" ) {
      document.getElementById("main-text").innerHTML = "<b>桌球(乒乓球)</b><br>\
桌球由網球（tennis）發展而來。它起源於19世紀末的英國。歐洲人熱愛網球運動，但因為受到場地和天氣的限制，他們將網球運動搬到室內，以餐桌作為賽場，慢慢發展出桌球運動。也有的說是1890年幾名在印度的海軍軍官發覺在一張不大的檯子上玩網球頗為刺激。後來改用空心的小皮球代替彈性不大的實心球，並用木板代替了網拍。最初稱為「桌面網球」（table tennis），也有叫「室內網球」（Indoor tennis）的。一位美國製造商以桌球撞擊時所發出的聲音創造出ping-pong作為他製造的「桌球」專利註冊商標。後來逐漸為桌球的正式名稱。<br><br>\
20世紀初，桌球運動在歐洲和亞洲蓬勃開展起來。1926年，在德國柏林舉行了國際桌球邀請賽，同時成立了國際桌球聯合會。第一屆世桌賽譜寫了桌球早期運動的歷史新篇章，為今後的世界錦標賽奠定了基礎。從1926年至1939年，世界桌球錦標賽每年都舉行一次。從2003年第47屆世桌賽開始，國際桌總決定將把單項與團體比賽分開進行。多年的發展也使桌球的球拍、比賽用球和規則發生了很大的變化。最初的球拍是塊略經加工的木板，後來有人在球拍上貼一層羊皮。再後來，歐洲人把帶有膠粒的橡皮貼在球拍上。在20世紀50年代初，日本人又發明了貼有厚海棉的球拍。<br>\
桌球運動於1988年夏季奧運會被首次列為奧運會正式比賽項目。" ;
    } // if
  } );
  
  
  $( "#規則" ).click( function() {
    if ( theme === "乒乓球" ) {
      
    } // if
  } );
  
  
  $( "#紀錄" ).click( function() {
    if ( theme === "乒乓球" ) {
      
    } // if
  } );
  
  
  $( "#器材" ).click( function() {
    if ( theme === "乒乓球" ) {
      
    } // if
  } );
  
  
  $( "#影片" ).click( function() {
    if ( theme === "乒乓球" ) {
      
    } // if
  } );
  
  
  $( "#圖片" ).click( function() {
    if ( theme === "乒乓球" ) {
      
    } // if
  } );
  
  
  $( "#文章" ).click( function() {
    if ( theme === "乒乓球" ) {
      
    } // if
  } );
  
});

