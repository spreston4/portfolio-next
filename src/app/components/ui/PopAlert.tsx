import Button from "./Button";
import { Check } from "react-feather";

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
        className={`bg-white p-6 body-medium flex items-center justify-center gap-6 shadow-lg ${slide}`}
      >
        <div className="icon-bg-large bg-success">
          <Check className="text-white" />
        </div>
        <p>{message}</p>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default PopAlert;
