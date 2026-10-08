import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

import { p2p } from "@/api/wallet";
import { getApiErrorMessage } from "@/utils/api-error";
import { ArrowRight02Icon, Loading03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CurrencyInput from "react-currency-input-field";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function WalletP2PModal(props: Props) {
  const queryClient = useQueryClient();
  const { mutateAsync: transferService, isPending } = useMutation({
    mutationFn: p2p,
    onSuccess: () => {
      toast.success("Transferência realizada com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      queryClient.invalidateQueries({
        queryKey: ["wallet-balance"],
      });
      props.setOpen(false);
    },
    onError(error) {
      toast.error(getApiErrorMessage(error));
    },
  });

  const [amount, setAmount] = useState(0);
  const [payee, setPayee] = useState("");

  const handleDeposit = async () => {
    if (!amount) {
      toast.error("Introduza o valor do depósito");
      return;
    }

    if (!payee) {
      toast.error("Introduza o e-mail do destinatário");
      return;
    }

    await transferService({
      payee,
      amount,
    });
  };

  return (
    <Dialog open={props.open} onOpenChange={props.setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>PicPay Simplificado</DialogTitle>
          <DialogDescription>Transferência P2P</DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-y-3">
          <Label className="text-xs">
            Valor <span className="text-red-500">*</span>{" "}
          </Label>

          <CurrencyInput
            id="amount"
            name="amount"
            placeholder="AKZ 0,00"
            decimalsLimit={2}
            onValueChange={(value) => setAmount(Number(value))}
            className="h-10 pl-4 border border-zinc-200 w-full"
          />

          <Label className="text-xs">
            Destinatário <span className="text-red-500">*</span>{" "}
          </Label>

          <Input
            type="text"
            id="payee"
            name="payee"
            placeholder="destinatario@email.com"
            className="h-10 pl-4 border border-zinc-200 w-full"
            value={payee}
            onChange={(e) => setPayee(e.target.value)}
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
                <span>Finalizar</span>
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
