import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex py-32 items-center">
            <div className="w-1/2">
              <h2 className="fond-bold text-3xl leading-relaxed mb-8">
                誰でも無料で
                <br />
                イベントを誰でも主催できます。
              </h2>
              <p>
                急に有料化する可能性が常にあります。私たちは常にそのタイミングを見計らっています。
              </p>
            </div>
            <div className="fond-bold w-1/2 text-center">
              <span className="text-9xl mr-2">0</span>
              <span className="text-2xl">YEN</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500">
        <div className="container">
          <div className="flex py-32 items-center">
            <div className="w-1/2 order-1">
              <h2 className="fond-bold text-3xl leading-relaxed mb-8">
                誰でも無料で
                <br />
                イベントを誰でも主催できます。
              </h2>
              <p>
                急に有料化する可能性が常にあります。私たちは常にそのタイミングを見計らっています。
              </p>
            </div>
            <div className="w-1/2">
              <div className="w-1/2" mx-auto>
                <Image
                  src="/images/hero.svg"
                  width={567}
                  height={567}
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="flex py-32 items-center">
            <div className="w-1/2">
              <h2 className="fond-bold text-3xl leading-relaxed mb-8">
                誰でも無料で
                <br />
                イベントを誰でも主催できます。
              </h2>
              <p>
                急に有料化する可能性が常にあります。私たちは常にそのタイミングを見計らっています。
              </p>
            </div>
            <div className="w-1/2">
              <div className="w-1/2" mx-auto>
                <Image
                  src="/images/hero.svg"
                  width={404}
                  height={317}
                  alt=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
