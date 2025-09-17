import clsx from "clsx";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "danger" | "info";
  size?: "xs" | "sm" | "md";
  outlined?: boolean;
  rounded?: boolean;
  withDot?: boolean;
  className?: string;
};

const Badge = ({
  children,
  variant = "primary",
  size = "sm",
  outlined = false,
  rounded = false,
  withDot = false,
  className,
}: BadgeProps) => {
  // 기본 스타일
  const BadgeClasses = clsx(
    "inline-flex items-center font-medium",

    // 크기 설정
    {
      "text-xs px-1.5 py-0.5": size === "xs",
      "text-sm px-2.5 py-0.5": size === "sm",
      "text-base px-3 py-1": size === "md",
    },

    // 색상 설정
    {
      "bg-blue-600 text-white": variant === "primary" && !outlined,
      "bg-green-100 text-green-800": variant === "success" && !outlined,
      "bg-yellow-100 text-yellow-800": variant === "warning" && !outlined,
      "bg-red-100 text-red-800": variant === "danger" && !outlined,
      "bg-blue-100 text-blue-800": variant === "info" && !outlined,
    },

    {
      "text-white border border-white": variant === "primary" && outlined,
      "text-green-800 border border-green-800 ":
        variant === "success" && outlined,
      "border border-yellow-800 text-yellow-800":
        variant === "warning" && outlined,
      "border border-red-800 text-red-800": variant === "danger" && outlined,
      "border border-blue-800 text-blue-800": variant === "info" && outlined,
    },
    // 모서리 설정
    {
      rounded: rounded,
      "rounded-full": !rounded,
    },
    className,
  );
  return <div className={BadgeClasses}>{children}</div>;
};

export default Badge;
