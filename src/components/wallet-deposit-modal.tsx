import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

import { deposit } from "@/api/wallet";
import { ArrowRight02Icon, Loading03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CurrencyInput from "react-currency-input-field";
import { toast } from "react-toastify";
import { Button } from "./ui/button";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function WalletDepositDialog(props: Props) {
  const queryClient = useQueryClient();
  const { mutateAsync: depositService, isPending } = useMutation({
    mutationFn: deposit,
    onSuccess: () => {
      toast.success("Depósito realizado com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["wallet-balance"],
      });
      props.setOpen(false);
    },
    onError(error) {
      console.log(error);
      toast.error(error.message);
    },
  });

  const [amount, setAmount] = useState(0);

  const handleDeposit = async () => {
    await depositService({
      value: amount,
    });
  };

  return (
    <Dialog open={props.open} onOpenChange={props.setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>PicPay Simplificado</DialogTitle>
          <DialogDescription>Depósito</DialogDescription>
        </DialogHeader>

        <form>
          <CurrencyInput
            id="amount"
            name="amount"
            placeholder="$ 0,00"
            decimalsLimit={2}
            onValueChange={(value) => setAmount(Number(value))}
            className="h-10 pl-4 border border-zinc-200 w-full"
          />
        </form>

        <DialogFooter>
          <Button
            type="button"
            variant="secondary"
            onClick={() => props.setOpen(false)}
          >
            Cancelar
          </Button>

          <Button onClick={() => handleDeposit()}>
            {isPending ? (
              <>
                <HugeiconsIcon className="animate-spin" icon={Loading03Icon} />
                <span>Processando</span>
              </>
            ) : (
              <>
                <HugeiconsIcon icon={ArrowRight02Icon} />
                <span>Depositar</span>
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
