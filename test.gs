function test() {

      //スプレッドシート取得//
  const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1k-o4ytOG_z-ayLW6HkD5rq-20gWHeNAxS4TAVlrVlNY/edit?usp=sharing").getSheetByName('店舗一覧');

  let shopArea = "渋谷";
  let shopName = "チルイン渋谷センター街1号店";

  for (var i = 1;i <30 ; i++){
  if(sheet.getRange(2,i).getValue() == shopArea){
    var shopAreaNo = sheet.getRange(1,i).getValue();
    break;
  }
};
  for (var i = 3;i <30 ; i++){
  if(sheet.getRange(i,shopAreaNo).getValue() == shopName){
    var shopNameId = sheet.getRange(i,shopAreaNo+1).getValue();
    break;
  }
};
Logger.log(shopNameId);
}
