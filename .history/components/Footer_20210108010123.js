import styled from "styled-components";
import { Email } from "@styled-icons/entypo/Email";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100vw;
  height: 350px;
  background-color: #252525;
  color: black;
  margin: 0;
`;

const Mail = styled(Email)`
  width: 30px;
  height: 30px;
  padding: 2px;
  background-color: #a3d044;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e6e6e6;
`;

const Footer = () => (
  <StyledWrapper>
    <InnerWrapper>
      <h6>Prezes Stowarzyszenia Madness</h6>
      <p>Wojciech Chmielewski</p>
      <p>Kontakt : 667-334-677 email: chmielu@gmail.com</p>
      <Mail />
    </InnerWrapper>
    <div></div>
    <div></div>
  </StyledWrapper>
);

export default Footer;
