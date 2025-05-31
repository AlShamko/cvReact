import styled from "styled-components";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link>demo</Link>
      <Link>code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
`;

const Title = styled.h3``;

const Text = styled.p``;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Link = styled.a``;
