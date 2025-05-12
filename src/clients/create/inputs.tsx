import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type { ClientRequest } from "@/interfaces"
import { createClientAsync } from "@/requests/client/clients-request"
import { toast } from "sonner"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { formatCpf } from "@/helpers"


export default function Inputs(){
    const [name, setName] = useState<string>("")
    const [cpf, setCpf]  = useState<string>("")
    const [address, setAddress]  = useState<string>("")
    const [birthDate, setBirthDate] = useState<Date>(new Date())
    const [email, setEmail]  = useState<string>("")
    const [naturality, setNaturality]  = useState<string>("")
    const [nacionality, setNacionality]  = useState<string>("")
    const [gender, setGender]  = useState<string>("")

    const formatDateToInput = (date: Date): string => {
        return date.toISOString().split("T")[0]
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = new Date(e.target.value)
        setBirthDate(date)
    }
    const handleCreateClient = async () => {
        const data: ClientRequest = {
          name,
          cpf,
          address,
          birthDate,
          nacionality,
          naturality,
          gender,
          email,
        };
    
        try {
          await createClientAsync(data);
          toast("Cadastrado realizado")
          setTimeout(() => window.location.reload(), 2000)
          return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          const status = error.status
          switch (status) {
            case 400:
              toast("Os campos NOME, CPF e DATA DE NASCIMENTO são obrigatórios.")
              break;
              case 401:
              toast("Você precisa estar autenticado para realizar essa ação no sistema.")
              break;
            default:
              toast("Um erro inesperado aconteceu")
              break;
          }
        }
      };
    return(
        <div className="flex flex-col gap-3 ">
            <div className="flex items-center gap-4" >
          <header className="w-1/6">
          <div className="min-w-44">
            <Label htmlFor="username" className="text-xs font-bold">
              Nome
            </Label>
          </div>
          </header>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full" />
        </div>

        <div className="flex items-center gap-4" >
          <header className="w-1/6">
          <div className="min-w-44">
            <Label htmlFor="username" className="text-xs font-bold">
              Cpf
            </Label>
          </div>
          </header>
          <Input id="cpf" value={cpf} onChange={(e) => setCpf(formatCpf(e.target.value))} className="w-full" />
        </div>

        <div className="flex items-center gap-4" >
          <header className="w-1/6">
          <div className="min-w-44">
            <Label htmlFor="username" className="text-xs font-bold">
              Email
            </Label>
          </div>
          </header>
          <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
        </div>

        <div className="flex items-center gap-4" >
          <header className="w-1/6">
          <div className="min-w-44">
            <Label htmlFor="username" className="text-xs font-bold">
              Nascimento
            </Label>
          </div>
          </header>
          <Input type="date" id="birthday" value={formatDateToInput(birthDate)} onChange={handleDateChange} className="w-full" />
        </div>

        <div className="flex items-center gap-4" >
          <header className="w-1/6">
          <div className="min-w-44">
            <Label htmlFor="username" className="text-xs font-bold">
              Naturalidade
            </Label>
          </div>
          </header>
          <Input id="naturality" value={naturality} onChange={(e) => setNaturality(e.target.value)} className="w-full" />
        </div>
        <div className="flex items-center gap-4" >
          <header className="w-1/6">
          <div className="min-w-44">
            <Label htmlFor="username" className="text-xs font-bold">
              Nacionalidade
            </Label>
          </div>
          </header>
          <Input id="nacionality" value={nacionality} onChange={(e) => setNacionality(e.target.value)} className="w-full" />
        </div>
        <div className="flex items-center gap-4" >
          <header className="w-1/6">
            <div className="min-w-44">
              <Label htmlFor="username" className="text-xs font-bold">
                  Genero
                </Label>
            </div>
          </header>
          
         <Select onValueChange={setGender} value={gender}>
          <SelectTrigger className="w-full">
            <SelectValue  />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Masculino">Masculino</SelectItem>
            <SelectItem value="Feminino">Feminino</SelectItem>
          </SelectContent>
        </Select>    
        </div>
        <div className="flex items-center gap-4" >
          <header className="w-1/6">
            <div className="min-w-44">
              <Label htmlFor="username" className="text-xs font-bold">
              Endereço
            </Label>
            </div>
          </header>
          <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full" />
        </div>
          <Button onClick={handleCreateClient} className="w-full cursor-pointer" type="submit">Cadastrar</Button>
        </div>
    )
}