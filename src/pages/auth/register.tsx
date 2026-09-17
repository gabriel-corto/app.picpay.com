import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router";

export function RegisterPage() {
  return (
    <div className="max-w-md space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-zinc-700">Criar conta PicPay</h1>

        <p className="text-zinc-500 font-light">
          Para a criação de conta PicPay deverá preencher os campos abaixo
        </p>
      </div>

      <div className="space-y-2">
        <Label className="text-zinc-700">
          Nome Completo <span className="text-red-500">*</span>{" "}
        </Label>
        <Input type="text" placeholder="Ex: João da Silva" />
      </div>

      <div className="space-y-2">
        <Label className="text-zinc-700">
          Seu CPF <span className="text-red-500">*</span>{" "}
        </Label>
        <Input type="text" placeholder="000.000.000-00" />
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

      <div>
        <Button className="font-semibold w-full flex items-center">
          <HugeiconsIcon icon={ArrowRight02Icon} size={50} />
          <span>Criar Conta</span>
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-zinc-500 font-light">
          Já possui uma conta?{" "}
          <Link className="font-semibold text-picpay" to="/login">
            Acesse
          </Link>
        </p>
      </div>
    </div>
  );
}
