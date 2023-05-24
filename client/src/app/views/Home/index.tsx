import useGetUser from "./hooks/useGetUser";
import AppLoader from "app/components/AppLoader";

export default function Home() {
  const { isLoading, isFetching } = useGetUser();

  return (
    <AppLoader loading={isLoading || isFetching}>
      <div className="text-white">The Home Page</div>
    </AppLoader>
  );
}
