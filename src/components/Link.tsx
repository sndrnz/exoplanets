import { cn } from "@nextui-org/react";
import { ExternalLinkIcon } from "lucide-react";
import NextLink, { LinkProps } from "next/link";
import { HTMLAttributeAnchorTarget, PropsWithChildren } from "react";

type Props = PropsWithChildren<
  LinkProps & {
    className?: string;
    target?: HTMLAttributeAnchorTarget;
  }
>;

export default function Link({ children, target, className, ...props }: Props) {
  return (
    <NextLink
      className={cn(
        "flex items-center gap-x-1 text-white hover:underline hover:opacity-80",
        className,
      )}
      target={target}
      {...props}
    >
      {target === "_blank" ? <ExternalLinkIcon className="h-6 w-6" /> : null}
      {children}
    </NextLink>
  );
}
