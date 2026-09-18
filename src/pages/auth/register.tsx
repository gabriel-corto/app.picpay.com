import { createUser } from "@/api/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { registerSchema, type RegisterForm } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import { ArrowRight02Icon, Loading03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "react-toastify";

export function RegisterPage() {
  const { mutateAsync: registerService, isPending } = useMutation({
    mutationFn: createUser,
  });

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const handleCreateUser = async (data: RegisterForm) => {
    try {
      await registerService({
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        password: data.password,
        type: data.type,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Ocorreu um erro!");
    }
  };

  return (
    <div className="max-w-md space-y-6">
      <title>PicPay | Criar conta</title>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-zinc-700">Criar conta PicPay</h1>

        <p className="text-zinc-500 font-light">
          Para a criação de conta PicPay deverá preencher os campos abaixo
        </p>
      </div>

      <form onSubmit={handleSubmit(handleCreateUser)} className="space-y-5">
        <div className="space-y-2">
          <Label className="text-zinc-700">
            Tipo de conta <span className="text-red-500">*</span>{" "}
          </Label>

          <Controller
            control={control}
            name="type"
            defaultValue="COMMON"
            render={({ field: { onChange } }) => (
              <Select onValueChange={onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o tipo de conta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem key="SHOPKEEPER" value="SHOPKEEPER">
                      Comerciante
                    </SelectItem>

                    <SelectItem key="COMMON" value="COMMON">
                      Pessoal
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-zinc-700">
            Nome Completo <span className="text-red-500">*</span>{" "}
          </Label>
          <Input
            type="text"
            placeholder="Ex: João da Silva"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-xs text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-zinc-700">
            Seu CPF <span className="text-red-500">*</span>{" "}
          </Label>
          <Input
            type="text"
            placeholder="000.000.000-00"
            {...register("cpf")}
          />
          {errors.cpf && (
            <span className="text-xs text-red-500">{errors.cpf.message}</span>
          )}
        </div>

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
              <span>Criando</span>
            </>
          ) : (
            <>
              <HugeiconsIcon icon={ArrowRight02Icon} size={50} />
              <span>Criar conta</span>
            </>
          )}
        </Button>
      </form>

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
