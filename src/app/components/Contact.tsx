import * as React from "react";
import ContactForm from "./ContactForm";
import * as Icon from "react-feather";

interface ContactObject {
  name: string;
  icon: React.ReactNode;
  text: string;
}

const Contact = () => {
  const contactBank: ContactObject[] = [
    { name: "phone", icon: <Icon.PhoneCall />, text: "+1 (503) 956-4531" },
    { name: "email", icon: <Icon.Mail />, text: "sam.preston11@gmail.com" },
    { name: "location", icon: <Icon.MapPin />, text: "Hillsboro, OR" },
  ];

  const socialBank: ContactObject[] = [
    {
      name: "linkedin",
      icon: <Icon.Linkedin className="text-dark" fill="text-dark" />,
      text: "https://www.linkedin.com/in/sam-preston-5601b311a/",
    },
    {
      name: "github",
      icon: <Icon.GitHub className="text-dark" />,
      text: "https://github.com/spreston4",
    },
  ];
  return (
    <div className="container bg-prim-light relative" id="contact">
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
            {contactBank.map(({ name, icon, text }: ContactObject) => (
              <div key={name} className="icon-info">
                {icon}
                {text}
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-x-8">
            {socialBank.map(({ name, icon, text }: ContactObject) => (
              <a href={text} target="_blank" key={name}>
                <div className="icon-bg-large bg-white">{icon}</div>
              </a>
            ))}
          </div>
        </div>
        <div className="w-2/5">
          <ContactForm />
        </div>
      </div>
      <div className="h-[200px] w-[45px] absolute left-0 top-[40%] bg-prim-dark rounded-tr-full rounded-br-full"></div>
    </div>
  );
};

export default Contact;
