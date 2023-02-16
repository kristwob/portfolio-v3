const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center font-mono absolute bottom-1 left-0 right-0">
      <p>© {year} Kristian Wobbes</p>
    </footer>
  );
};

export default Footer;
