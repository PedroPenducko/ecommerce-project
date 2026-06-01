 import { useState} from 'react';
 import {Chatbot} from 'supersimpledev';
 import './ChatInput.css'
 export function ChatInput({messagesArr, setMessagesArr}){

      const [inputText, setInputText] = useState('');
      function saveInputText(event){
        setInputText(event.target.value);
      }
      function sendMessage(){
        
       const newChatMessages =  [
          ...messagesArr,
          {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID()
          },
        ];
       setMessagesArr(newChatMessages);
          const response = Chatbot.getResponse(inputText);
          setMessagesArr([
          ...newChatMessages,
          {
            message: response,
            sender: "robot",
            id: crypto.randomUUID()
          }
        ]);
          setInputText('');
      }
      return  (<div className="input-container">
      <input 
        placeholder="Send a message to ChatBot" 
        size="30" 
        onChange={saveInputText}
        value={inputText}
      />
      <button onClick={sendMessage}>send</button>
              </div>
    );
  }