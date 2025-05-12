
import type { ColumnDef } from "@tanstack/react-table"

import type { Client } from "@/interfaces"
import { formatDate } from "@/helpers"
import Details from "@/clients/details/details"


export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-[#a5978b] text-xs font-semibold ">Nome</div>,
    cell: ({row}) => {
      return <div className=" text-white text-xs font-medium">{row.getValue("name")}</div>
    }
  },
 
  {
    accessorKey: "cpf",
    header: () => <div className="text-[#a5978b] text-xs font-semibold">Cpf</div>,
    cell: ({row}) => {
      return <div className="text-white text-xs font-medium">{row.getValue("cpf")}</div>
    }
  },

  {
    accessorKey: "birthDate",
    header: () => (
      <div className="text-[#a5978b] text-xs font-semibold">
        Data de nascimento
      </div>
    ),
    cell: ({ row }) => {
      const value = row.getValue("birthDate");
      
      const parsedDate = new Date(value as string);
      const isValid = !isNaN(parsedDate.getTime());

      return (
        <div className="text-white text-xs font-medium">
          {isValid ? formatDate(parsedDate) : (
            <span className="text-red-400 italic">Data inválida</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-[#a5978b] text-xs font-semibold">Conta criada em</div>,
    cell: ({row}) => {
        const createdAt = row.getValue("createdAt") as string
        const parsedDate = new Date(createdAt as string);
        const isValid = !isNaN(parsedDate.getTime());
          return (             
              <div className="text-white text-xs font-medium"> 
                     {isValid ? formatDate(parsedDate) : (
                      <span className="text-red-400 italic">Data inválida</span>
                     )}
                </div>
              )
    }
  },

  {
    accessorKey: "updatedAt",
    header: () => <div className="text-[#a5978b] text-xs font-semibold">Conta atualizada em</div>,
    cell: ({row}) => {
        const updatedAt = row.getValue("updatedAt") as string | null
        console.log(updatedAt)
          return (             
              <div className="text-white text-xs font-medium">
                {updatedAt ? (
                  formatDate(new Date(updatedAt))
                ) : (
                  <span className="text-red-400 italic">Não há atualizações</span>
                )}
              </div>
              )
    }
  },
  {
    accessorKey: "id",
    header: () => <div className="text-[#a5978b] text-xs font-semibold">Mais detalhes</div>,
    cell: ({row}) => {
        const id = row.getValue("id") as string
      return (             
              <div className="gap-3 max-w-36"> 
                    <Details id={id}/>
                </div>
      )
    }
  },

]
