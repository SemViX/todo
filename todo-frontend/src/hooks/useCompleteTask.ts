import { ITaskBlockProps } from "@/types/taskBlock"
import { MAIN_URL } from "@/utils/urls"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useCompleteTask = (userEmail:string) => {
    const {data, isLoading, refetch} = useQuery({
        queryKey:['complete tasks'],
        queryFn: async () => {
            return (await axios.get<{data:ITaskBlockProps[]}>(`${MAIN_URL}tasks?filters[user][email][$eq]=${userEmail}&populate=*&filters[is_completed][$eq]=true&sort=deadline:asc`)).data
        },
    })

    return {data, isLoading, refetch}
}