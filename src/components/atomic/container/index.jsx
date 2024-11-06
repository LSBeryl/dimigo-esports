import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.justify && `justify-content: ${props.justify};`}
  ${(props) => props.align && `align-items: ${props.align};`}
  ${(props) => props.gap && `gap: ${props.gap};`}
  ${(props) => props.padding && `padding: ${props.padding}`}
  ${(props) => props.margin && `margin: ${props.margin}`}
`;

export const Col = styled(Row)`
  flex-direction: column;
`;

export const Wrap = styled(Row)`
  flex-wrap: wrap;
  ${(props) => props.alignContent && `align-content: ${props.alignContent}`}
`;
