import { Col, Row } from "./atomic";
import logo from "../assets/dimigo.png";
import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

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
        <div>제2회 한국디지털미디어고등학교 e스포츠 대회</div>
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
  }
`;

const Right = styled(Row)`
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
