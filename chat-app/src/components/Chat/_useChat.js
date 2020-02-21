import socketIOClient from "socket.io-client";
import { useEffect, useRef, useState } from "react";

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();
    
    useEffect(() => {
        socketRef.current = socketIOClient("http://localhost:5000");
        
        socketRef.current.on("newChatMessage", ({ message }) => {
            setMessages(messages => [...messages, message]);
            // People would think to do this:
            // setMessages([...messages, message]);
            // The reason this will not work because useEffect
            // only runs once when the component loads for the first time
            // so it will only have access to the first instance of
            // messages, which is an empty array.
            // doing ...messages would result in an empty array.
            // That's why we had to call a callback function that gets
            // the latest messages =>
        })

        return () => {
            socketRef.current.disconnect();
        }
    }, []);

    const sendMessage = ({ message }) => {
        socketRef.current.emit("newChatMessage", { message });
    }

    return { messages, sendMessage };
}

export default useChat;