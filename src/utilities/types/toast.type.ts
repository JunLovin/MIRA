import type { ReactNode, SetStateAction } from "react";

export interface ToastProps {
  type?: "default" | "warning" | "success" | "info";
  children: ReactNode;
  className?: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
}
