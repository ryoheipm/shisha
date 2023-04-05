// function addflavor() {

//   let form = FormApp.openById("1eeNH0b2h4A268ylbYwKJa4srom7kLu5mkEWPouF0Rlc")

//   let myItems = form.getItems();

//     //スプレッドシート取得//
//   const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1k-o4ytOG_z-ayLW6HkD5rq-20gWHeNAxS4TAVlrVlNY/edit?usp=sharing").getSheetByName('フレーバー一覧');

//     //フレーバー登録
//     for (var i = 1;i <40 ; i++){
//   let flavor = sheet.getRange(2,i, sheet.getRange(30,i).getValue(),1).getValues();
//   flavor = flavor.flat();
//   myItems[58+i].asListItem().setChoiceValues(flavor);
//   };

// }
