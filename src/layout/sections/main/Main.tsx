import styled from "styled-components";
import photo from "../../../assets/images/avatar.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Aliaksandr Shamko</span>
            </Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>
          <PhotoWrapper><Photo src={photo} alt="avatar" /></PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
  display: flex;

  div {
    text-align: start;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  

  &::before{
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${Theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  border-radius:20px;
  background: transparent;
`;

const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
`;

const Name = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700px;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${Theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
