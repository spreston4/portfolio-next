import Button from "./ui/Button";
import Input from "./ui/Input";

const Contact = () => {
  return (
    <div className="container bg-pink">
      <div className="flex flex-row items-center justify-between gap-x-6">
        <div className="text-dark w-1/2">
          <h2 className="heading-small">Get in Touch</h2>
          <p className="body-medium">
            Have a question or a project in mind? I&apos;d love to hear from
            you. Let&apos;s chat and make something happen together.
          </p>
        </div>
        <form className="w-2/5 mt-4 flex flex-col items-start justify-between gap-y-6">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Message" type="textarea"/>
          <Button>Send Message</Button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
