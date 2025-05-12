import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"
import InputsV2 from "./inputs"



export default function CreateV2(){
    return(
        <Dialog>
          <DialogTrigger asChild>
            <Label className="text-xs font-semibold cursor-pointer text-white">Cadastrar (beta)</Label>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="text-sm">Cadastrar novos clientes</DialogTitle>
              <DialogDescription className="text-xs">
                Faça o cadastro de novos clientes
              </DialogDescription>
                <InputsV2 />
            </DialogHeader>
            </DialogContent>
        </Dialog>    
      )
}