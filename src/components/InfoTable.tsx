import { PropsWithChildren } from "react";

export function InfoTable({ children }: PropsWithChildren) {
  return (
    <table className="w-full">
      <tbody className="divide-y divide-white/20">{children}</tbody>
    </table>
  );
}

export function InfoTableRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <tr className="flex w-full p-4 text-xl sm:text-2xl">
      <th className="flex-1 text-left">{label}</th>
      <td className="flex-1">{value}</td>
    </tr>
  );
}
