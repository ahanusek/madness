import Image from "next/image";
import styled from "styled-components";
import CardGallery from "./CardGallery";

const images = [
  {
    id: 1,
    ImageUrl: "/images/stadion.jpg",
  },
  {
    id: 2,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2017/12/07/18/25/tolgay-arslan-3004304_1280.jpg",
  },
  {
    id: 3,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2017/09/03/09/48/brazil-2709731_1280.jpg",
  },
  {
    id: 1,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2019/08/05/08/54/football-4385515_1280.jpg",
  },
  {
    id: 2,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2017/12/07/18/25/tolgay-arslan-3004304_1280.jpg",
  },
  {
    id: 3,
    ImageUrl:
      "https://cdn.pixabay.com/photo/2017/09/03/09/48/brazil-2709731_1280.jpg",
  },
];

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 85px;
  margin-left: 260px;

  width: 100vw;
  height: 700px;
`;

const Gallery = ({ ImageUrl }) => (
  <StyledWrapper>
    <CardGallery />
  </StyledWrapper>
);

export default Gallery;
