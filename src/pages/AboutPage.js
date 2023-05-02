// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'

function AboutPage(){
    const isDesktopOrMobile = useMediaQuery({query: '(max-width:768px)'}); // 758px 이하일 때는 모바일 뷰로 바뀐다.

    const AboutPageComponent = styled.div`
        
    `;
    return (
        <AboutPageComponent>
            <Navbar />
            {isDesktopOrMobile !== true ? 
            <div>
                <h1>소개 디자인 제작중</h1>
            </div>
            :
            <h1>디자인 제작중</h1>
            }
        </AboutPageComponent>
    );
}

export default AboutPage;