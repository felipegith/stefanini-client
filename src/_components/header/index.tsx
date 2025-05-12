import Create from "@/clients/create";
import Logo from "../../assets/stefanini.png"
import { UsersRound, LogOut } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Header(){
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate("/signin")
    }
    return(
        <header className="flex bg-[#242423] border-b border-b-gray-500 py-3 ">
            <div className="flex  items-center w-auto gap-10">
                <div className="border-r-2 pr-2 border-gray-500">
                    <img src={Logo} alt="Logo da aplicação" className="w-28"/>
                </div>

                <div className="flex items-center gap-3 max-w-36 ">
                    <UsersRound color="#FFF" size={14} />
                    <Create />              
                </div>

                <div className="flex items-center gap-3 max-w-36">
                    <LogOut color="#FFF" size={14} />
                     <Button onClick={handleLogout} variant="link" >
                        <Label className="text-xs font-semibold cursor-pointer text-white">Deslogar</Label>
                    </Button>       
                </div>
            </div>
        </header>
    )
}