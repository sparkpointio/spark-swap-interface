import React from "react";
import styled from "styled-components";
import {  MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
}) => {

  return (
    <Container>
      <div style={{ width: "100%", textAlign: "center" }}>
        <img alt='sparkswap-icon' src='/SparkSwapLogoWithWord.png' width='200px'/>
      </div> 
    </Container>
  );
};

export default PanelFooter;