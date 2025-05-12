import type { Client, ClientRequest, ClientUpdate } from "@/interfaces";
import api from "../../services/api"

export async function createClientAsync(data : ClientRequest){
    try {
        const response = await api.post("client", data);
        return response.data; 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        throw error.response?.data || error; 
      }
}

export async function updateClientAsync(data : ClientUpdate){
    try {
        const response = await api.patch("client", data);
        return response.data; 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        throw error.response?.data || error; 
      }
}

export async function findClientsAsync(): Promise<Client[]> {
  try {
    const response = await api.get("client");
    return response.data;
  } catch (error) {
    //  
    console.log(error)
    return [];
  }
}

export async function removeClientAsync(id: string){
  try {
    const response = await api.delete(`client/${id}`)
    return response.data;
  } catch (error ) {
    console.error("Erro ao buscar os dados:", error);
    return
  }
}

export async function findClientAsync(id: string) : Promise<Client>{
  try {
    const response = await api.get(`client/${id}`)
    console.log(response.data)
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error : any) {
    throw error.response?.data || error;
  }
}