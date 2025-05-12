
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { useEffect, useState } from "react"

import type { Client } from "@/interfaces"
import { findClientsAsync } from "@/requests/client/clients-request"
import Header from "@/_components/header"

export default function Home() {
    const [data, setData] = useState<Client[]>([])
    const userId = localStorage.getItem("userId")
     
    useEffect(() => {
        const fetchData = async () => {
        const clients = await findClientsAsync(userId); 
        setData(clients);
        
        };
    
        fetchData();
      }, []);
   
    return (
    <div className="p-6 h-screen bg-[#242423] min-w-max">
      <Header />
      <div className="py-6 flex flex-col gap-4">
        <h1 className="text-white font-bold text-base">Clientes</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
