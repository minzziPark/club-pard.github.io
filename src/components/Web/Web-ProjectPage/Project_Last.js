import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import React from "react";
import AboutImage from "../../../assets/img/AboutLogo.png";
import ProgramFrame from "../../../assets/img/Program_Mob_Bar.png";
import ProjectGrid from "./ProjectPageNation";

const PartDiv = styled.div`
  height: 1881px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image: url(${require("../../../assets/img/ProjectLast.png")}); */
  /* background-size: cover; */
  background-repeat: no-repeat;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Header7 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header7};
  font-weight: ${(props) => props.theme.fontWeights.Header7};
  color: #ffffff;
  font-family: "NanumSquare Neo";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 140%;
  margin-top: 180px;
  margin-right: 840px;
  margin-bottom: 90px;
`;

function ProjectLast() {
  return (
    <Div>
      <PartDiv>
        <ThemeProvider theme={theme}>
          <Header7>전체 프로젝트</Header7>
          {/* <Header7>
          PARD의 첫 프로젝트가<br/>곧 공개 예정이에요!
          </Header7>
          <LogoDiv>
          <ArrowLogo src={require('../../../assets/img/Arrow_Project.png')}/>
          <ArrowLogo src={require('../../../assets/img/Arrow_Project.png')}/>
          <ArrowLogo src={require('../../../assets/img/Arrow_Project.png')}/>
          <ArrowLogo src={require('../../../assets/img/Arrow_Project.png')}/>
          </LogoDiv> */}
          <ProjectGrid />
        </ThemeProvider>
      </PartDiv>
    </Div>
  );
}

export default ProjectLast;
