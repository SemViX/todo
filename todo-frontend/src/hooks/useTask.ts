import { queryClient } from "@/components/provider"
import { HEADERS } from "@/utils/constants"
import { ROUTES } from "@/utils/routes"
import { IInputTask, ITasks } from "@/utils/types"
import { MAIN_URL } from "@/utils/urls"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"

export const useTask = (userEmail:string) => {
    const {data, refetch, isLoading} = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            return (await axios.get<ITasks>(`${MAIN_URL}tasks?filters[user][email][$eq]=${userEmail}&populate=*&filters[is_completed][$eq]=false&sort=deadline:asc`)).data
        }
    })
    return {data, isLoading, refetch}
}

export const useChangeTaskState = () => {
    const {mutate} = useMutation({
        mutationKey: ['change talk state'],
        mutationFn: async (data:{documentId:string, is_completed:boolean}) => {
            const payload = {
                data: {
                    is_completed: data.is_completed
                }
            }
            return await axios.put(`${MAIN_URL}tasks/${data.documentId}`, payload, {headers:HEADERS})
        },
        onSuccess(data, variables, context) {
            queryClient.invalidateQueries({queryKey: ['tasks']})
            queryClient.invalidateQueries({queryKey: ['complete tasks']})

        },
    })

    return {changeState:mutate}
}

export const useAddTask = () => {
    const {push} = useRouter()
    const {mutate} = useMutation({
        mutationKey: ['add task'],
        mutationFn: async (data:any) => {
            console.log(data)
            return await axios.post(`${MAIN_URL}tasks?populate=user`, {data}, {headers:HEADERS})
        },
        onSuccess() {
            queryClient.invalidateQueries({queryKey: ['tasks']})
            push(ROUTES.TASKS)
        },
    })

    return mutate
}

export const useDeleteTask = (id:string) => {
    const {mutate} = useMutation({
        mutationKey: ['delete task'],
        mutationFn: async () => {
            return await axios.delete(`${MAIN_URL}tasks/${id}`)
        },
        onSuccess(){
            queryClient.invalidateQueries({queryKey: ['tasks']})
        }
    })

    return mutate
}