import type { Client, ClientRequest, ClientUpdate } from "@/interfaces";
import api from "../../services/api"
import apiv2 from "@/services/v2/apiv2";

export async function createClientAsync(data : ClientRequest){
    try {
        const response = await api.post("client", data);
        return response.data; 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        throw error.response?.data || error; 
      }
}

export async function createClientV2Async(data : ClientRequest){
    try {
        const response = await apiv2.post("client", data);
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

export async function findClientsAsync(id: string | null): Promise<Client[]> {
  try {
    const response = await api.get(`client/get-all/${id}`);
    return response.data;
    console.log(response.data)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    
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
    const response = await api.get(`client/get-by-id/${id}`)
    console.log(response.data)
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error : any) {
    throw error.response?.data || error;
  }
}