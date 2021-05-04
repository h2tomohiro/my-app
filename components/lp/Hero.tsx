import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      <Image src="/images/hero.svg" layout="fill" objectFit="cover" />
      <div className="relative container">
        <p className="text-5xl font-bold text-black leading-relaxed mb-6">
          おい、イベントを
          <br />
          はじめよう
        </p>
        <a className="font-bold bg-white py-4 px-10 rounded-full shadow">
          アカウント作成
        </a>
      </div>
    </div>
  );
};

export default Hero;
