//スプレッドシートにて回答整理//
function onSubmit(e) {
  console.log(e.values);

//スプレッドシート取得//
  const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1k-o4ytOG_z-ayLW6HkD5rq-20gWHeNAxS4TAVlrVlNY/edit?usp=sharing").getSheetByName('回答整理');

//店舗名取得//
if(e.values[3] = "シーシャ屋"){
  for (var i = 5;i <32 ; i++){
    if(e.values[i].length > 0){
      var shop = e.values[i];
      break;
    }
  }
}else{
  var shop = e.values[3];
};

//フレーバーのメーカー名取得//
  var flavorM1 = e.values[32];
  var flavorM2 = e.values[35];
  var flavorM3 = e.values[38];
  var flavorM4 = e.values[41];
  var flavorM5 = e.values[44];
  var flavorM6 = e.values[47];

//フレーバー名取得//
  var flavor1 = e.values[33];
  var flavor2 = e.values[36];
  var flavor3 = e.values[39];
  var flavor4 = e.values[42];
  var flavor5 = e.values[45];
  var flavor6 = e.values[48];  


//スプレッドシートに記載//
sheet.getRange(2, 3).setValue(shop);
sheet.getRange(2, 4).setValue(flavorM1);
sheet.getRange(2, 6).setValue(flavorM2);
sheet.getRange(2, 8).setValue(flavorM3);
sheet.getRange(2, 10).setValue(flavorM4);
sheet.getRange(2, 12).setValue(flavorM5);
sheet.getRange(2, 14).setValue(flavorM6);
sheet.getRange(2, 5).setValue(flavor1);
sheet.getRange(2, 7).setValue(flavor2);
sheet.getRange(2, 9).setValue(flavor3);
sheet.getRange(2, 11).setValue(flavor4);
sheet.getRange(2, 13).setValue(flavor5);
sheet.getRange(2, 15).setValue(flavor6);
sheet.getRange(2, 1).setValue(e.values[1]);
sheet.getRange(2, 2).setValue(e.values[2]);
sheet.getRange(2, 16).setValue(e.values[49]);
sheet.getRange(2, 17).setValue(e.values[50]);
sheet.getRange(2, 18).setValue(e.values[4]);
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
  const sheet2 = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1k-o4ytOG_z-ayLW6HkD5rq-20gWHeNAxS4TAVlrVlNY/edit?usp=sharing").getSheetByName('店舗一覧');


  //シートに入力された値を取得
  const date = sheet.getRange(2, 1).getValue();
  const nickName = sheet.getRange(2, 2).getValue();
  const shopName = sheet.getRange(2, 3).getValue();
  const flavorMName1 = sheet.getRange(2, 4).getValue();
  const flavorMName2 = sheet.getRange(2, 6).getValue();
  const flavorMName3 = sheet.getRange(2, 8).getValue();
  const flavorMName4 = sheet.getRange(2, 10).getValue();
  const flavorMName5 = sheet.getRange(2, 12).getValue();
  const flavorMName6 = sheet.getRange(2, 14).getValue();
  const flavorName1 = sheet.getRange(2, 5).getValue();
  const flavorName2 = sheet.getRange(2, 7).getValue();
  const flavorName3 = sheet.getRange(2, 9).getValue();
  const flavorName4 = sheet.getRange(2, 11).getValue();
  const flavorName5 = sheet.getRange(2, 13).getValue();
  const flavorName6 = sheet.getRange(2, 15).getValue();
  const evaluation = sheet.getRange(2, 16).getValue();
  const comment  = sheet.getRange(2, 17).getValue();
  var shopArea = sheet.getRange(2, 18).getValue();

  //店舗名をリレーションDBに紐付け
  if(shopArea != ""){

    for (var i = 1;i <54 ; i++){
      if(sheet2.getRange(2,i).getValue() == shopArea){
        var shopAreaNo = sheet2.getRange(1,i).getValue();
        break;
      }
    };

    for (var i = 3;i <41 ; i++){
      if(sheet2.getRange(i,shopAreaNo).getValue() == shopName){
        var shopNameId = sheet2.getRange(i,shopAreaNo+1).getValue();
        break;
      }
    };
  }else{
    shopNameId = "12c60b03d99c461ebcda64b8b3aaad38";
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
            "content":　nickName 
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
        "rich_text": [{
          "text": {
            "content": date
          }
        }]
      }, 
      
      "店名": {
        "relation": [
        {
          "id": shopNameId,
          "content": shopName,
        }
        ]
      },
      "フレーバー1": {
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
      "フレーバー3": {
        "rich_text": [{
          "text": {
            "content": flavorName3
          }
        }]
      },

      "フレーバー4": {
        "rich_text": [{
          "text": {
            "content": flavorName4
          }
        }]
      },
      "フレーバー5": {
        "rich_text": [{
          "text": {
            "content": flavorName5
          }
        }]
      },
      "フレーバー6": {
        "rich_text": [{
          "text": {
            "content": flavorName6
          }
        }]
      },
      "メーカー1": {
        "rich_text": [{
          "text": {
            "content": flavorMName1
          }
        }]
      },
      "メーカー2": {
        "rich_text": [{
          "text": {
            "content": flavorMName2
          }
        }]
      },
      "メーカー3": {
        "rich_text": [{
          "text": {
            "content": flavorMName3
          }
        }]
      },
      "メーカー4": {
        "rich_text": [{
          "text": {
            "content": flavorMName4
          }
        }]
      },
      "メーカー5": {
        "rich_text": [{
          "text": {
            "content": flavorMName5
          }
        }]
      },
      "メーカー6": {
        "rich_text": [{
          "text": {
            "content": flavorMName6
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
    }
  }
   return pageObj;
  };



