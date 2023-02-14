const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center font-mono">
      <p>© {year} Kristian Wobbes</p>
    </footer>
  );
};

export default Footer;
