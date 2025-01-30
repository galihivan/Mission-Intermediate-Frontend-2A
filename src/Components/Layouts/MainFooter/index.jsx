import footer from "../../../Data/footer";
import FooterUs from "./FooterUs";
import FooterSection from "./FooterSection";
import FooterSocialMedia from "./FooterSocialMedia";

const MainFooter = () => {

  return (
    <footer className="flex flex-col w-full h-auto p-5 xl:px-[120px] xl:py-[60px] bg-white gap-4 xl:gap-5">
      <section className="flex xl:justify-between flex-col xl:flex-row gap-4 xl:gap-0">
        <FooterUs 
        logo={footer.logo}
        address={footer.address}
        phone={footer.phone}
        motto={footer.motto}
        />
        <section className="flex gap-3 xl:gap-12 xl:flex-row flex-col">
          {footer.footerSection.map((section, index) => (
            <FooterSection key={index} title={section.title} items={section.items} />
          ))}
        </section>
      </section>
      <section className="xl:pt-8 border-b border-slate-300" />
      <section className="xl:relative flex xl:justify-between xl:items-center flex-col xl:flex-row gap-3 xl:gap-0">
        <FooterSocialMedia socialMedia={footer.socialMedia} />
        <p className="text-slate-500 font-medium">{footer.copyright}</p>
      </section>
    </footer>
  );
};

export default MainFooter;
