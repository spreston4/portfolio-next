interface InputProps {
  placeholder: string;
  type?: "input" | "textarea";
}

const Input = ({ placeholder, type = "input" }: InputProps) => {
  const isInput = type === "input";
  return isInput ? (
    <input
      placeholder={placeholder}
      className="w-full py-[14px] px-[16px] body-small text-dark duration-150 focus:outline-none focus:shadow-md"
    ></input>
  ) : (
    <textarea
      placeholder={placeholder}
      className="w-full py-[14px] px-[16px] body-small text-dark duration-150 focus:outline-none focus:shadow-md"
      rows={5}
      style={{ resize: "none" }}
    ></textarea>
  );
};

export default Input;
