import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

interface ToastContextType {
  type: "default" | "failed" | "success";
  handleChangeType: (type: "default" | "failed" | "success") => void;
}

export const ToastContext = createContext<ToastContextType>({
  type: "default",
  handleChangeType: () => {},
});

export const ToastContextProvider = ({ children }: PropsWithChildren) => {
  const [type, setType] = useState<ToastContextType["type"]>("default");

  const handleChangeType = (type: ToastContextType["type"]) => {
    setType(type);
  };

  return (
    <ToastContext.Provider value={{ type, handleChangeType }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context)
    throw Error("The useToast must be wrapped with ToastContextProvider");
  return context;
};
