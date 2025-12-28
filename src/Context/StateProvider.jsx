import { useState } from "react";
import { MessageContext, SortContext } from "./StateContext";

const initialSort = {
  lowerPrice: 0,
  higherPrice: 0,
  sortBy: "name",
  category: ["all"],
};

function StateProvider({ children }) {
  const [viewMessage, setViewMessage] = useState("");
  const [sorter, setSorter] = useState(initialSort);

  return (
    <MessageContext.Provider value={{ viewMessage, setViewMessage }}>
      <SortContext.Provider value={{ sorter, setSorter, initialSort }}>
        {children}
      </SortContext.Provider>
    </MessageContext.Provider>
  );
}

export default StateProvider;
