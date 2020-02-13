import React from "react";
import MessageBox from "./MessageBox";
import Messages from "./Messages";

const Chat = () => {
    return (
        <div>
            <Messages messages={[
                "Hello this is message 1",
                "Hello this is message 2",
                "Hello this is message 3",
                "Hello this is message 4",
                "Hello this is message 5",
            ]} />
            <MessageBox onSendMessage={ message => {

            }} 
            />
        </div>
    );
};

export default Chat;