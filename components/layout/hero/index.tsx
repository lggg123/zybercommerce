import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero relative flex items-center justify-center">
      <Image src="/hero.jpg" alt="Hero Image" width={700} height={400} quality={100} />
      <div className="absolute mb-4 mb-4 justify-center text-4xl">
        <h1>Sehen Sie sich Auswahl an</h1>
      </div>
      <div className="absolute mt-4 flex justify-center gap-4">
        <Link href="/button1" className="rounded bg-green-500 px-4 py-2 text-white">
          Jezt einkaufen
        </Link>
        <Link href="/button1" className="rounded bg-gray-200 px-4 py-2">
          Bestseller
        </Link>
      </div>
    </div>
  );
}
