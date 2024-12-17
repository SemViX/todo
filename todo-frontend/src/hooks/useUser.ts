import { IUserInput } from "@/types/userInput"
import { ROUTES } from "@/utils/routes"
import { MAIN_URL } from "@/utils/urls"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import {IError} from '@/types/error'

export const useCreateUser = () => {
    const {push} = useRouter()
    const {mutate} = useMutation({
        mutationKey: ['create user'],
        mutationFn: async (data:IUserInput) => {
            return await axios.post(`${MAIN_URL}auth/local/register`, data)
        },
        onError(error:IError, variables, context) {
            alert(error.response.data.error.message)
        }
    })

    return mutate
}