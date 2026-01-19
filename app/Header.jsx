import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center bg-[#BA0F30] text-white p-4 rounded-t-lg text-xs md:text-base">
        <Image
          src="/logo.png"
          alt="roland garros budapest"
          width={80}
          height={20}
          className="lg:h-25 lg:w-auto"
          loading="eager"
        />
        <div className="flex gap-4 font-bold">
          <Link href="/" className="cursor-pointer">
            Főoldal
          </Link>
          <Link href="/results" className="cursor-pointer">
            Eredmények
          </Link>
        </div>
        <p className="font-bold cursor-pointer">Bejelentkezés</p>
      </div>
    </div>
  );
}
