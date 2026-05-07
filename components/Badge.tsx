import { type ReactNode } from "react";

type BadgeProps = {
  label: string;
  icon?: ReactNode;
};

export default function Badge({ label, icon }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-normal w-fit"
      style={{
        backgroundColor: "#F3D6D8",
        color: "rgba(122, 46, 52, 0.75)",
      }}
    >
      {icon}
      {label}
    </span>
  );
}
