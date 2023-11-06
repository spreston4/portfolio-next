interface InputProps {
  error?: string;
  errorType?: "error" | "warning";
  name?: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void | undefined;
  onBlur?: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void | undefined;
  placeholder: string;
  type?: "input" | "textarea";
  value?: string;
}

const Input = ({
  error = "",
  errorType = "error",
  name = "",
  onChange,
  onBlur,
  placeholder,
  type = "input",
  value,
}: InputProps) => {
  const isInput = type === "input";
  const errorStyle = errorType === "error" ? "body-error" : "body-warning";
  return isInput ? (
    <div className="relative">
      <input
        name={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        className="w-full py-[14px] px-[16px] body-small text-dark duration-150 hover: shadow-sm focus:outline-none focus:shadow-md"
      ></input>
      <p className={`${errorStyle} absolute`}>{error}</p>
    </div>
  ) : (
    <div className="relative">
      <textarea
        name={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        className="w-full py-[14px] px-[16px] body-small text-dark duration-150 focus:outline-none focus:shadow-md"
        rows={5}
        style={{ resize: "none" }}
      ></textarea>
      <p className="body-error absolute">{error}</p>
    </div>
  );
};

export default Input;
