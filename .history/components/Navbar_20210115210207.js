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
  background-image: url("https://cdn.pixabay.com/photo/2019/08/05/08/54/football-4385515_1280.jpg");
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
