import wdcLogo from "../assets/image.png";

const Footer = () => (
  <footer className="hero-bg text-primary-foreground/50 py-10 px-4">
    <div className="container mx-auto flex flex-col items-center gap-4">
      <img src={wdcLogo} alt="Wild Fusion Digital Centre" className="h-8 opacity-60" />
      <p className="text-sm text-center">
        © {new Date().getFullYear()} WDC Labs by Wild Fusion Digital Centre. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
