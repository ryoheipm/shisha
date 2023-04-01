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
}





function generateObj(dbId) {

  const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1k-o4ytOG_z-ayLW6HkD5rq-20gWHeNAxS4TAVlrVlNY/edit?usp=sharing").getSheetByName('シーシャ回答');


  //シートに入力された値を取得
  const date    = sheet.getRange(2, 2).getValue();
  const shopName    = sheet.getRange(2, 5).getValue();
  const flavorName1    = sheet.getRange(2, 9).getValue();
  const flavorName2 = sheet.getRange(2, 12).getValue();
  const evaluation = sheet.getRange(2, 14).getValue();
  const comment  = sheet.getRange(2, 15).getValue();
  const img  = sheet.getRange(2, 16).getValue();
  var shopId = "";
  if(shopName == "TheBuzz") {
    var shopId = "0a0c0a642f5e4243bf997ffd748a0680" 
  } else if(shopName == "warp") {
    var shopId = "c0b554063a03402e8021131cc5ae0bd3"
  }　else if(shopName == "ぱるふぁん"){
    var shopId = "eac9a5e57a1644dabb57a4b371f33587"
  };
  
  // sheet.deleteRow(2);
  
  //オブジェクトの生成
  const pageObj = {

    parent: {
      database_id: dbId,
    },
    properties: {
      "コメント": {
        "title": [{
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
  return pageObj;
  }


