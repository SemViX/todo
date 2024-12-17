import { ROUTES } from "@/utils/routes"
import { IError, IUserInput } from "@/utils/types"
import { MAIN_URL } from "@/utils/urls"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"

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