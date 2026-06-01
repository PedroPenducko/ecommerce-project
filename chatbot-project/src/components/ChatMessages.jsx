  import { useRef, useEffect } from 'react';
  import {ChatMessage} from "./ChatMessage";
  import './ChatMessages.css';
  export function ChatMessages({
      messagesArr}){
        const chatMessagesRef = useRef(null);

        useEffect(()=>{
          const containerElem = chatMessagesRef.current;
          if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [messagesArr]);

      return (
        <div 
        className="chat-messages-container"
        ref={chatMessagesRef}>
   
        {messagesArr.map(arrMessage=>{
          return (
            <ChatMessage 
              message={arrMessage.message} 
              sender={arrMessage.sender} 
              key={arrMessage.id}
            />)
        })}
        </div>
      )
    }
    export default ChatMessages;