import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
`;

const Data = styled.h2`
  font-size: 20px;
`;

const ContentWrapper = styled.h2`
  font-size: 20px;
`;
const BorderWrapper = styled.div`
  border-bottom: 2px solid rgba(151, 149, 158, 0.7);
  width: 90%;
`;

const CardEvents = ({ title, day, content }) => (
  <ul>
    <ItemWrapper>
      <Data>{day}</Data>
      <ContentWrapper>{content}</ContentWrapper>
    </ItemWrapper>
    <BorderWrapper />
  </ul>
);

export default CardEvents;