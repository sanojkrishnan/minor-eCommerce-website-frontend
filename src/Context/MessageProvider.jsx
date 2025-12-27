
import { useState } from "react";
import { MessageContext } from "./StateContext";


function MessageProvider({ children }) {
  const [viewMessage, setViewMessage] = useState("");

  return (
    <MessageContext.Provider value={{viewMessage, setViewMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export default MessageProvider;
