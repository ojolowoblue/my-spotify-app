import { useQuery } from "@tanstack/react-query";
import UserService from "app/api/user";

export default function useGetUser() {
  const { data, isLoading, isFetching } = useQuery(
    ["user"],
    UserService.getUser
  );

  return {
    data,
    isLoading,
    isFetching,
  };
}
