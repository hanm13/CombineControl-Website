
let init = (app) => {
const serverChatFile = "./server_chat.json";
const fs = require('fs');
let server_chat = require("./chat.model");

if( !fs.existsSync(serverChatFile) ){

  fs.writeFileSync(serverChatFile,"[]");

}

app.post('/api/chat', (req, res) => {

    let chatArr = JSON.parse(fs.readFileSync(serverChatFile));
  
    let chat_obj = req.body;
    let newChat = new server_chat.ChatClassPointer(chat_obj.nickname,chat_obj.date, chat_obj.data);

    for (key in chat_obj) {

        // we get each key from the body and update the newChat object.
        newChat[key] = chat_obj[key];
    }
  
    chatArr.push(newChat);
  
    if(chatArr){
  
      fs.writeFileSync(serverChatFile, JSON.stringify(chatArr));
  
    }
  
      
  });
  
}

module.exports = {
  init
}