import styled, { css } from "styled-components";
import { Article } from "@styled-icons/material-outlined/Article";

const StyledWrapper = styled.div`
  position: relative;
  padding: 20px 30px 30px 250px;
  opacity: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("https://images.unsplash.com/photo-1587329310760-44ef5c45c6c4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3302&q=80");
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
  }
`;

const ImageWrapper = styled.img`
  width: 200px;
  height: 140px;
  border-radius: 8px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 15px;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #fd5825;
  font-weight: 700;
`;

const Data = styled.span`
  color: #222;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;

const ContentText = styled.h2`
  font-size: 25px;
  color: #222;
  padding: 0;
  margin: 0;
`;

const ContentExcerpt = styled.h4`
  color: #222;
  font-weight: 500;
`;

const Button = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 15px;
  border-bottom: 2px solid #fd5825;
  cursor: pointer;
  transition: background-color 0.4s ease-out;

  &:hover {
    background-color: #fd5825;
    color: white;
  }
`;

const MyArticle = styled(Article)`
  width: 25px;
  height: 25px;
`;

const ContentButton = styled.div`
  display: fex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
`;

const Card = ({ title, excerpt, content, imageNews, data, type }) => (
  <StyledWrapper>
    <ImageWrapper src={imageNews} alt="" />
    <InnerWrapper>
      <Title>
        {type} <Data>/ {data}</Data>
      </Title>
      <ContentWrapper>
        <ContentText>{title}</ContentText>
        <ContentExcerpt>{excerpt}</ContentExcerpt>
      </ContentWrapper>
      <ContentButton>
        <MyArticle />
        <Button href="">więcej</Button>
      </ContentButton>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;