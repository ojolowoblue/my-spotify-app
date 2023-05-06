import * as React from "react";
import Nav from "./Nav";
import styled from "@emotion/styled";
import { colors } from "app/enums";

export default function AppWrapper(props: React.PropsWithChildren) {
  return (
    <Wrapper>
      <Nav />
      <div className="children-wrapper">{props.children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  div:nth-of-type(odd) {
    flex: 20%;
  }

  div:nth-of-type(even) {
    flex: 80%;
  }

  .children-wrapper {
    background: ${colors.primeDark};
  }
`;
