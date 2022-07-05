import styled from "styled-components";
import { media } from "../../constants/Media";
import { pxToRem } from "default-ui";

function Home() {
  return <Title>홈</Title>;
}

const Title = styled.p`
  font-size: ${pxToRem(20)};

  ${media.mobile} {
    font-size: ${pxToRem(10)};
  }
`;

export default Home;
