import Button from "./ui/Button";
import Input from "./ui/Input";
import * as Icon from "react-feather";

const Contact = () => {
  return (
    <div className="container bg-pink relative" id="contact">
      <div className="flex flex-row justify-between gap-x-6">
        <div className="text-dark w-1/2 h-full flex flex-col gap-y-20">
          <div>
            <h2 className="heading-small mb-6">Get in Touch</h2>
            <p className="body-medium">
              Have a question or a project in mind? I&apos;d love to hear from
              you. Let&apos;s chat and make something happen together.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-y-6 body-medium">
            <div className="icon-info">
              <Icon.PhoneCall />
              <p>+1 (503) 956-4531</p>
            </div>
            <div className="icon-info">
              <Icon.Mail />
              <p>sam.preston11@gmail.com</p>
            </div>
            <div className="icon-info">
              <Icon.MapPin />
              <p>Hillsboro, OR</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-8">
            <a
              href="https://www.linkedin.com/in/sam-preston-5601b311a/"
              target="_blank"
            >
              <div className="icon-bg-white">
                <Icon.Linkedin className="icon-small" fill="text-dark" />
              </div>
            </a>
            <a href="https://github.com/spreston4" target="_blank">
              <div className="icon-bg-white">
                <Icon.GitHub className="icon-small" fill="text-dark" />
              </div>
            </a>
          </div>
        </div>
        <form className="w-2/5 mt-4 flex flex-col gap-y-6">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Message" type="textarea" />
          <Button>Send Message</Button>
        </form>
      </div>
      <div className="h-[200px] w-[45px] absolute left-0 top-[40%] bg-red rounded-tr-full rounded-br-full"></div>
    </div>
  );
};

export default Contact;
