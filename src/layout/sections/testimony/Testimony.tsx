import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction="column" align="center">
        <Icon iconId={"quote"} />
        <Slider />
      </FlexWrapper>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 100vh;
  background-color: #8c9afbd5;
`;
