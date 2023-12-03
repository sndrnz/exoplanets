import { PropsWithChildren } from "react";

export default function CardGrid({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto flex max-w-4xl grid-cols-2 flex-col gap-8 sm:grid">
      {children}
    </div>
  );
}
