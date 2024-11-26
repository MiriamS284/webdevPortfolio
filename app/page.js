import Link from "next/link";
import { LuChevronsDown } from "react-icons/lu";

export const metadata = {
  title: "Web Development | Miriam Sparbrod",
  description: "Portfolio Web - Application Development by Miriam Sparbrod",
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              FULL STACK: Web - APP - Development
            </h1>
            <p className="text-lg mb-4">
              Herzlich Willkommen in meinem Digitalen Garten!
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">[Animation]</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <Link href="/miriamsparbrod">
          <LuChevronsDown size={40} className="text-gray-600 animate-bounce" />
        </Link>
      </div>
    </>
  );
}
