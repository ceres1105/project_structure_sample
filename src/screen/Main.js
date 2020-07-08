import React from "react";
import Header from "../component/share/Header";
import MainContainer from "../component/main/MainContainer";
// import { useHistory } from "react-router-dom";

const Main = () => {
  // const token = window.sessionStorage.getItem("token");
  // const history = useHistory();
  // useEffect(() => {
  //   if (token) {
  //     return <MainContainer />;
  //   } else {
  //     // history.push("/login");
  //     alert("로그인을 진행해주세요");
  //   }
  // },);
  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
};

export default Main;
