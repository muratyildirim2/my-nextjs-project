import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 relative" style={{ backgroundColor: "#00000" }}>
      {/* Kartvizit */}
      <div className="z-10 w-full items-center justify-center font-mono text-sm lg:flex">
        <div className="flex justify-center">
          <Image
            src="/Siyah ve Altın Modern Emlak ve İnşaat Instagram Gönderisi (2).png"
            alt="Kartvizit"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            priority
          />
        </div>
      </div>
    </main>
  );
}
