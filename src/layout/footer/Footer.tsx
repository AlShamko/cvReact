import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Aliaksandr</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon height="21px" width="21px" viewBox="21px" iconId="instagram" />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon height="21px" width="21px" viewBox="21px" iconId="telegram" />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon height="21px" width="21px" viewBox="21px" iconId="vk" />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon height="21px" width="21px" viewBox="21px" iconId="linkedin" />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 ALiaksandr Shamko, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 20vh;
  background-color: #db9999;
`;
const Name = styled.span``;
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a``;
const Copyright = styled.small``;
