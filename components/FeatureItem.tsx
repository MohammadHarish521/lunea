import { type ReactNode } from "react";

type FeatureItemProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export default function FeatureItem({
  icon,
  title,
  subtitle,
}: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div
        className="rounded-full  flex items-center justify-center bg-[#f2dce1] text-lunea-text shrink-0"
        style={{ width: "80px", height: "80px" }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-lunea-text">{title}</p>
        <p
          className="text-xs font-normal text-lunea-text leading-relaxed"
          style={{ opacity: 0.7 }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
