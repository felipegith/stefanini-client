import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button";
import { MailIcon, LockIcon } from "lucide-react";
import { useState } from "react";
import type { UserRequest } from "@/interfaces";
import { signinAsync } from "@/requests/user/user-request";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const navigate = useNavigate()
  const handleSignin = async () => {
    const data : UserRequest= {
      email,
      password
    }
     try {
          const result = await signinAsync(data);
          if(result.token === "" || result.id === ""){
            toast("Erro ao realizar a autenticação.");
            return;
          }
          localStorage.setItem("token", result.token)
          localStorage.setItem("userId", result.id);
            toast("Usuário autenticado com sucesso")
            navigate("/home")
            return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          const type = error.code
          switch (type) {
            case "UserNotFound":
              toast("Email ou senha inválidos")
              break;
            default:
              break;
          }
          
        }
  }
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center ">
      <div className="p-6">
      </div>
      <div className="h-auto w-1/3 rounded-sm border bg-white pb-8">
        <header className="mt-14 flex flex-col items-center">
          <h2 className="text-xl font-bold">Bem vindo de volta</h2>
          <p className="text-xs">
            Entre com as suas credenciais para acessar sua conta
          </p>
        </header>

        <div className="mt-14 flex flex-col items-center gap-6">
          <div className="flex w-1/2 flex-1 items-center rounded-sm border px-2 ring-[#3F486B] focus-within:ring-2">
            <MailIcon size={14} color="#3F486B" />
            <Input
              className="border-transparent text-[10px] outline-none placeholder:text-[10px] placeholder:font-semibold focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Entre com seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex w-1/2 flex-1 items-center rounded-sm border px-2 ring-[#3F486B] focus-within:ring-2">
            <LockIcon size={14} color="#3F486B" />
            <Input
              className="border-transparent text-[10px] outline-none placeholder:text-[10px] placeholder:font-semibold focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Entre com a sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            className="w-1/2  text-xs font-bold cursor-pointer"
            type="submit"
            onClick={handleSignin}
          >
            <span>Login</span>
          </Button>
        </div>
      </div>
      <footer className="mt-6 flex items-center gap-1">
        <p className="text-xs font-medium">Não possui conta?</p>
        <a href="signup" className="text-xs font-medium">
          Clique aqui
        </a>
      </footer>
    </div>
  );
}
