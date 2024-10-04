import { EarthCanvas } from "@/components/canvas/index.js";
import ContactForm from "./cpns/form.jsx";

const Contact = () => {
  return (
    <div className="flex flex-col w-screen max-w-lg px-10 m-auto md:mt-40 md:flex-row">
      <ContactForm />
      <div className="w-full">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;
