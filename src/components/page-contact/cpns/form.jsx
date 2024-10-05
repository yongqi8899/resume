import { styles } from "@/styles";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { IoEarthOutline } from "react-icons/io5";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-col ">
        <p className={styles.sectionSubText}>{t("contact.getincontact")}</p>
        <div className="flex align-bottom">
          <h3 className={styles.sectionHeadText}>{t("contact.contact")}</h3>
          <IoEarthOutline size={20} />
        </div>
      </div>
      <address>
        <a href="mailto:yz.zhang.de@gmail.com" target="_blank">
          <div className="flex items-center gap-3 mt-6">
            <MdEmail size={30}/> yz.zhang.de@gmail.com
          </div>
        </a>
        <br />
        <a href="tel:015254301796" target="_blank">
          {" "}
          <div className="flex items-center gap-3 ">
            <BsFillTelephoneFill size={30}/>
            015254301796
          </div>
        </a>
      </address>
      <a href="https://github.com/yongqi8899" target="_blank">
        {" "}
        <div className="flex items-center gap-3 mt-5">
          <BsGithub size={30}/>
          https://github.com/yongqi8899
        </div>
      </a>
      <a href="https://www.linkedin.com/in/yongqi-zhang/" target="_blank">
        {" "}
        <div className="flex items-center gap-3 mt-5">
          <RxLinkedinLogo size={30}/>
          https://www.linkedin.com/in/yongqi-zhang/
        </div>
      </a>
    </div>
  );
};

export default ContactForm;
