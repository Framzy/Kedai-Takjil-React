function ContactSosialMedia({ img, label, link }) {
  return (
    <>
      <div className="h-full flex flex-row justify-start items-center gap-2 py-2">
        <img src={img} alt={label} className="h-auto w-6 md:w-12 xl:w-16" />
        <a href={link}>
          <p className="font-semibold text-xs md:text-base xl:text-lg text-[var(--color-secondary)]">
            {label}
          </p>
        </a>
      </div>
    </>
  );
}

export default ContactSosialMedia;
