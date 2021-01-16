import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../theme/GlobalStyle";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  background-color: #fd5825;
  padding: 10px;
  color: white;
  border-radius: 5px;
`;
const InnerWrapper = styled.div`
  display: flex;
`;

const Results = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <StyledWrapper>
      <Title>Wyniki Turniejów Stowarzyszenia Madness</Title>
      <InnerWrapper></InnerWrapper>
    </StyledWrapper>
  </>
);

export default Results;