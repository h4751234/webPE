$( document ).ready( function() {
  var theme = "排球" ;
  
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
    if ( theme === "排球" ) {
      document.getElementById("main-text").innerHTML = "<b>排球</b><br>\
美國斯普林費爾德體育專科學校是排球的發源地，該校的基督教青年會是最早傳播排球運動的組織。基督教青年會的幹事、傳教士、學校畢業生以及第一次世界大戰中的美國軍人，都是排球運動的初期傳播者。<br>\
排球運動首先傳入加拿大、古巴、巴西等國，第一次世界大戰（1914~1918年）期間傳入法國、義大利等歐洲國家。第二次世界大戰後，東歐國家排球運動技術水準長期居世界領先地位，歐洲各國從一開始接觸的就是6人制排球，因此技戰術水準得以長久領先。<br><br>\
排球運動傳入亞洲始於1900年的印度。1913年第一屆遠東運動會把排球列入正式比賽，由於當時規則尚不完善，亞洲各國的排球運動經歷了16人制、12人制和9人制，直到1950年代，才逐步過渡到6人制排球，一直到現在也發展出9人制。<br>\
為適應排球運動的發展，1947年在法國巴黎正式成立了國際排球聯合會，負責領導國際排球運動，第一任主席是法國人保爾·黎伯。國際排聯現已有140多個會員國。<br><br>\
排球運動傳入亞洲的歷史流程 1900年傳到印度 1905年傳教士J Howard Crocker將排球運動傳到中國 1910年透過Elwood S. Brown再傳到菲律賓， 1913年美國人Franklin H.Brown到日本將排球比賽作首次的公開，排球正式傳入日本。 1922年台灣體育協會邀請在東京青年會工作的布朗先生來台指導排球，布朗先生開啟了台灣排球運動的大門。<br>\
日治時期的行政作為造就了排球運動傳入臺灣。台灣排球運動發展的歷史，在日治時期由日本傳至台灣，在北部興起往南部紮根；在台灣光復後的40-60年代，戰後經濟由蕭條轉趨復甦，由於國民政府的大力鼓吹，各縣市紛紛成立排球隊，並在軍中持續推動，成立各軍種球隊，並舉辦如省運、國校教職員排球賽、中等學校排球賽等，在物資缺乏的年代裡，體育競賽成為生活娛樂與休閒活動的重要手段；70年代開始，因外交上屢遭挫敗，國際情勢中與兩岸的競爭關係下，體育外交成為重要的管道，排球運動分別派隊參加亞洲盃排球賽，外派優秀教練到中南美洲進行交流等，都是成為與國際接軌的重要手段。" ;
    } // if
  } );
  
  
  $( "#規則" ).click( function() {
    if ( theme === "排球" ) {
      
    } // if
  } );
  
  
  $( "#紀錄" ).click( function() {
    if ( theme === "排球" ) {
      
    } // if
  } );
  
  
  $( "#器材" ).click( function() {
    if ( theme === "排球" ) {
      
    } // if
  } );
  
  
  $( "#影片" ).click( function() {
    if ( theme === "排球" ) {
      
    } // if
  } );
  
  
  $( "#圖片" ).click( function() {
    if ( theme === "排球" ) {

    } // if
  } );
  
  
  $( "#文章" ).click( function() {
    if ( theme === "排球" ) {
      
    } // if
  } );
  
});

