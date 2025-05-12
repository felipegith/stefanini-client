import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"
import Inputs from "./inputs"


export default function Create(){
    return(
        <Dialog>
          <DialogTrigger asChild>
            <Label className="text-xs font-semibold cursor-pointer text-white">Cadastrar</Label>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="text-sm">Cadastrar novos clientes</DialogTitle>
              <DialogDescription className="text-xs">
                Faça o cadastro de novos clientes
              </DialogDescription>
              <Inputs />
            </DialogHeader>
            </DialogContent>
        </Dialog>    
      )
}