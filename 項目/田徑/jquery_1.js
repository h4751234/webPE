$( document ).ready( function() {
  var theme = "田徑" ;
  
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
    if ( theme === "田徑" ) {
      document.getElementById("main-text").innerHTML = "" ;
    } // if
  } );
  
  
  $( "#規則" ).click( function() {
    if ( theme === "田徑" ) {
      
    } // if
  } );
  
  
  $( "#紀錄" ).click( function() {
    if ( theme === "田徑" ) {
      
    } // if
  } );
  
  
  $( "#器材" ).click( function() {
    if ( theme === "田徑" ) {
      
    } // if
  } );
  
  
  $( "#影片" ).click( function() {
    if ( theme === "田徑" ) {
      
    } // if
  } );
  
  
  $( "#圖片" ).click( function() {
    if ( theme === "田徑" ) {
      
    } // if
  } );
  
  
  $( "#文章" ).click( function() {
    if ( theme === "田徑" ) {
      
    } // if
  } );
  
});

