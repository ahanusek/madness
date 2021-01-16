import { useRouter } from "next/router";

import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsTemplate = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <img src={imageNews} alt="" />
      <p>{content}</p>
    </StyledWrapper>
  );
};

export default DetailsTemplate;
