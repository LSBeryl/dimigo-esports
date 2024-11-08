import { Col, Row } from "./atomic";
import logo from "../assets/dimigo.png";
import styled, { css, keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlignJustify } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper justify="space-between" align="center" padding="1.5rem 2rem">
      <Left
        align="center"
        gap="0.5rem"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} />
        <div></div>
      </Left>
      <Right gap="2rem">
        <Col
          gap="0.2rem"
          onClick={() => {
            navigate("/lol");
          }}
        >
          <div>리그 오브 레전드</div>
          <div></div>
        </Col>
        <Col
          gap="0.2rem"
          onClick={() => {
            navigate("/overwatch");
          }}
        >
          <div>오버워치 2</div>
          <div></div>
        </Col>
        <Col
          gap="0.2rem"
          onClick={() => {
            navigate("/brawlstars");
          }}
        >
          <div>브롤스타즈</div>
          <div></div>
        </Col>
      </Right>
      <Menu
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
      >
        <AlignJustify />
      </Menu>
      <MobMenu
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
        open={`${+menuOpen}`}
        align="center"
        justify="center"
        gap="3rem"
      >
        <Col
          gap="0.2rem"
          onClick={() => {
            navigate("/lol");
          }}
        >
          <div>리그 오브 레전드</div>
        </Col>
        <Col
          gap="0.2rem"
          onClick={() => {
            navigate("/overwatch");
          }}
        >
          <div>오버워치 2</div>
        </Col>
        <Col
          gap="0.2rem"
          onClick={() => {
            navigate("/brawlstars");
          }}
        >
          <div>브롤스타즈</div>
        </Col>
      </MobMenu>
    </Wrapper>
  );
}

const Wrapper = styled(Row)`
  backdrop-filter: blur(0.5rem);
  position: sticky;
  top: 0;
`;

const Left = styled(Row)`
  cursor: pointer;
  & > img {
    height: 2rem;
  }
  & > div {
    font-weight: 600;
    user-select: none;
    &::before {
      content: "제2회 한국디지털미디어고등학교 e스포츠 대회";
    }
    @media (max-width: 768px) {
      &::before {
        content: "디미고 e스포츠 대회";
      }
    }
  }
`;

const Right = styled(Row)`
  @media (max-width: 768px) {
    display: none;
  }
  & > div {
    color: #ccc;
    transition: all 0.2s ease;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    & > div:nth-child(2) {
      height: 1px;
      background: #eee;
      width: 0%;
      transition: width 0.2s ease;
    }
    &:hover {
      & > div:nth-child(1) {
        color: #eee;
      }
      & > div:nth-child(2) {
        width: 100%;
      }
    }
  }
`;

const Menu = styled.div`
  display: none;
  @media (max-width: 768px) {
    cursor: pointer;
    display: block;
  }
`;

const MobMenu = styled(Col)`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  box-sizing: border-box;
  background: #000000c0;
  & > div {
    & > div {
      cursor: pointer;
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    ${(props) =>
      props.open == "1" &&
      css`
        display: flex;
      `}
  }
`;
