import React from "react";
import styled from "styled-components";
import Box from "../main/Box";
// import { NameContext } from "../../screen/Main";

const List = () => {
  //   const [name, setName] = useContext(NameContext);
  return (
    <>
      <Wrapper>
        {/* <h2>Hello. My name is {[name, setName]}.</h2> */}
        <Box />
      </Wrapper>
    </>
  );
};
export default List;

const Wrapper = styled.div``;
