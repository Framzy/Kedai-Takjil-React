function ContactChat({ img, label, info, value }) {
  return (
    <>
      <div className="h-26 md:h-32 xl:h-40 flex justify-start items-center gap-2">
        <div className="w-8 md:w-12 xl:w-14 h-full flex justify-start items-start gap-2 ">
          <img src={img} alt={label} className="h-auto" />
        </div>
        <div className="w-full h-full flex flex-col justify-start items-start gap-2 ">
          <h2 className="text-md md:text-lg xl:text-xl font-bold py-0 md:py-2 text-gray-600 ">
            {label}
          </h2>
          <p className="font-regular text-xs md:text-md xl:text-lg">{info}</p>
          <p className="font-bold text-xs md:text-md xl:text-lg text-[var(--color-secondary)]">
            {value}
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactChat;
