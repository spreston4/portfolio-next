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
  const classes =
    "w-full py-[18px] sm:py-[14px] px-[16px] body-medium sm:body-small text-dark duration-150 hover: shadow-sm focus:outline-none focus:shadow-md";
  const errorDisplay = <p className={`${errorStyle} font-bold absolute`}>{error}</p>;
  return isInput ? (
    <div className="relative">
      <input
        name={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        className={classes}
      ></input>
      {errorDisplay}
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
        className={classes}
        rows={5}
        style={{ resize: "none" }}
      ></textarea>
      {errorDisplay}
    </div>
  );
};

export default Input;
