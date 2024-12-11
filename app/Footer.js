import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#44403c] text-stone-200 py-4 flex flex-col sm:flex-row justify-between items-center px-6">
      <div className="text-center sm:text-left">&copy; 2024 SparbrodWebDev</div>
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-2 sm:mt-0">
        <Link href="/privacy-policy">
          <a className="text-sm hover:underline">Private Policy</a>
        </Link>
        <Link href="/imprint">
          <a className="text-sm hover:underline">Imprint</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
