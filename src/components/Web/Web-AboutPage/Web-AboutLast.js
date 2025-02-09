import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import AboutFrame_Down from '../../../assets/img/AboutFrame_Down.png';

const PartDiv = styled.div`
    height: 620px;
    background-color: #FFFFFF;
    display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
margin: 0 auto;
`;

const AboutFrame1 = styled.img`
    height: 40px;
    width: 100%;
    border-radius: 0px;
    margin-top: 160px;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
`;

const Header7 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header7};
  font-weight: ${props => props.theme.fontWeights.Header7};
  color: #000000;
  font-family: 'NanumSquare Neo';
  margin-bottom: 80px;
  white-space: pre-line;
  display : flex;
  margin-top: 217-70px;  
`;

const Subtitle3 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Subtitle3};
  font-weight: ${props => props.theme.fontWeights.Subtitle3};
  color: #000000;
  text-align: center;
  font-family: 'NanumSquare Neo';
  white-space: pre-line;
  margin-bottom: 18px;
  line-height : 140%;
`;

const Body2 = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.Body2};
    font-weight: ${props => props.theme.fontWeights.Body2};
    text-align: center;
    color: #000000;
    margin-bottom: 95px;
`;

const Button = styled.button`
    font-size: ${props => props.theme.Web_fontSizes.Header6};
    font-weight: ${props => props.theme.fontWeights.Header6};
    font-family: 'NanumSquare Neo';
    white-space: pre-line;
    display: flex;
    align-items: center;
    line-height: 140%;
    width: 440px;
    height: 64px;
    /* background-color: #FF5C00; */
    background-color: #d3d1d8;
    justify-content: center;
    margin-top: 15px;
    color: #FFFFFF;
    border-radius: 10px;
    border : none;
    /* cursor:pointer; */
    cursor: not-allowed;

`;

const Shape1 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header3};
  font-weight: ${props => props.theme.fontWeights.Header3};
  font-family: 'NanumSquare Neo';
  line-height: 53px;
  width:18px;
  height:26px;
  display: flex;
  color: #FF5C00;
  width:18px;
  height:26px;
  margin-right: 500px;
`;

const Shape2 = styled.div`
  font-size: ${props => props.theme.Web_fontSizes.Header3};
  font-weight: ${props => props.theme.fontWeights.Header3};
  font-family: 'NanumSquare Neo';
  line-height: 53px;
  width:18px;
  height:26px;
  display: flex;
  color: #FF5C00;
  width:18px;
  height:26px;
`;


const Line = styled.div`
  display:flex;
`;

function AboutLast() {

  const handleClick = () => {
    window.open("https://forms.gle/oXnAxHnAgSnCEarg7", "_blank");
  };

    return (
        <Div>
        <PartDiv>
            <ThemeProvider theme={theme}>
                <Header7>진짜 협업을 경험하고 싶다면</Header7>
                <Line>
                    <Shape1>"</Shape1>
                    <Shape2>"</Shape2>
                </Line>
                <Subtitle3>똑같은 파도는 다시 오지 않아요<br></br>좋은 파도를 고르는 것 자체도 선수들의 역량이에요</Subtitle3>
                <Body2>송민 KBS 서핑 해설위원</Body2>
                {/* <Button1 onClick={handleClick}>지금 바로 2기 지원하기</Button1> */}
                <Button>2기 모집이 완료 되었습니다.</Button>
                <AboutFrame1 src={AboutFrame_Down} alt="AboutFrame" />  
            </ThemeProvider>
        </PartDiv>
        </Div>
    );
}

export default AboutLast;