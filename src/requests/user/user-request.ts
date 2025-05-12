import type { UserRequest } from "@/interfaces";
import api from "../../services/api"

export async function signupAsync(data : UserRequest){
    try {
        const response = await api.post("user/sign-up", data);
        return response.data; 
      } catch (error: any) {
        throw error.response?.data || error; 
      }
}

export async function signinAsync(data : UserRequest){
    try {
        const response = await api.post("user/sign-in", data);
        console.log(response.data)
        return response.data; 
      } catch (error: any) {
        throw error.response?.data || error; 
      }
}