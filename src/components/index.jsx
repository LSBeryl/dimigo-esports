import styled from "styled-components";
import { Col } from "./atomic";

export const Box = styled(Col)`
  width: 100%;
  align-items: flex-start;
  border-radius: 1rem;
  border: 1px solid #555;
  background: #1b1b1b;
  padding: 1rem;
  gap: 1.5rem;
  & * {
    font-size: 0.9rem;
  }
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    & > div:nth-child(1) {
      font-weight: 700;
      font-size: 1rem;
    }
    & > div:nth-child(2) {
      font-weight: 300;
      font-size: 0.8rem;
      color: #aaa;
    }
  }
`;

export const Schedule = styled(Col)`
  flex-shrink: 0;
  gap: 1rem;
  padding: 2rem 3rem;
  border-radius: 1rem;
  border: 1px solid #555;
  & > div {
    &:nth-child(1) {
      // 날짜 및 시간 컨테이너
      gap: 0.2rem;
      & > div:nth-child(1) {
        // 날짜
        font-weight: 600;
      }
      & > div:nth-child(2) {
        // 시간
        color: #aaa;
        font-size: 0.8rem;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      & > div {
        &:nth-child(1) {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          & > div:nth-child(2) {
            color: #aaa;
            font-size: 0.9rem;
          }
          & > div:not(:nth-child(2)) {
            font-weight: 600;
          }
        }
        &:nth-child(2) {
          // 종목
          color: #aaa;
          font-size: 0.8rem;
        }
      }
    }
  }
`;
