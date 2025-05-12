import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatDate } from "@/helpers";
import type { ClientUpdate } from "@/interfaces";
import { findClientAsync, updateClientAsync } from "@/requests/client/clients-request";
import { useState, useEffect } from "react";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function InputUpdate({id} : {id: string}){
    const [name, setName] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const [address, setAddress]  = useState<string>("")
    const [email, setEmail]  = useState<string>("")
    const [naturality, setNaturality]  = useState<string>("")
    const [nacionality, setNacionality]  = useState<string>("")
    const [gender, setGender]  = useState<string>("")
    const [birthDate, setBirthDate] = useState<Date>();

        const handleClient = async (id : string) => {
            const result = await findClientAsync(id)
            setCpf(result.cpf)
            setBirthDate(result.birthDate);
            setName(result.name);
            setEmail(result.email);
            setNaturality(result.naturality);
            setNacionality(result.nacionality);
            setGender(result.gender);
            setAddress(result.address);
        }
    
        useEffect(() => {
            handleClient(id)
        },[id])

        const handleUpdateClient = async () => {
        const data: ClientUpdate = {
          id,
          name,
          email,
          naturality,
          nacionality,
          address,
          gender,
        };
    
        try {
          await updateClientAsync(data);
          toast("Cliente atualizado com sucesso")
          setTimeout(() => window.location.reload(), 2000)
          return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            const type = error.code
            switch (type) {
                case "Client.EmailExists":
                    toast("O email informado já esta sendo usado", {
                        style: {
                            backgroundColor: "#f87171", 
                            color: "#ffff",
                            fontWeight: "bold"
                        },
                     })
                    break;
            
                default:
                    toast(`Erro ao atualizar os dados do cliente ${error}`, {
                    style: {
                        backgroundColor: "#f87171", 
                        color: "#ffff",
                        fontWeight: "bold"
                    },
                    });
                    break;
            }
        }
      };
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 cursor-not-allowed">
                <Label className="text-xs font-bold">CPF</Label>
                <Input value={cpf} disabled  />
            </div>

            <div className="flex flex-col gap-1 cursor-not-allowed">
                <Label className="text-xs font-bold">Data de nascimento</Label>
                <Input value={birthDate ? formatDate(new Date(birthDate)) : ""}disabled />
            </div>

            <div className="flex flex-col gap-1 ">
                <Label className="text-xs font-bold">Nome</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="flex flex-col gap-1 ">
                <Label className="text-xs font-bold">Email</Label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="flex flex-col gap-1 ">
                <Label className="text-xs font-bold">Nacionalidade</Label>
                <Input value={nacionality} onChange={(e) => setNacionality(e.target.value)}/>
            </div>

            <div className="flex flex-col gap-1 ">
                <Label className="text-xs font-bold">Naturalidade</Label>
                <Input value={naturality} onChange={(e) => setNaturality(e.target.value)}/>
            </div>

            <div className="flex flex-col gap-1 ">
                <Label className="text-xs font-bold">Endereço</Label>
                <Input value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>

             <div className="flex flex-col gap-1 ">
                <Label className="text-xs font-bold">Gênero</Label>
                <Select onValueChange={setGender} value={gender}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Masculino">Masculino</SelectItem>
                        <SelectItem value="Feminino">Feminino</SelectItem>
                    </SelectContent>
                </Select>   
            </div>
            <Button onClick={handleUpdateClient} className="cursor-pointer">Atualizar</Button>
        </div>
    )
}