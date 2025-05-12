import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { MailIcon, LockIcon } from "lucide-react";
import { useState } from "react";
import { signupAsync } from "@/requests/user/user-request";
import type { UserRequest } from "@/interfaces";
import { toast } from "sonner";

export default function Signup() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  
  const navigate = useNavigate()
  const handleSignup = async () => {
    const data : UserRequest= {
      email,
      password
    }
     try {
          await signupAsync(data);
          toast("Conta criada com sucesso")
          navigate("/signin")
          return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          const type = error.code
          switch (type) {
            case "Email":
              toast("Informe um endereço de e-mail válido", {
                  style: {
                    backgroundColor: "#f87171", 
                    color: "#ffff",
                    fontWeight: "bold"
                  },
                });
              break;
            case "Password":
            toast("A senha deve conter no mínimo 8 caracteres", {
                  style: {
                    backgroundColor: "#f87171", 
                    color: "#ffff",
                    fontWeight: "bold"
                  },
                });
             
              break;
            
            case "Email already exists":
              toast("Este e-mail já esta sendo usado")
              break;
            default:
              break;
          }
          
        }
  }
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-secondary">
      <div className="p-6">
      </div>
      <div className="h-auto w-1/3 rounded-sm border bg-white pb-8">
        <header className="mt-14 flex flex-col items-center">
          <h2 className="text-xl font-bold">Crie sua conta</h2>
          <p className="text-xs">
            Informe seu usuário e senha para criar uma conta
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
            onClick={handleSignup}
          >
            <span>Login</span>
          </Button>
        </div>
      </div>
      <footer className="mt-6 flex items-center gap-1">
        <p className="text-xs font-medium">Ja tem conta?</p>
        <a href="signin" className="text-xs font-medium">
          Clique aqui
        </a>
      </footer>
    </div>
  );
}
