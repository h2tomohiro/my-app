import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      <Image src="/images/hero.svg" layout="fill" objectFit="cover" />
      <div className="relative container">
        <p>
          おい、イベントを
          <br />
          はじめよう
        </p>
        <a>アカウント作成</a>
      </div>
    </div>
  );
};

export default Hero;
