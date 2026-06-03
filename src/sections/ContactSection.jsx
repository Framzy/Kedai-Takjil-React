import SectionTitle from "../components/home/SectionTitle";
import shopImg from "../assets/images/home/contact_person_img.webp";
import emailIcon from "../assets/icons/home/contact_email_icon.webp";
import whatsappIcon from "../assets/icons/home/contact_whatsapp_icon.webp";
import instagramIcon from "../assets/icons/home/contact_instagram_icon.webp";
import twitterIcon from "../assets/icons/home/contact_twitter_icon.webp";

import { motion } from "framer-motion";
import ContactChat from "../components/home/contact/ContactChat";
import ContactSosialMedia from "../components/home/contact/ContactSosialMedia";

const ContactChatData = [
  {
    img: emailIcon,
    label: "Email",
    info: "Melayani Anda setiap hari pada 08.00 - 17.00 WIB",
    value: "cskedaitakjil@gmail.com",
  },
  {
    img: whatsappIcon,
    label: "WhatsApp",
    info: "Melayani Anda setiap hari kerja pada 08.00 - 17.00 WIB",
    value: "+6281234567890",
  },
];
const ContactSosialMediaData = [
  {
    img: instagramIcon,
    label: "@kedaitakjil_",
    link: "#Instagram",
  },
  {
    img: twitterIcon,
    label: "@kedaitakjil",
    link: "#Twitter",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-[var(--background-white)] px-8 py-12 md:pt-12 md:pb-0 overflow-hidden"
    >
      <SectionTitle label="Hubungi Kami" color="primary" />
      <div className="w-full h-full flex flex-col-reverse md:flex-row justify-center items-center px-4 gap-8 xl:gap-15">
        <div className="w-[60vw] md:w-[50vw] xl:w-[40vw] max-w-lg xl:max-w-6xl">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            src={shopImg}
            alt="about_shop"
            className="w-full select-none"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full md:w-2/5 h-fit flex flex-col justify-center items-center gap-4
           md:items-start mb-5 md:mb-0 md:gap-10 "
        >
          <div className="w-full flex flex-col gap-4">
            <p className="text-xs md:text-lg text-center md:text-left font-regular mb-4">
              Anda bisa menghubungi kami melalui:
            </p>
            {ContactChatData.map((item, index) => (
              <ContactChat
                key={index}
                img={item.img}
                label={item.label}
                info={item.info}
                value={item.value}
              />
            ))}
          </div>

          <div className="w-full flex flex-col md:gap-4">
            <h2 className="text-md md:text-2xl font-bold text-gray-600">
              Ikuti Kami
            </h2>
            <div className="h-auto flex  flex-row justify-start items-start xl:items-center gap-6">
              {ContactSosialMediaData.map((item, index) => (
                <ContactSosialMedia
                  key={index}
                  img={item.img}
                  label={item.label}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
