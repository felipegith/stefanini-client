import { Trash } from 'lucide-react';

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogAction
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"

import { toast } from "sonner"

import { removeClientAsync } from '@/requests/client/clients-request';

export default function Remove({id} : {id: string}){

    const handleRemoveMember = async () => {
      try {
        await removeClientAsync(id);
        toast("Cliente removido")
      } catch (error) {
        toast(`Não foi possivel remover o cliente. ${error}`, {
                  style: {
                    backgroundColor: "#f87171", 
                    color: "#ffff",
                    fontWeight: "bold"
                  },
        });
      }finally{
        setTimeout(() => window.location.reload(), 3000)
      }
    };
    return(
          <AlertDialog>
            <AlertDialogTrigger asChild className='w-1/2 p-5 cursor-pointer'>
              <Button variant="destructive"><Trash size={14}/></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Deseja remover esse cliente?</AlertDialogTitle>
                <AlertDialogDescription>
                  Essa ação não podera ser desfeita. Sendo assim em caso de exclusao
                  o cliente não poderá ser restaurado
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction asChild >
                <Button  onClick={handleRemoveMember} variant="destructive">Confirmar</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
    )
}