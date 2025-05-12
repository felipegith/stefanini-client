
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { UserPen } from 'lucide-react';
import InputUpdate from "./inputs";

export default function Update({id} : {id: string}){
    return(
        <Dialog>
            <DialogTrigger asChild className="w-1/2 cursor-pointer">
                <Button variant="outline"><UserPen size={14}/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1025px] ">
                <DialogHeader>
                    <DialogTitle className="text-sm">Atualizar informações</DialogTitle>
                    <DialogDescription className="text-xs">
                        Faça a atualização de algumas das informações usadas no seu cadastro
                    </DialogDescription>
                </DialogHeader>
                <InputUpdate id={id}/>
            </DialogContent>
    </Dialog>
    )
}