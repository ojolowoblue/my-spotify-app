import useGetUser from "./hooks/useGetUser";
import Loading from "app/components/AppLoader";

export default function Home() {
  const { isLoading, isFetching } = useGetUser();
  return (
    <div>
      <Loading loading={isLoading || isFetching}>
        <div className="text-white">The Home Page</div>
      </Loading>
    </div>
  );
}
