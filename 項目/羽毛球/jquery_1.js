$( document ).ready( function() {
  var theme = "羽毛球" ;
  
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
    if ( theme === "羽毛球" ) {
      document.getElementById("main-text").innerHTML = "<b>羽毛球</b><br>\
羽毛球運動的前身是板羽球（但現在羽毛球和板羽球已發展成不同的兩種球類運動），也就是使用木板拍打紮有羽毛的球體（類似毽子），並讓它避免落地的遊戲，已有近二千年的歷史，在古代歐洲、中國、日本都可以看見它的身影。其中源自古希臘的一種板羽球，更發展出將實木板拍改為木製外框，並在中間綁著緊繃的羊皮，因具彈性而更容易拍打。這種遊戲曾向東方傳播至古代印度，並遠達暹羅、中國與日本等地。然而這類遊戲的目的都只是讓球儘量保持在空中而不落地，與現代羽毛球運動的精神大異其趣。<br><br>\
19世紀中葉，印度西部的浦那出現了現代羽毛球運動，當時是以地名「浦那（Poona）」來稱呼這種運動。駐在當地英國人頗為喜愛這種新運動，因而將它傳回英國本土。1873年，在英國格洛斯特郡的伯明頓莊園舉行了一場公開表演，引起許多人的注意，並逐漸傳播開來。後來人們便以該場表演的莊園名稱「伯明頓（Badminton）」來稱呼這項運動，然而在華語地區該名稱並未普及，而是依球具而稱之為「羽毛球」運動。<br>\
早期的英國羽毛球運動仍然使用來自印度的不成文規則，但因不夠嚴謹而經常引發爭議。1887年，「巴斯羽毛球俱樂部」加以研究改良，完成了第一部書面羽毛球運動規則。<br>\
1893年，英國羽毛球協會成立，重新修訂並統一了羽毛球比賽的規則。1934年，第一個世界性的羽毛球組織—國際羽球總會在英國成立。1981年與成立於1978年的世界羽球聯盟合併，名稱仍為國際羽球總會。2006年9月24日，國際羽球總會改名為世界羽球聯盟，目前共有159個會員國或地區。" ;
    } // if
  } );
  
  
  $( "#規則" ).click( function() {
    if ( theme === "羽毛球" ) {
      
    } // if
  } );
  
  
  $( "#紀錄" ).click( function() {
    if ( theme === "羽毛球" ) {
      
    } // if
  } );
  
  
  $( "#器材" ).click( function() {
    if ( theme === "羽毛球" ) {
      
    } // if
  } );
  
  
  $( "#影片" ).click( function() {
    if ( theme === "羽毛球" ) {
      
    } // if
  } );
  
  
  $( "#圖片" ).click( function() {
    if ( theme === "羽毛球" ) {
      
    } // if
  } );
  
  
  $( "#文章" ).click( function() {
    if ( theme === "羽毛球" ) {
      
    } // if
  } );
  
});

