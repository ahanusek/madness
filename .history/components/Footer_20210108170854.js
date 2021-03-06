import styled, { css } from "styled-components";
import { Email } from "@styled-icons/entypo/Email";
import { Phone } from "@styled-icons/boxicons-regular/Phone";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100vw;
  height: 350px;
  background-color: #222;
`;

const Mail = styled(Email)`
  width: 35px;
  height: 35px;
  padding: 4px;
  background-color: #a3d044;
  border-radius: 10px;
  color: black;
  margin-right: 20px;
`;
const MyPhone = styled(Phone)`
  width: 35px;
  height: 35px;
  padding: 4px;
  background-color: #a3d044;
  border-radius: 10px;
  color: black;
  margin-right: 20px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px 0 0 50px;
  &.secondary {
    margin-top: 80px;
  }
`;

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-weight: 500;
`;

const NameTitle = styled.p`
  position: relative;
  color: #f7efe5;
  font-size: 18px;
  font-weight: 500;
  &.secondary {
    top: 8%;
  }
`;

const BorderBottomWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(247, 239, 229, 0.6);
  margin-bottom: 20px;
  width: 55%;
  &.secondary {
    top: 8%;
  }
`;

const Content = styled.div`
  position: relative;
  align-items: center;
  color: #f7efe5;
  &.secondary {
    top: 8%;
  }
`;

const InnerContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Footer = () => (
  <StyledWrapper>
    <InnerWrapper>
      <Title>Prezes Stowarzyszenia Madness</Title>
      <NameTitle>Wojciech Chmielewski</NameTitle>
      <BorderBottomWrapper />
      <Content>
        <InnerContent>
          <Mail />
          <p>gitness69@interia.pl</p>
        </InnerContent>
        <InnerContent>
          <MyPhone />
          <p>607-606-405</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
    <InnerWrapper>
      <Title>Madness Żory</Title>
      <NameTitle className="secondary">Seweryn Chachura</NameTitle>
      <BorderBottomWrapper className="secondary" />
      <Content className="secondary">
        <InnerContent>
          <Mail />
          <p>seweryn993@gmail.com</p>
        </InnerContent>
        <InnerContent>
          <MyPhone />
          <p>505-453-543</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
    <InnerWrapper>
      <Title>Madness Chocianów</Title>
      <NameTitle className="secondary">2 lig Futsalu - Michał Jakiś</NameTitle>

      <BorderBottomWrapper className="secondary" />

      <Content className="secondary">
        <InnerContent>
          <Mail />
          <p>maile2353@gmail.com</p>
        </InnerContent>
        <InnerContent>
          <MyPhone />
          <p>564-764-343</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
    <InnerWrapper className="secondary">
      <NameTitle className="secondary">CHLF - Adam Bączek</NameTitle>

      <BorderBottomWrapper className="secondary" />

      <Content className="secondary">
        <InnerContent>
          <Mail />
          <p>maile2353@gmail.com</p>
        </InnerContent>
        <InnerContent>
          <MyPhone />
          <p>564-764-343</p>
        </InnerContent>
      </Content>
    </InnerWrapper>
  </StyledWrapper>
);

export default Footer;
