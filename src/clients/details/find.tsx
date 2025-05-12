import { Label } from "@/components/ui/label";
import type { Client } from "@/interfaces";
import { findClientAsync } from "@/requests/client/clients-request";
import { useState, useEffect } from "react";
import Remove from "../remove/remove";
import Update from "../update/update";


export default function Find({id} : {id: string}){
    const [client, setClient] = useState<Client>();

    const handleClient = async (id : string) => {
        const result = await findClientAsync(id)
        setClient(result)
        console.log(result)
    }

    useEffect(() => {
        handleClient(id)
    },[id])
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <Label className="text-xs font-bold">Email:</Label>
                {client?.email == "" || client?.email == ""? <Label>A informação sobre email não foi preenchida no cadastro</Label> : <Label>{client?.email}</Label>}
            </div>

            <div className="flex flex-col gap-1">
                <Label className="text-xs font-bold">Naturalidade:</Label>
                {client?.naturality == null || client?.naturality == "" ? <Label>A informação sobre naturalidade não foi preenchida no cadastro</Label> : <Label>{client?.naturality}</Label>}
            </div>

            <div className="flex flex-col gap-1">
                <Label className="text-xs font-bold">Nacionalidade:</Label>
                {client?.nacionality == null || client?.nacionality == "" ? <Label>A informação sobre nacionalidade não foi preenchida no cadastro</Label> : <Label>{client?.nacionality}</Label>}
            </div>

            <div className="flex flex-col gap-1">
                <Label className="text-xs font-bold">Endereço:</Label>
                {client?.address == null || client?.address == "" ? <Label>A informação sobre endereço não foi preenchida no cadastro</Label> : <Label>{client?.address}</Label>}
            </div>

            <div className="flex flex-col gap-1">
                <Label className="text-xs font-bold">Genero:</Label>
                {client?.gender == null || client?.gender == ""? <Label>A informação sobre genero não foi preenchida no cadastro</Label> : <Label>{client?.gender}</Label>}
            </div>
            <div className="w-full flex items-center justify-center gap-2">
                <Remove id={id} />
                <Update id={id} />
            </div>
            
        </div>
    )
}