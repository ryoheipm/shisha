function addshoparea(){
  let form = FormApp.openById("1eeNH0b2h4A268ylbYwKJa4srom7kLu5mkEWPouF0Rlc")

  let myItems = form.getItems();

    //スプレッドシート取得//
  const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1k-o4ytOG_z-ayLW6HkD5rq-20gWHeNAxS4TAVlrVlNY/edit?usp=sharing").getSheetByName('店舗一覧');

  //渋谷エリア登録
  let shibuyaArea = sheet.getRange(3,1, sheet.getRange(45,1).getValue(),1).getValues();
  shibuyaArea = shibuyaArea.flat();
  myItems[6].asListItem().setChoiceValues(shibuyaArea);

    //新宿エリア登録
  let sinjukuArea = sheet.getRange(3,3, sheet.getRange(45,3).getValue(),1).getValues();
  sinjukuArea = sinjukuArea.flat();
  myItems[8].asListItem().setChoiceValues(sinjukuArea);

    //池袋エリア登録
  let ikebukuroArea = sheet.getRange(3,5, sheet.getRange(45,5).getValue(),1).getValues();
  ikebukuroArea = ikebukuroArea.flat();
  myItems[10].asListItem().setChoiceValues(ikebukuroArea);

    //高円寺エリア登録
  let kouenjiArea = sheet.getRange(3,7, sheet.getRange(45,7).getValue(),1).getValues();
  kouenjiArea = kouenjiArea.flat();
  myItems[12].asListItem().setChoiceValues(kouenjiArea);

    //神田エリア登録
  let kandaArea = sheet.getRange(3,9, sheet.getRange(45,9).getValue(),1).getValues();
  kandaArea = kandaArea.flat();
  myItems[14].asListItem().setChoiceValues(kandaArea);

      //秋葉原エリア登録
  let akihabaraArea = sheet.getRange(3,11, sheet.getRange(45,11).getValue(),1).getValues();
  akihabaraArea = akihabaraArea.flat();
  myItems[16].asListItem().setChoiceValues(akihabaraArea);

      //上野・湯島エリア登録
  let uenoyushimaArea = sheet.getRange(3,13, sheet.getRange(45,13).getValue(),1).getValues();
  uenoyushimaArea = uenoyushimaArea.flat();
  myItems[18].asListItem().setChoiceValues(uenoyushimaArea);

      //横浜・川崎エリア登録
  let yokohamakawasakiArea = sheet.getRange(3,15, sheet.getRange(45,15).getValue(),1).getValues();
  yokohamakawasakiArea = yokohamakawasakiArea.flat();
  myItems[20].asListItem().setChoiceValues(yokohamakawasakiArea);

      //新橋・銀座・有楽町エリア登録
  let ginzaArea = sheet.getRange(3,17, sheet.getRange(45,17).getValue(),1).getValues();
  ginzaArea = ginzaArea.flat();
  myItems[22].asListItem().setChoiceValues(ginzaArea);

      //京都エリア登録
  let kyotoArea = sheet.getRange(3,19, sheet.getRange(45,19).getValue(),1).getValues();
  kyotoArea = kyotoArea.flat();
  myItems[24].asListItem().setChoiceValues(kyotoArea);

      //下北沢エリア登録
  let simokitaArea = sheet.getRange(3,21, sheet.getRange(45,21).getValue(),1).getValues();
  simokitaArea = simokitaArea.flat();
  myItems[26].asListItem().setChoiceValues(simokitaArea);

      //中野・高田馬場エリア登録
  let nakanoArea = sheet.getRange(3,23, sheet.getRange(45,23).getValue(),1).getValues();
  nakanoArea = nakanoArea.flat();
  myItems[28].asListItem().setChoiceValues(nakanoArea);

      //大宮・川越・川口エリア登録
  let saitamaArea = sheet.getRange(3,25, sheet.getRange(45,25).getValue(),1).getValues();
  saitamaArea = saitamaArea.flat();
  myItems[30].asListItem().setChoiceValues(saitamaArea);

      //恵比寿エリア登録
  let ebisuArea = sheet.getRange(3,27, sheet.getRange(45,27).getValue(),1).getValues();
  ebisuArea = ebisuArea.flat();
  myItems[32].asListItem().setChoiceValues(ebisuArea);

      //原宿・表参道エリア登録
  let harajukuArea = sheet.getRange(3,29, sheet.getRange(45,29).getValue(),1).getValues();
  harajukuArea = harajukuArea.flat();
  myItems[34].asListItem().setChoiceValues(harajukuArea);

      //六本木・麻布エリア登録
  let roppongiArea = sheet.getRange(3,31, sheet.getRange(45,31).getValue(),1).getValues();
  roppongiArea = roppongiArea.flat();
  myItems[36].asListItem().setChoiceValues(roppongiArea);

      //西東京エリア登録
  let nishitokyoArea = sheet.getRange(3,33, sheet.getRange(45,33).getValue(),1).getValues();
  nishitokyoArea = nishitokyoArea.flat();
  myItems[38].asListItem().setChoiceValues(nishitokyoArea);

      //品川・蒲田・五反田エリア登録
  let shinagawaArea = sheet.getRange(3,35, sheet.getRange(45,35).getValue(),1).getValues();
  shinagawaArea = shinagawaArea.flat();
  myItems[40].asListItem().setChoiceValues(shinagawaArea);


      //沖縄エリア登録
  let okinawaArea = sheet.getRange(3,37, sheet.getRange(45,37).getValue(),1).getValues();
  okinawaArea = okinawaArea.flat();
  myItems[42].asListItem().setChoiceValues(okinawaArea);

     //福岡エリア登録
  let fukuokaArea = sheet.getRange(3,39, sheet.getRange(45,39).getValue(),1).getValues();
  fukuokaArea = fukuokaArea.flat();
  myItems[44].asListItem().setChoiceValues(fukuokaArea);

     //大阪（難波）エリア登録
  let nanbaArea = sheet.getRange(3,41, sheet.getRange(45,41).getValue(),1).getValues();
  nanbaArea = nanbaArea.flat();
  myItems[46].asListItem().setChoiceValues(nanbaArea);

     //大阪（梅田）エリア登録
  let umedaArea = sheet.getRange(3,43, sheet.getRange(45,43).getValue(),1).getValues();
  umedaArea = umedaArea.flat();
  myItems[48].asListItem().setChoiceValues(umedaArea);

    //浅草・押上エリア登録
  let asakusaArea = sheet.getRange(3,45, sheet.getRange(45,45).getValue(),1).getValues();
  asakusaArea = asakusaArea.flat();
  myItems[50].asListItem().setChoiceValues(asakusaArea);

    //名古屋（栄）エリア登録
  let sakaeArea = sheet.getRange(3,47, sheet.getRange(45,47).getValue(),1).getValues();
  sakaeArea = sakaeArea.flat();
  myItems[52].asListItem().setChoiceValues(sakaeArea);

    //名古屋（大須・錦）エリア登録
  let osuArea = sheet.getRange(3,49, sheet.getRange(45,49).getValue(),1).getValues();
  osuArea = osuArea.flat();
  myItems[54].asListItem().setChoiceValues(osuArea);

    //千葉エリア登録
  let thibaArea = sheet.getRange(3,51, sheet.getRange(45,51).getValue(),1).getValues();
  thibaArea = thibaArea.flat();
  myItems[56].asListItem().setChoiceValues(thibaArea);

    //北千住エリア登録
  let kitasenjuArea = sheet.getRange(3,53, sheet.getRange(45,53).getValue(),1).getValues();
  kitasenjuArea = kitasenjuArea.flat();
  myItems[58].asListItem().setChoiceValues(kitasenjuArea);

  addflavor();

};

function addflavor(){

  let form = FormApp.openById("1eeNH0b2h4A268ylbYwKJa4srom7kLu5mkEWPouF0Rlc")

  let myItems = form.getItems();

    //スプレッドシート取得//
  const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1k-o4ytOG_z-ayLW6HkD5rq-20gWHeNAxS4TAVlrVlNY/edit?usp=sharing").getSheetByName('フレーバ一覧');

    //フレーバー登録
  let flavor = sheet.getRange(2,1,1, sheet.getRange(2,48).getValue()).getValues();
  flavor = flavor.flat();
  myItems[60].asListItem().setChoiceValues(flavor);
  myItems[64].asListItem().setChoiceValues(flavor);
  myItems[68].asListItem().setChoiceValues(flavor);
  myItems[72].asListItem().setChoiceValues(flavor);
  myItems[76].asListItem().setChoiceValues(flavor);
  myItems[80].asListItem().setChoiceValues(flavor);

};



