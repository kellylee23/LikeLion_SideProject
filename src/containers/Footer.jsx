import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 391px;
  min-height: 100vh;
  margin: 0 auto;
  background: #bbbbbb;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Footer_space = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-top: 1px solid #606060;
  color: #606060;
  font-family: "Black Han Sans" !important;
`;

const Footer = () => {
  return (
    <Container>
      <Footer_space>
        {/* <div className={`${styles.footer_text} material-symbols-outlined`}> */}
        copyright
        {/* </div> */}
        <div>CPK limited</div>
      </Footer_space>
    </Container>
  );
};

export default Footer;
