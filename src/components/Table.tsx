import { getPlanetBySlug } from "@/lib/data/planets";
import { Tooltip } from "@nextui-org/react";
import { HelpCircleIcon } from "lucide-react";
import { PropsWithChildren, ReactNode } from "react";

type Attribute = NonNullable<
  Awaited<ReturnType<typeof getPlanetBySlug>>
>["attributes"][number];

export function Table({ children }: PropsWithChildren) {
  return (
    <table className="w-full">
      <tbody className="divide-y divide-white/20">{children}</tbody>
    </table>
  );
}

export function TableRow({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: ReactNode;
}) {
  return (
    <tr className="flex w-full p-4 text-xl sm:text-2xl">
      <th className="flex-1 text-left">{label}</th>
      <td className="flex-1">{value ? value : children ? children : null}</td>
    </tr>
  );
}

export function AttributeRow({ attribute }: { attribute: Attribute }) {
  return (
    <tr className="flex w-full p-4 text-xl sm:text-2xl">
      <th className="flex flex-1 items-center text-left">
        {attribute.type.displayName}
        <Tooltip content={attribute.type.explanation} placement="top">
          <HelpCircleIcon className="ml-2 h-4 w-4 opacity-80" />
        </Tooltip>
      </th>
      <td className="flex-1">
        {attribute.unit.explanation ? (
          <Tooltip content={attribute.unit.explanation} placement="top">
            <span className="underline decoration-dotted underline-offset-4">
              {formatValue(attribute)}
            </span>
          </Tooltip>
        ) : (
          attribute.value
        )}
      </td>
    </tr>
  );
}

function formatValue({ unit, value }: Attribute): string {
  if (unit.suffix) {
    return `${value} ${unit.suffix}`;
  }

  return value;
}
