
const FooterSocialMedia = ({socialMedia}) => {
  return (
    <section className="xl:absolute xl:right-0 flex gap-4">
      {socialMedia.map((item, index) => (
        <img
          className="cursor-pointer"
          src={item}
          alt="social media"
          key={index}
        />
      ))}
    </section>
  );
};

export default FooterSocialMedia;
