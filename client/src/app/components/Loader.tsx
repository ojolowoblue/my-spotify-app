import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const colors = {
  grey: "#B3B3B3",
};

const Loader = () => (
  <Bars>
    <Bar delay="250ms" />
    <Bar delay="715ms" />
    <Bar delay="475ms" />
    <Bar delay="25ms" />
    <Bar delay="190ms" />
  </Bars>
);

export default Loader;

const dance = keyframes`
  from {
    height: 10px;
  }
  to {
    height: 100%;
  }
`;

const Bars = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  width: 100px;
  min-width: 100px;
  height: 50px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  left: 0;
  right: 0;
`;
const Bar = styled.div<{ delay: string }>`
  width: 10px;
  height: 5px;
  margin: 0 2px;
  background-color: ${colors.grey};
  animation-name: ${dance};
  animation-duration: 400ms;
  animation-play-state: running;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: ${(props) => props.delay || "0ms"};
`;
