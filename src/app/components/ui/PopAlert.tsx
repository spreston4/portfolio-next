import { Check, X } from "react-feather";

interface PopAlertProps {
  message: string;
  onClose: () => void;
  timeout?: boolean;
}

const PopAlert = ({ message, onClose, timeout }: PopAlertProps) => {
  const slide = timeout ? "animate-slide-down" : "animate-slide-up";
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-end justify-end z-50">
      <div
        className={`bg-white py-4 pl-4 pr-10 body-medium flex items-center justify-start gap-2 shadow-xl relative ${slide}`}
      >
        <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-success">
          <Check className="text-white" />
        </div>
        <p>{message}</p>
        <div
          className="icon-bg-small text-dark-grey absolute top-2 right-2"
          onClick={onClose}
        >
          <X className="h-[16px]" />
        </div>
      </div>
    </div>
  );
};

export default PopAlert;
