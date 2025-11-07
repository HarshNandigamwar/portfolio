const Footer = () => {
  return (
    <footer className="border-t border-purple-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-center text-sm text-purple-400">
            Made with <span className="text-red-500">❤️</span> by Shriharsh.
          </span>
          <p className="text-purple-400">
            &#169; {new Date().getFullYear()} Shriharsh Nandigamwar. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
