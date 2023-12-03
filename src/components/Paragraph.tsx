import { PropsWithChildren } from "react";

export default function Paragraph({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4">
      <p className="text-center text-xl !leading-relaxed sm:text-2xl">
        {children}
      </p>
    </div>
  );
}
