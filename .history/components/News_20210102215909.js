import React from "react";
import styled from "styled-components";
import Card from "./Card";
import SimpleSwiper from "./Slider/SimpleSwiper";

const news = [
  {
    title: "Mistrzostwa Polski Górników i Przyjaciół",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2014/10/14/20/24/the-ball-488717_1280.jpg",
    created: "1 day",
  },
  {
    title: "React on my mind",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_1280.jpg",
    created: "1 day",
  },
  {
    title: "React on my mind",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg",
    created: "1 day",
  },
];

const StyledWrapper = styled.div`
  width: 100vw;
  height: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-center;
  background-color: #252525;
  overflow: hidden;
`;

const News = () => (
  <StyledWrapper>
    {news.map((item) => (
      <Card
        title={item.title}
        content={item.content}
        imageNews={item.imageNews}
        created={item.created}
      />
    ))}
  </StyledWrapper>
);

export default News;
