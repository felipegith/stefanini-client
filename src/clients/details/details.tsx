
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Ellipsis } from 'lucide-react';
import Find from "./find";

export default function Details({id} : {id: string}){
    return(
          <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><Ellipsis size={14}/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1025px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-sm">Detalhes do usuario</DialogTitle>
                    <DialogDescription className="text-xs">
                        Veja os dados completo do usuario
                    </DialogDescription>
                </DialogHeader>
                <Find id={id} />
            </DialogContent>
    </Dialog>
    )
}