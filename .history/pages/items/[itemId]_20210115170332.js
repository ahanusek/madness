import Link from "next/link";
import { baseUrl, fetchQuery } from "../../utils";
import styled from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import Navbar from "../../components/Navbar";

const StyledWrapper = styled.div`
  position: relative;
  top: 70px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: grey;
`;

const ImageWrapper = styled.img`
  width: 600px;
  height: 600px;
  margin: 0 auuto;
  border: 1px solid black;
`;

export default function Item({ item }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <StyledWrapper>
        <ImageWrapper src={`${baseUrl}${item.url}`} alt={item.title} />
        <h1>{item.content}</h1>

        <h3>{item.title}</h3>
      </StyledWrapper>
    </>
  );
}

export async function getStaticProps({ params }) {
  const item = await fetchQuery("items", `${params.itemId}`);
  return {
    props: {
      item,
    },
  };
}

export async function getStaticPaths() {
  const items = await fetchQuery("items");
  const paths = items.map((item) => {
    return {
      params: { itemId: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
