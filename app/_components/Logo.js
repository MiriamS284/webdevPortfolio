import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <Image
          src="/digital_garden_logo1.png"
          height={250}
          width={250}
          alt="The Digital Garden By Miriam Sparbrod - Logo"
        />
      </div>
    </Link>
  );
}

export default Logo;
