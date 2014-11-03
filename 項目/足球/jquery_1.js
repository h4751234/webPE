$( document ).ready( function() {
  var theme = "足球" ;
  
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
    if ( theme === "足球" ) {
      document.getElementById("main-text").innerHTML = "<font size=\"6\"><b>古代足球</b></font><br>\
古代足球出現於中國戰國時代的蹴鞠，與同時代的古希臘人與古羅馬玩的古希臘足球。2004年初，國際足總的確認，古代中國的蹴鞠是足球運動的最早雛形，亞洲足聯秘書長維拉潘頒發了起源紀念盃和證書。<br>\
早在2300多年前，蹴鞠就已誕生，而且流行於中國臨淄(今山東省淄博市臨淄區)。最早確切可信的文字記載這項運動者，當屬《戰國策》和《史記》，當時它以具有軍事性和娛樂性雙重性質的活動而被記錄下來。其後經過改良令蹴鞠慢慢普及，到了隋、唐時代，蹴鞠和佛教一起傳到了日本，今日日語及韓文中仍可見稱足球為「蹴球」的用法，這便是受到中國的影響。<br>\
在淄博齊國歷史博物館中的一張地圖上，一條細線從中國延伸至埃及，然後至歐洲的希臘、羅馬和法國，最終止於英格蘭。但國際專家對此種說法表示懷疑，指出蹴鞠與足球之間難以聯繫，蹴鞠出現大約同期也有同類運動，如古希臘足球，並對國際足總的動機提出質疑。將某種物體踢來踢去是人類常見的活動，世界各地區、各民族也許都進行過此種活動，這並不能證明他們就是足球的發明者。但英國的博物館所展示的幾百年前所製做現存最古老的足球，其製作方式卻和唐朝的足球很類似。<br><br>\
<font size=\"6\"><b>現代足球</b></font><br>\
現代足球運動公認為起源於19世紀中期的英國。最早的職業聯賽也在同地開始。1863年10月26日，世界上和西歐第一個正式的足球組織英格蘭足球協會在英國首都倫敦成立，這一天也被作為現代足球運動的誕生日。此後，足球運動在全球廣泛傳播。而現代足球運動的比賽章則，皆基於當時的英格蘭足球協會比賽章則演化而成。<br>\
目前，歐洲與南美洲被公認為足球水平最高的兩大洲，主要的足球強國都集中在這兩個洲，足球在這兩大洲都有著舉足輕重的地位。歐洲足球流派技術簡練實用，注重配合，個人素質上力量強，速度快，作風硬朗，以西班牙、德國、義大利、法國、荷蘭、英格蘭等為代表，歐洲擁有世界上最高水平的職業聯賽。南美洲足球流派則講究個人技術，注重短傳配合和個人突破，以巴西、阿根廷、烏拉圭等為代表。<br>\
在其他洲方面，除了亞洲以外，其他洲的足球盛行程度也尚稱平均。長期以來，足球在北美洲發展緩慢，在美國和加拿大都不是第一運動，但近些年美國的足球水平有了很大提升，足球在社會青年一代中的地位連年大幅度的提高，美國職業足球大聯盟亦吸引了越來越多的觀眾，令美國成為一個潛在的足球大國；而中美洲的大多數國家均為足球為第一運動，而且實力不俗，最強的球隊是墨西哥。<br>\
而大洋洲則以紐西蘭獨強，其他國家足球水平很低。澳洲的實力強於紐西蘭，但已在數年前加入了亞足聯。<br>\
足球在非洲是第一運動，而且非洲尤其是西部非洲是近年足球水平進步最快的地區，奈及利亞、塞內加爾、象牙海岸、喀麥隆、迦納近幾年湧現出不少優秀球員。<br>\
足球在亞洲地區也非常盛行，但大多數國家足球水平並不高。近年隨著澳洲的加入，亞洲足球有了一定的進步，在2010年南非舉行的世界盃比賽上，有2支亞洲球隊打進淘汰賽。目前亞洲實力比較突出的球隊有澳洲、日本、伊朗和韓國。" ;
    } // if
  } );
  
  
  $( "#規則" ).click( function() {
    if ( theme === "足球" ) {
      document.getElementById("main-text").innerHTML = "<font size=\"6\"><b>足球比賽規則</b></font><br>\
足球比賽規則，是足球比賽進行所必須遵守的規則。足球比賽規則由國際足球協會理事會（FIFA）制定並修改，最新的足球比賽規則是2009年2月28日修訂，於2009年7月1日生效[1]，共分為17個部分。<br><br>\
<font size=\"6\"><b>比賽場地</b></font><br>\
比賽場地可為真草球場或人造草球場，但人造草場地顏色必須為綠色。比賽場地應為長方形並帶有標記線，所有標記線為同一尺寸，且不得超過12厘米寬，所有標記線所佔據空間為比賽場地內部。兩條較長邊界線稱作邊線，兩條較短邊界線稱作底線。比賽場地由中線分為兩個等面積部分，中線為兩邊線中點連線。賽場中心點為中線中點，以中心點為圓心，中點周圍圍繞著半徑為9.15米的環線。<br>\
場地為長方形，邊線長90米至120米，底線長45米至90米，邊線必須長於底線。國際A級足球比賽場地為長100米至110米，寬64米至75的長方形。<br><br>\
<font size=\"6\"><b>球員</b></font><br>\
足球比賽由兩隊進行，除後備球員外，每隊最多同時有11名球員參賽，其中必須有一名守門員。每隊最少球員數量為7人。全部球員中只有守門員可以在比賽中於本方禁區內用手及上肢接觸足球。<br><br>\
<font size=\"6\"><b>球員裝備</b></font><br>\
球員至少應佩戴如下裝備：上衣、短褲、襪子、鞋與護腿板。其中上衣必須有袖，兩隊球員應穿著可互相區分並可與裁判區分的球衣，而且守門員上衣必須與包括比賽官員內的所有人員上衣明顯不同以便區分。如果穿著內衣，其顏色應與其外部衣物顏色相同，守門員可以穿著長褲進行比賽。儘管幾乎所有足球運動員都會穿著足球鞋進行比賽，但比賽規則並沒有要求鞋必須為足球鞋。護腿板必須全部被球襪包裹，其材料可為橡膠、塑料或類似材料，並可提供適當的保護。<br>\
禁止使用「任何可能傷害他人或自己的裝備（包括任何種類的珠寶首飾）」。<br><br>\
<font size=\"6\"><b>裁判</b></font><br>\
一場比賽由一名指定的主裁判進行控制，他擁有為維護該場比賽符合足球比賽規則所需的一切權力。主裁判關於比賽的判罰，其中包括是否進球和比賽結果，都是最終判罰。<br>\
主裁判只有在自己意識到判罰錯誤，或經助理裁判（或第四裁判）提醒自主判斷後，在未恢複比賽或未結束比賽時，才可以對判罰做出修改。<br><br>\
<font size=\"6\"><b>比賽持續時間</b></font><br>\
除得到裁判及兩隊同意外，比賽持續時間為兩個等長的半場，每半場為45分鐘。任何更改比賽持續時間的協議應在比賽之前確定，並不得與賽會規則相衝突。在上下半場之間球員可以進行中場休息，休息時間不得超過15分鐘。因換人、評估傷員、處置傷員及其他是由損失的比賽時間將進行補時，補時時間由裁判把握。<br>\
如在任一半場結束時發生十二碼或重罰十二碼，則比賽持續至十二碼罰球結束。<br><br>\
<font size=\"6\"><b>比賽開始與重新開始</b></font><br>\
比賽開始前將進行擲硬幣，擲硬幣獲勝一方可挑選上半場進攻的球門，另一方獲得上半時開球權，下半時開球前互換攻守方向，並由上半時擲硬幣獲勝一方開球。開球為比賽開始與比賽重新開始的方式，在以下情況下將開球以開始或重新開始比賽：比賽開始、進球後、下半時比賽開始、延長賽各階段開始。開球時射門進球有效。<br>\
開球順序如下：雙方球員必須在自己防守方向半場，非開球方球員距離皮球至少9.15米，開球時球必須靜止於球場中心點，開球前必須得到主裁判信號，向前開球後比賽開始，開球球員在其他球員觸及皮球之前不得二次觸及皮球。在進球後開球時，開球方為失球一方。<br>\
墜球是當比賽進行中，由裁判因比賽規則中未涉及原因停止比賽後重新開始比賽的方式。<br><br>\
<font size=\"6\"><b>活球與死球、得分</b></font><br>\
當球整體越過端線或邊線時，或比賽由裁判中止時，為死球。除死球外其他時間球為活球，包括球與球門柱、球門梁、角旗反彈後落回場地的情況，及球與球場內主裁判或助理裁判反彈的情況。<br>\
在沒有違反任何比賽規則時，球整體低於球門橫樑越過兩球門柱間端線，進攻球隊得分。比賽結束時得分多的球隊獲勝，如果兩隊得分相同或均未得分，比賽為平局。<br><br>\
<font size=\"6\"><b>越位</b></font><br>\
如果球員處於「較第二接近對方端線的對方球員及球更接近對方端線的位置」時，他處於越位位置。處在越位位置上並不犯規。<br>\
以下情況球員不處于越位位置：球員處於己方半場、球員與第二接近對方端線的對方球員處於同一端線平行線上、球員與最後兩名對方球員處於同一端線平行線上。<br>\
處于越位位置的球員只有在己方觸球或持球並且裁判認為越位位置球員有以下行為時才會被判處越位犯規：影響了比賽、影響了對方球員、試圖從越位位置上獲得利益。<br>\
從以下情況下接球不構成越位：球門球、界外球、角球。" ;
    } // if
  } );
  
  
  $( "#紀錄" ).click( function() {
    if ( theme === "足球" ) {
      
    } // if
  } );
  
  
  $( "#器材" ).click( function() {
    if ( theme === "足球" ) {
      document.getElementById("main-text").innerHTML = "<table border=\"5\" style=\"border-color:red;\">\
    <tr>\
      <td><img src=\"04.jpg\" style=\"width:130px; float:left;\"><font size=\"7\" color=\"#C80000\"><b><i>足球鞋</i></b></font><br>\
      <br>\&nbsp;&nbsp;&nbsp;&nbsp;<b><一>　足球鞋的種類</b><br>\
一般的鞋子依照鞋底仕樣來分別，室外鞋可分為SG、FG、HG、IN等四種，而鞋釘的形式可分為圓釘和長釘。<br>\
●　SG：全名為SOFT GROUND。適用於長草，土質很軟的球場使用。通常SG的鞋子鞋釘都是鐵釘。<br>\
●　FG：全名為FIRM GROUND。適用於短草，土質為硬的球場使用。通常FG的鞋釘都是長的塑膠釘。<br>\
●　HG：全名為HARD GROUND。適用於土質又乾又硬的球場使用；而這種場地一般也沒什麼草。通常HG的鞋釘都是短的塑膠釘。<br>\
●　IN：全名為INDOORS。適用於室內硬地或木板。<br>\
●　人工草皮：英文為Zebra Stripes，這類的鞋釘通常是碎釘，碎釘大多是用來在結冰的草地上踢球。<br>\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp;<b><二> 足球鞋的主流技術：</b><br>\
●　袋鼠皮：<br>\
現在，基本上所有品牌的旗艦款足球鞋都使用柔軟、輕質而有質感的袋鼠皮 作為鞋身用料。<br>\
●　不規則鞋釘：<br>\
Adidas的“奇釘”設計理念帶來了足球鞋鞋底設計的革命。Nike、 Diadora更是將這種符合人體工程力學的設計發展到了極致。<br>\
<br>\
●　搭載核心減震科技：<br>\
印象中應該是Nike首先往足球鞋中引入了自己的當家減震科技zoom。與籃球鞋不同的是，這種zoom是以減震膠的形式出現在鞋墊的前、后掌上。Puma也將自己的cell減震技術嵌入到為皮雷設計的球鞋中。<br>\
<br>\
●　隱藏式鞋帶設計和不對稱鞋身：<br>\
這兩項創新設計的目的只有一個，就是使球員腳面接 觸球時更穩定。比如獵鷹系列、Total 90系列和Umbro的X系列。<br>\
<br>\
●　PEBAX材質使用：<br>\
這種一次鑄模形成的鞋底非常耐磨、堅韌和輕質，長套用于FG和HG的鞋上。<br>\
<br>\
●　增加新零件：<br>\
比如獵鷹系列非常著名的Power Pulse技術，用來增強對皮球的摩擦。刺客、Total90等系列鞋身表面有一層亮物質，也是用來快速鎖定皮球的。<br>\
    </tr>\
    <tr>\
      <td><img src=\"05.jpg\" style=\"width:130px; float:left;\"><font size=\"7\" color=\"#C80000\"><b><i>護具</i></b></font><br>\
      <br>\&nbsp;&nbsp;&nbsp;&nbsp;<b><一>　護具的功用</b><br>\
保護身體，減少運動傷害<br><br>\
●　吸震：分散多餘壓力/外來衝擊。<br>\
●　防磨擦：直接保護皮膚避免外傷。<br>\
●　支持：協助動作表現。除了傳統護具外，近幾年興起的機能衣服更強調運動表現的提升。<br>\
<br>\
    </tr>\
    <tr>\
      <td><img src=\"06.jpg\" style=\"width:130px; float:left;\"><font size=\"7\" color=\"#C80000\"><b><i>足球</i></b></font><br>\
      <br>\&nbsp;&nbsp;&nbsp;&nbsp;<b><一>　足球的規格</b><br>\
<br>\
●　呎吋：按照國際足協球例（Laws of the Game）「第二條：球」（Law 2: The Ball）指定皮球為充氣的球面，周長介乎68-70厘米（或27-28英吋）之間，重量介乎410-450克（或14-16安士）之間，充氣壓強在海平面達到600-1,100g/cm2（或8.5-15.6psi）之間，並以皮革或「其他合適物料」覆蓋。\
上述的重量為皮球在全乾環境下的重量，舊式皮球在潮濕環境下會增加很多的重量。足球比賽的標準用球是5號球，然而亦有較小的呎吋：3號球是手球的標準球；而4號球則用於室內足球或其他小型球場的比賽，香港流行的硬地小型足球比賽採用的足球不超過4號。其他呎吋可用於少年足球賽或新奇禮品。<br><br>\
●　顏色：足球的顏色早期是皮革原色的啡黃色，直到1951年才有白色的足球供晚間比賽在汎光燈照射下使用；而橙色的足球亦在1950年代出現供在雪地比賽環境用。現今的足球則會印上不同色彩的圖案。<br><br>\
●　認證：過去，由不同製造商生產的足球有不同的品質，為使品質達到一致標準，自1996年1月1日開始國際足聯提供認證標記給通過重量、圓周、球狀、氣壓損失、吸水率、彈跳及形狀和呎吋保特等測試的足球型號，標記包括「國際足聯批准」（FIFA Approved）、「國際足聯檢視」（FIFA Inspected）及「國際賽用球標準」（International Matchball Standard，簡稱IMS），前兩者的測試由位於聖加侖的瑞士聯邦材料監測與研究實驗室（Swiss Federal Laboratories for Materials Testing and Research，簡稱EMPA）負責，足球型號加上以上兩款標記須要支付版權費用；而較寬鬆的「IMS」認證則可由7所由國際足聯指定的歐洲實驗室進行檢測，亦無須支付版權費。<br>\
<br>\
    </tr>\
    </table><br clear=\"all\">";
    } // if
  } );
  
  
  $( "#影片" ).click( function() {
    if ( theme === "足球" ) {
      document.getElementById("main-text").innerHTML ="<iframe width=\"853\" height=\"480\" src=\"//www.youtube.com/embed/17RKXweAT2A?list=PL8BA732CE03AFC8D6\" frameborder=\"0\" allowfullscreen></iframe>"
    } // if
  } );
  
  
  $( "#圖片" ).click( function() {
    if ( theme === "足球" ) {
      
    } // if
  } );
  
  
  $( "#文章" ).click( function() {
    if ( theme === "足球" ) {
      
    } // if
  } );
  
});

