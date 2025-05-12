
import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, HistoryIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Client } from "@/interfaces"
import { formatDate } from "@/helpers"
import Remove from "@/clients/remove/remove"
import Details from "@/clients/details/details"


export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-[#a5978b] text-xs font-semibold ">Nome</div>,
    cell: ({row}) => {
      return <div className=" text-white text-xs font-medium">{row.getValue("name")}</div>
    }
  },
  // {
  //   accessorKey: "email",
  //   header: ({ column }) => {
  //     return (
  //         <Button
  //         variant="ghost"
  //         className="text-[#a5978b] text-xs font-semibold w-14 "
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Email
  //         <ArrowUpDown className="" />
  //       </Button>
  //     )
  //   },
  //   cell: ({row}) => {
  //     const value = row.getValue("email") as string;
  //     return <div className=" text-white text-xs font-medium">{value ?? "Emaiil não cadastrado"}</div>
  //   }
  // },
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
    accessorKey: "id",
    header: () => <div className="text-[#a5978b] text-xs font-semibold cursor-pointer">Mais detalhes</div>,
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
