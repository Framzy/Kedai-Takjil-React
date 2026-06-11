import SectionTitle from "../components/home/SectionTitle";
import emailIcon from "../assets/icons/home/contact_email_icon.webp";
import whatsappIcon from "../assets/icons/home/contact_whatsapp_icon.webp";
import instagramIcon from "../assets/icons/home/contact_instagram_icon.webp";
import twitterIcon from "../assets/icons/home/contact_twitter_icon.webp";

import { motion } from "framer-motion";
import { fadeInLeft } from "../utils/motionVariants";
import ContactChat from "../components/home/contact/ContactChat";
import ContactSosialMedia from "../components/home/contact/ContactSosialMedia";
import ContactBackground from "../components/home/contact/ContactBackground";

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
      className="scroll-mt-16 bg-[var(--background-white)] px-8 py-12  md:pt-12 md:pb-0 overflow-hidden"
    >
      <SectionTitle label="Hubungi Kami" color="primary" />
      <div className="w-full h-full flex justify-center items-center  md:pt-8">
        <div className="w-fit h-full flex flex-col-reverse md:flex-row justify-between items-end gap-8 md:gap-12 lg:gap-8">
          <ContactBackground />
          <motion.div
            {...fadeInLeft}
            className="w-full md:w-2/5 h-full flex flex-col justify-center items-center self-center gap-4
          md:items-start mb-5 md:mb-0 md:gap-10 "
          >
            <div className="xl:my-8">
              <div className="w-fit flex flex-col gap-4">
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

              <div className="w-fit flex flex-col md:gap-4">
                <h2 className="text-base md:text-2xl font-bold text-gray-600">
                  Ikuti Kami
                </h2>
                <div className="h-auto flex flex-row justify-start items-start xl:items-center gap-6">
                  {ContactSosialMediaData.map((item, index) => (
                    <ContactSosialMedia
                      key={index}
                      img={item.img}
                      label={item.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
