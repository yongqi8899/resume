import { me } from "@/assets";
import ContactForm from "./cpns/form.jsx";

const Contact = () => {
  return (
    <div className="flex flex-col max-w-screen-lg gap-20 px-10 m-auto md:mt-40 md:flex-row">
      <div className="w-full h-full overflow-hidden rounded-full">
        <img src={me} className="object-cover w-full h-full" />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
