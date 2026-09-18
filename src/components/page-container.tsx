import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function PageContainer(props: Props) {
  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-zinc-600 text-3xl font-bold">{props.title}</h1>
        <p className="text-zinc-500 font-light">{props.subtitle}</p>
      </div>

      {props.children}
    </div>
  );
}
