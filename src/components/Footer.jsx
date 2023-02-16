const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center font-mono mt-10">
      <p>© {year} Kristian Wobbes</p>
    </footer>
  );
};

export default Footer;
