import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#44403c]/70 text-stone-200 py-4 px-6 flex flex-col sm:flex-row justify-center items-center hover:bg-[#3c3835] transition-colors duration-300">
      <div className="text-center mb-2 sm:mb-0 pr-20">
        &copy;2024 SparbrodWebDev
      </div>
      <div className="flex flex-row items-center space-x-4">
        <Link href="/privacy-policy">
          <span className="text-sm hover:underline">Private Policy</span>
        </Link>
        <Link href="/imprint">
          <span className="text-sm hover:underline">Imprint</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
