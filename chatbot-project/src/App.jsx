import { useState} from 'react';
import { ChatInput } from "./components/ChatInput";
import ChatMessages from './components/ChatMessages';
import './App.css'

 function App(){
      const [messagesArr, setMessagesArr] = useState([
        {
          message: "JUSTIN JUSTIN JUSTIN",
          sender: "user",
          id: '1'
        },
        {
          message: "WASSUP",
          sender: "robot",
          id: '2'
        },
        {
          message: "WASSUP BRO",
          sender: "user",
          id: '3'
        },
        {
          message: "LET'S GO",
          sender: "robot",
          id: '4'
        }        
      ]);
     
      return (
        <div className="input-container-app">
         
          <ChatMessages
          messagesArr={messagesArr}
          />
          <ChatInput 
            messagesArr={messagesArr}
            setMessagesArr={setMessagesArr}
          />
        </div>
      );
    }
  
export default App
