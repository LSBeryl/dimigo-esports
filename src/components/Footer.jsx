import { Row } from "./atomic";
import logo from "../assets/dimigo.png";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper justify="center" padding="1.5rem">
      <div>&copy; 2024 dimigo council All rights reserved</div>
    </Wrapper>
  );
}

const Wrapper = styled(Row)`
  background: #161616ab;
  backdrop-filter: blur(1rem);
  position: sticky;
  bottom: 0;
  & > div {
    color: #aaa;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;
