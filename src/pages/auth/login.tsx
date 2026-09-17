import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight02Icon, Key01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router";

export function LoginPage() {
  return (
    <div className="max-w-md space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-zinc-700">
          Informe os dados da sua conta PicPay
        </h1>

        <p className="text-zinc-500 font-light">
          Para seguir com o pagamento, precisa informar seu e-mail e sua senha
          PicPay
        </p>
      </div>

      <div className="space-y-2">
        <Label className="text-zinc-700">
          E-mail <span className="text-red-500">*</span>{" "}
        </Label>
        <Input type="email" placeholder="seu@email.com" />
      </div>

      <div className="space-y-2">
        <Label className="text-zinc-700">
          Palavra Passe <span className="text-red-500">*</span>{" "}
        </Label>
        <Input type="password" placeholder="**********" />
      </div>

      <div className="flex text-picpay items-center gap-x-1">
        <HugeiconsIcon icon={Key01Icon} size={18} />
        <Link className=" font-semibold text-sm" to="#">
          Recuperar Credencias
        </Link>
      </div>

      <div>
        <Button className="font-semibold w-full flex items-center">
          <HugeiconsIcon icon={ArrowRight02Icon} size={50} />
          <span>Acessar</span>
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-zinc-500 font-light">
          Não possui uma conta?{" "}
          <Link to="/register" className="font-semibold text-picpay">
            Crie uma
          </Link>
        </p>
      </div>
    </div>
  );
}
