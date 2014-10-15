$( document ).ready( function() {
  var theme = "撞球" ;
  
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
    if ( theme === "撞球" ) {
      document.getElementById("main-text").innerHTML = "<b>撞球(台球)</b><br>\
撞球運動的起源地目前尚無定論，有起源於西班牙、英國、法國等幾種不同的說法，但起源時間則大致公認為十四、十五世紀之間。<br><br>\
最初應該是一種在草地上進行的戶外運動，使用兩個圓形石頭，參與者使用一支靠在肩上的長曲棍，握住另一端去打擊圓石，令其滾動相碰的遊戲。後來歐洲大陸有人將其搬至室內，改在四面有框圍住的桌面上玩，參與者以曲棍打擊圓球，令球與球相撞而得分，並以此進行了最初的無袋式撞球比賽。<br><br>\
當時在美國則同樣使用兩個球，但改用象牙製造，並且在檯面上豎立類似鎚球的金屬球門，使球通過球門而得分，形成落袋式撞球的雛型。" ;
    } // if
  } );
  
  
  $( "#規則" ).click( function() {
    if ( theme === "撞球" ) {
      
    } // if
  } );
  
  
  $( "#紀錄" ).click( function() {
    if ( theme === "撞球" ) {
      
    } // if
  } );
  
  
  $( "#器材" ).click( function() {
    if ( theme === "撞球" ) {
      
    } // if
  } );
  
  
  $( "#影片" ).click( function() {
    if ( theme === "撞球" ) {
      
    } // if
  } );
  
  
  $( "#圖片" ).click( function() {
    if ( theme === "撞球" ) {
      
    } // if
  } );
  
  
  $( "#文章" ).click( function() {
    if ( theme === "撞球" ) {
      
    } // if
  } );
  
});

