import {useQuery} from "@tanstack/react-query"
import { fetchPosts } from "../../api";

export function useProgress(){
const {isLoading, data: users, error} = useQuery({
     queryKey: ['users'],
    queryFn: fetchPosts
  })
  return {isLoading, users, error}
}