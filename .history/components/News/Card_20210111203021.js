import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Article } from "@styled-icons/material-outlined/Article";
import { news } from "../../data/dataNews";
import DetailsTemplate from "../../templates/DetailsTemplate";

const StyledWrapper = styled.div`
  position: relative;
  top: 80px;
  padding: 20px 30px 20px 250px;
  opacity: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
`;

const ImageWrapper = styled.img`
  width: 240px;
  height: 180px;
  border-radius: 5px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
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
  font-size: 22px;
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
  margin-left: 20px;
  border-bottom: 2px solid #fd5825;
  cursor: pointer;
  transition: color 0.2s ease;
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
  margin-top: 2px;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, imageNews, content, data, type, excerpt } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageContext}/details/${id}`} />;
    }
    return (
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
            <div></div>
            <Button onClick={this.handleCardClick}>więcej</Button>
          </ContentButton>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

export default Card;

// const Card = ({ title, excerpt, content, imageNews, data, type, id }) => (
//   <StyledWrapper>
//     <ImageWrapper src={imageNews} alt="" />
//     <InnerWrapper>
//       <Title>
//         {type} <Data>/ {data}</Data>
//       </Title>
//       <ContentWrapper>
//         <ContentText>{title}</ContentText>
//         <ContentExcerpt>{excerpt}</ContentExcerpt>
//       </ContentWrapper>
//       <ContentButton>
//         <MyArticle />
//         <div></div>
//         <Button onClick={() => console.log(id)}>więcej</Button>
//       </ContentButton>
//     </InnerWrapper>
//   </StyledWrapper>
// );
