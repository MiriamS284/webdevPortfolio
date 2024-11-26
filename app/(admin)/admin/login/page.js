import Image from "next/image";
import LoginForm from "@/app/_components/LoginForm";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="relative min-h-screen w-full flex justify-center items-center">
      <Image
        src="/img/bg_libelle_9.jpg"
        alt="Background Image"
        fill
        className="absolute inset-0 object-cover"
      />

      {/* Back button */}
      <Link href="/" className="absolute top-4 left-4 z-20 text-white">
        <IoArrowBackCircleOutline
          size={40}
          className="text-gray-300 hover:text-gray-500 transition-colors"
        />
      </Link>

      {/* Login Form */}
      <div className="relative z-10 p-8 max-w-lg w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
        <LoginForm />
      </div>
    </div>
  );
}
