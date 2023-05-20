import styled from "@emotion/styled";

import mixins from "app/styles/mixins";
import Loader from "./Loader";

interface Props {
  loading: boolean;
}

const AppLoader = ({ loading, children }: React.PropsWithChildren<Props>) => (
  <Container>
    {loading ? (
      <div>
        <Loader />
      </div>
    ) : (
      <div className="w-full h-full">{children}</div>
    )}
  </Container>
);

export default AppLoader;

const Container = styled.div`
  ${mixins.flexCenter};
  width: 90%;
  height: 90vh;
`;
