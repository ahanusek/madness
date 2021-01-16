import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";
import { OverflowMenu, OverflowMenuItem } from "carbon-components-react";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #222;
  height: 75px;
  font-size: 1rem;
  text-transform: uppercase;
`;
const InnerWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 60px;
`;

const StyledList = styled.li`
  margin-right: 10px;
  padding-right: 15px;
  border-right: 1px solid white;
  list-style: none;
  text-decoration: none;
  &:last-child {
    border-right: none;
  }
`;

const LinkStyled = styled.a`
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  color: white;
  cursor: pointer;
  &.active {
    background-color: #fd5825;
    padding: 2px;
    border-radius: 3px;
  }
`;

const Arrow = styled(DownArrow)`
  width: 10px;
  height: 10px;
  color: white;
  margin: 0 0 0 5px;
  padding: 0 0 1px 0;
`;

const BallStyled = styled.div`
  background-image: url("data:image/jpeg;base64,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");
  width: 50px;
  height: 50px;
`;

const Navbar = ({ menu }) => {
  const router = useRouter();
  return (
    <StyledWrapper>
      <BallStyled />
      <InnerWrapper>
        <StyledList>
          <LinkStyled
            href="/"
            className={router.pathname == "/" ? "active" : ""}
          >
            Home
          </LinkStyled>
        </StyledList>
        <StyledList>
          <LinkStyled
            href="/news"
            className={router.pathname == "/news" ? "active" : ""}
          >
            Aktualności
          </LinkStyled>
        </StyledList>
        <StyledList>
          <LinkStyled
            href="/madness"
            className={router.pathname == "/madness" ? "active" : ""}
          >
            Madness
          </LinkStyled>
          <Arrow />
        </StyledList>

        {/* <StyledList>
          <LinkStyled
            href="/calender"
            className={router.pathname == "/calender" ? "active" : ""}
          >
            Terminarz
          </LinkStyled>
        </StyledList> */}
        <StyledList>
          <LinkStyled
            href="/results"
            className={router.pathname == "/results" ? "active" : ""}
          >
            Wyniki
          </LinkStyled>
        </StyledList>
        <StyledList>
          <LinkStyled
            href="/gallery"
            className={router.pathname == "/gallery" ? "active" : ""}
          >
            Galeria
          </LinkStyled>
        </StyledList>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default Navbar;
