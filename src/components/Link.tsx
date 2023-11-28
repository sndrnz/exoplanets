import { cn } from "@nextui-org/react";
import { ExternalLinkIcon } from "lucide-react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { HTMLAttributeAnchorTarget, PropsWithChildren } from "react";

interface LinkProps extends NextLinkProps {
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export default function Link({
  children,
  target,
  className,
  ...props
}: PropsWithChildren<LinkProps>) {
  return (
    <NextLink
      className={cn(
        "flex items-center gap-x-1 hover:underline hover:underline-offset-4 hover:opacity-90",
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
