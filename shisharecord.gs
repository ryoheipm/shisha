//スプレッドシートにて回答整理//
function onSubmit(e) {
  console.log(e.values);

//スプレッドシート取得//
  const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1k-o4ytOG_z-ayLW6HkD5rq-20gWHeNAxS4TAVlrVlNY/edit?usp=sharing").getSheetByName('回答整理');

//店舗名取得//
for (var i = 3;i <5 ; i++){
  if(e.values[i].length > 0){
    var shop = e.values[i];
    break;
  }
};

//フレーバー名取得//
for (var i = 6;i <9 ; i++){
  if(e.values[i].length > 0){
    var flavor1 = e.values[i];
    break;
  }
};
for (var i = 11;i <13 ; i++){
  if(e.values[i].length > 0){
    var flavor2 = e.values[i];
    break;
  }
};

//スプレッドシートに記載//
sheet.getRange(2, 2).setValue(shop);
sheet.getRange(2, 3).setValue(flavor1);
sheet.getRange(2, 4).setValue(flavor2);
// sheet.getRange(1, 4).setValue(flavor3);
sheet.getRange(2, 5).setValue(e.values[1]);
sheet.getRange(2, 1).setValue(e.values[14]);
sheet.getRange(2, 6).setValue(e.values[13]);
sheet.getRange(2, 7).setValue(e.values[15]);

addDataToNotion();

};

//notionAPI
function addDataToNotion() {

  //スクリプトプロパティに格納したデータベースID、トークンを取得
  const props  = PropertiesService.getScriptProperties();
  const dbId   = props.getProperty('NOTION_DB_ID');
  const token  = props.getProperty('NOTION_TOKEN');
  const apiUrl = 'https://api.notion.com/v1/pages';

  //データベースIDを渡しオブジェクトを生成
  const obj = generateObj(dbId);

  //NotionAPIにポストしデータを追加
  const options = {
    method: "POST",
      "muteHttpExceptions" : true,
      "followRedirects" : false,
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + token,
      "Notion-Version": '2022-06-28',
    },
    payload: JSON.stringify(obj),
  };

  try {
 const res = UrlFetchApp.fetch(apiUrl, options);    
    Logger.log(res)
  } catch(e) {
    // 例外エラー処理
    Logger.log('Error:')
    Logger.log(e)
  }
};

//スプレッドシートの内容をnotionへ
function generateObj(dbId) {

//スプレッドシート取得
  const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1k-o4ytOG_z-ayLW6HkD5rq-20gWHeNAxS4TAVlrVlNY/edit?usp=sharing").getSheetByName('回答整理');


  //シートに入力された値を取得
  const date    = sheet.getRange(2, 5).getValue();
  const shopName    = sheet.getRange(2, 2).getValue();
  const flavorName1    = sheet.getRange(2, 3).getValue();
  const flavorName2 = sheet.getRange(2, 4).getValue();
  const evaluation = sheet.getRange(2, 6).getValue();
  const comment  = sheet.getRange(2, 1).getValue();
  const nickname = sheet.getRange(2, 7).getValue();
  // const img  = sheet.getRange(2, 16).getValue();

  //店舗名をリレーションDBに紐付け
  var shopId = "";
  if(shopName == "dada") {
    var shopId = "0a0c0a642f5e4243bf997ffd748a0680" 
  }else if(shopName == "SOMA") {
    var shopId = "c0b554063a03402e8021131cc5ae0bd3"
  }else if(shopName == "Shisha bar Lilac"){
    var shopId = "eac9a5e57a1644dabb57a4b371f33587"
  }else if(shopName == "Cafe Bohemia"){
    var shopId = "301f1f25e26343bf8f2f6116b1a5393a"
  }else if(shopName == "CHILLAX shibuya"){
    var shopId = "79166737de2b4c5cbca0b6063b629b7d"
  }else if(shopName == "香楽 新宿店"){
    var shopId = "95e2b531bf7b41fbb81496a43ea4646c"
  }else if(shopName == "NORTH VILLAGE 新宿1号店"){
    var shopId = "c02d60a46bd04115a6b1869320995ae3"
  }else if(shopName == "NORTH VILLAGE 歌舞伎町店"){
    var shopId = "ea1a38f1c3ee40a59bb0f03fe2863282"
  }else if(shopName == "チルアップ歌舞伎1号店"){
    var shopId = "a4149b301fc8464196b9712861bd30b4"
  }else if(shopName == "Shisha Tokyo"){
    var shopId = "083be88f4c5349aaa77d262f70bd85a6"
  };
  
  
  //notionのオブジェクトに値を格納
  const pageObj = {

    parent: {
      database_id: dbId,
    },
    properties: {
      "ニックネーム": {
        "title": [{
          "text": {
            "content":　nickname 
          }
        }]
      },      
      "コメント": {
        "rich_text": [{
          "text": {
            "content": comment
          }
        }]
      }, 
      "日付": {
        "date": {
              "start": date,
              "end": null
          } 
      },
      
      "店名": {
        "relation": [
        {
          "id": shopId,
          "content": shopName,
        }
        ]
      },

      "フレーバー": {
        "rich_text": [{
          "text": {
            "content": flavorName1
          }
        }]
      },
      "フレーバー2": {
        "rich_text": [{
          "text": {
            "content": flavorName2
          }
        }]
      },
      "評価": {
        "rich_text": [{
          "text": {
            "content":　evaluation 
          }
        }]
      },

    // "画像": {
    //     "files":[
    //       {
    //         "name":img
    //       }
    //     ]
    //   },
    
    }
  }
  console.log(flavorName2);
  console.log(flavorName1);
  return pageObj;
  };

