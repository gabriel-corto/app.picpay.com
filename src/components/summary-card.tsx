import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

interface Props {
  title: string;
  icon: IconSvgElement;
  value: string | number;
  theme?: "error" | "success" | "neutral";
}

export function SummaryCard(props: Props) {
  return (
    <div className="p-4 bg-white border border-zinc-200 w-full rounded-md">
      <div className="flex items-center gap-x-2">
        <div className="rounded-md bg-zinc-100 w-10 h-10 flex items-center justify-center text-zinc-600 font-bold">
          <HugeiconsIcon icon={props.icon} />
        </div>

        <h2 className="text-zinc-600 font-semibold">{props.title}</h2>
      </div>

      <div className="mt-3 text-2xl font-semibold text-zinc-600">
        {props.value}
      </div>
    </div>
  );
}
