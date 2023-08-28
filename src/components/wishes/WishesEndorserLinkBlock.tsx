import Image from 'next/image';
import React from 'react';

const WishesEndorserLinkBlock: React.FC<{}> = () => {
  return (
    <div className="flex flex-col gap-[50px] items-center">
      <h3 className="text-accentGreen text-[22px] font-[600] text-center">
        Your endorser link
      </h3>

      <div className="challenges-card-bg rounded-[200px] flex justify-center items-center p-[3px] min-w-[370px] md:min-w-[280px] md:max-w-full">
        <div
          onClick={() =>
            navigator.clipboard.writeText(
              'https://aga.live/3wishes/e/user@gmail.com',
            )
          }
          className="text-center h-full w-full flex gap-[20px] items-center p-[25px_40px] border-transparent bg-cardCombined rounded-[200px] text-[20px] text-white leading-[calc(15/20)] md:p-[10px_15px] md:text-[14px] md:leading-normal lg:leading-normal overflow-hidden"
        >
          <span className="text-ellipsis overflow-hidden">
            https://aga.live/3wishes/e/user@gmail.com
          </span>
          <Image src="/icon-copy.svg" width={20} height={20} alt="Copy" />
        </div>
      </div>

      <div className="text-center">
        Share the following link on social media:
      </div>

      <div className="flex gap-[20px]">
        <a className="cursor-pointer" href={process.env.VITE_FACEBOOK_LINK}>
          <Image src="/facebook.svg" alt="Facebook" width={35} height={35} />
        </a>
        <a className="cursor-pointer" href={process.env.VITE_LINKEDIN_LINK}>
          <Image src="/linkedin.svg" alt="LinkedIn" width={35} height={35} />
        </a>
        <a className="cursor-pointer" href={process.env.VITE_TWITTER_LINK}>
          <Image src="/twitter.svg" alt="Twitter" width={35} height={35} />
        </a>
        <a className="cursor-pointer" href={process.env.VITE_WHATSAPP_LINK}>
          <Image src="/whatsapp.svg" alt="WhatsApp" width={35} height={35} />
        </a>
        <a className="cursor-pointer" href={process.env.VITE_TELEGRAM_LINK}>
          <Image src="/telegram.svg" alt="Telegram" width={35} height={35} />
        </a>
      </div>

      <div className="text-center">
        This link will only become active upon completion of the E-signature in
        the next step, but you can already have a glimpse. Encourage as many
        contributions as you can. It’s akin to running your own business.
        Determine your own income, working from your mobile or laptop, from
        anywhere in the world – even from a tropical beach. Embark on a journey
        towards financial independence and perpetual income. We encourage you to
        donate as much as you can now, as half of your initial donation will set
        the lifelong maximum you can earn from each single endorsed
        contribution.
      </div>
    </div>
  );
};

export default WishesEndorserLinkBlock;
