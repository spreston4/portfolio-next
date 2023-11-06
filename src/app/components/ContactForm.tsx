import Button from "./ui/Button";
import Input from "./ui/Input";
import useInput from "../hooks/useInput";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  let formValid = false;
  const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i;
  const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;

  const {
    value: name,
    isValid: nameValid,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetHandler: nameResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailResetHandler,
  } = useInput((value) => emailRegex.test(value.trim()));

  const {
    value: phone,
    isValid: phoneValid,
    hasError: phoneError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    resetHandler: phoneResetHandler,
  } = useInput((value) => phoneRegex.test(value?.trim()));

  const {
    value: message,
    isValid: messageValid,
    hasError: messageError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    resetHandler: messageResetHandler,
  } = useInput((value) => value.trim() !== "");

  const validPhoneNumber = phone ? phoneValid : true;

  if (nameValid && validPhoneNumber && emailValid && messageValid) {
    formValid = true;
  }

  const resetFormHandler = () => {
    nameResetHandler();
    emailResetHandler();
    phoneResetHandler();
    messageResetHandler();
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event?.preventDefault();
    if (!formValid) {
      console.log("Error submitting form");
      return;
    }

    const messageParams = { name, email, phone, message };

    if (
      !process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
    ) {
      console.log("Configure email params");
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        messageParams,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("Message sent");
          resetFormHandler();
        }
      });
  };

  return (
    <form onSubmit={submitFormHandler} className=" mt-4 flex flex-col gap-y-6">
      <Input
        placeholder="Name*"
        value={name}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        error={nameError ? "Please enter a name." : ""}
      />
      <Input
        placeholder="Email*"
        value={email}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        error={emailError ? "Please enter a valid email." : ""}
      />
      <Input
        placeholder="Phone Number"
        value={phone}
        onChange={phoneChangeHandler}
        onBlur={phoneBlurHandler}
        error={
          phoneError ? "Please enter a valid phone number (not required)." : ""
        }
        errorType="warning"
      />
      <Input
        placeholder="Message*"
        type="textarea"
        value={message}
        onChange={messageChangeHandler}
        onBlur={messageBlurHandler}
        error={messageError ? "Please enter a message." : ""}
      />
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
