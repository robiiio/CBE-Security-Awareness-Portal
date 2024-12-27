import {useQuery} from "@tanstack/react-query"
import { fetchPostsContent } from "../../api";

export function useCourses(){
const {isLoading, data: courses, error} = useQuery({
     queryKey: ['courses'],
    queryFn: fetchPostsContent
  })
  return {isLoading, courses, error}
}