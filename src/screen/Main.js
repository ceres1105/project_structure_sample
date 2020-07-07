import React, { useState } from "react";
import Header from "../component/share/Header";
import List from "../component/main/List";

export const NameContext = React.createContext("minju");

const Main = () => {
  const [name, setName] = useState("minju");
  return (
    <>
      <Header />
      <NameContext.Provider valu={[name, setName]}>
        <List />
      </NameContext.Provider>
    </>
  );
};

export default Main;
