import { login } from "@/api/auth";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import {
  ArrowRight02Icon,
  Key01Icon,
  Loading03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";

import { loginSchema, type LoginForm } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export function LoginPage() {
  const { mutateAsync: loginService, isPending } = useMutation({
    mutationFn: login,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: LoginForm) => {
    try {
      await loginService({
        email: data.email,
        password: data.password,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Ocorreu um erro!");
    }
  };

  return (
    <div className="max-w-md space-y-6">
      <title>PicPay | Login</title>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-zinc-700">
          Informe os dados da sua conta PicPay
        </h1>

        <p className="text-zinc-500 font-light">
          Para seguir com o pagamento, precisa informar seu e-mail e sua senha
          PicPay
        </p>
      </div>

      <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
        <div className="space-y-2">
          <Label className="text-zinc-700">
            E-mail <span className="text-red-500">*</span>{" "}
          </Label>
          <Input
            type="email"
            placeholder="seu@email.com"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-zinc-700">
            Palavra Passe <span className="text-red-500">*</span>{" "}
          </Label>
          <Input
            type="password"
            placeholder="**********"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex text-picpay items-center gap-x-1">
          <HugeiconsIcon icon={Key01Icon} size={18} />
          <Link className=" font-semibold text-sm" to="#">
            Recuperar Credencias
          </Link>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="font-semibold w-full flex items-center"
        >
          {isPending ? (
            <>
              <HugeiconsIcon
                icon={Loading03Icon}
                className="animate-spin"
                size={50}
              />
              <span>Acessando</span>
            </>
          ) : (
            <>
              <HugeiconsIcon icon={ArrowRight02Icon} size={50} />
              <span>Acessar</span>
            </>
          )}
        </Button>
      </form>

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
