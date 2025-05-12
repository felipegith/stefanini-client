import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type { ClientRequest } from "@/interfaces"
import { createClientV2Async } from "@/requests/client/clients-request"
import { toast } from "sonner"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { formatCpf, formatDateInput } from "@/helpers"


export default function InputsV2(){
    const [name, setName] = useState<string>("")
    const [cpf, setCpf]  = useState<string>("")
    const [address, setAddress]  = useState<string>("")
    const [birthDate, setBirthDate] = useState<string>("")
    const [email, setEmail]  = useState<string>("")
    const [naturality, setNaturality]  = useState<string>("")
    const [nacionality, setNacionality]  = useState<string>("")
    const [gender, setGender]  = useState<string>("")

    
    const handleCreateClient = async () => { 
      if (!/^\d{2}\/\d{2}\/\d{4}$/.test(birthDate)) {
        toast("Data de nascimento inválida. Use o formato DD/MM/AAAA.");
        return;
      }

      const [day, month, year] = birthDate.split('/');
      const parsedDate = new Date(`${year}-${month}-${day}`);

      if (isNaN(parsedDate.getTime())) {
        toast("Data de nascimento inválida.");
        return;
      }
        const userId = localStorage.getItem("userId")
        const data: ClientRequest = {
          name,
          cpf,
          address,
          birthDate : parsedDate,
          nacionality,
          naturality,
          gender,
          email,
          userId
        };
    
        try {
          await createClientV2Async(data);
          toast("Cadastrado realizado")
          setTimeout(() => window.location.reload(), 2000)
          return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error)
          const status = error.code
          switch (status) {
            case "Model.Cpf":
              toast("O campo cpf é obrigatório.")
              break;
            case "Model.Name":
              toast("O campo nome é obrigatório")
              break;
            case "Model.Address":
              toast("O campo endereço é obrigatório")
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
              CPF
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
          <Input type="text" id="birthday" placeholder="DD/MM/AAAA" value={birthDate} onChange={(e) => {
                            const formatted = formatDateInput(e.target.value);
                            setBirthDate(formatted);
                          }} className="w-full" />
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
                  Gênero
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