import styled from "styled-components";
import { media } from "../../constants/Media";
import { pxToRem } from "../../constants/Size";

function Home() {
  return <Title>홈</Title>;
}

const Title = styled.p`
  ${media.mobile} {
    font-size: ${pxToRem(10)};
  }
`;

export default Home;
