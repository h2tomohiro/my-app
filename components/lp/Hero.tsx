import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative py-20 lg:h-screen flex items-center">
      <Image src="/images/hero.svg" alt="" layout="fill" objectFit="cover" />
      <div className="relative container">
        <p className="lg:text-5xl text-2xl font-bold text-black lg:leading-relaxed mb-6">
          おい、イベントを
          <br className="hidden lg:block" />
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
