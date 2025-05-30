import styled from "styled-components";
import photo from "../../../assets/images/avatar.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>Hi There</span>
          <Naime>I am Aliaksandr Shamko</Naime>
          <MainTitle>A Web Developer.</MainTitle>
        </div>
        <Photo src={photo} alt="avatar" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #e5e1e1;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
`;

const MainTitle = styled.h1`

`;

const Naime = styled.h2`

`;
