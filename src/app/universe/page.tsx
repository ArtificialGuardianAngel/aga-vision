import Button from '@/components/Button';
import cn from 'classnames';
import Image from 'next/image';
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

type DownloadButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
};

const DownloadButton = ({
  icon,
  children,
  className,
  disabled,
  ...props
}: DownloadButtonProps) => (
  <button
    {...props}
    className={cn(
      'flex items-center gap-[10px] rounded-[50px] bg-accentGreen p-[0_30px_0_5px] h-[60px] text-blue6 min-w-[180px]',
      className,
      {
        'opacity-[0.2]': disabled,
      },
    )}
  >
    {icon}
    <span>{children}</span>
  </button>
);

const DownloadSection = () => (
  <>
    <section className="flex flex-col items-center gap-[30px] md:hidden">
      <div>Download for:</div>
      <div className="flex justify-between items-center gap-[10px]">
        <DownloadButton
          icon={
            <Image
              src="/icons/mac_logo.png"
              width={50}
              height={50}
              alt="mac logo"
            />
          }
        >
          Mac
        </DownloadButton>
        <DownloadButton
          disabled
          icon={
            <Image
              src="/icons/win_logo.png"
              width={50}
              height={50}
              alt="mac logo"
            />
          }
        >
          Windows
        </DownloadButton>
        <DownloadButton
          icon={
            <Image
              src="/icons/linux_logo.png"
              width={50}
              height={50}
              alt="mac logo"
            />
          }
        >
          Linux
        </DownloadButton>
      </div>
    </section>
    <div className="hidden md:block text-[16px] leading-[20.16px] text-center">
      Open this page on your desktop and download UNIVERSE for MAC OS,
      Windows (soon) or LINUX.
    </div>
  </>
);

const UniversePage = () => {
  return (
    <main>
      <div className="flex flex-col gap-[50px] items-center container overflow-hidden max-w-[650px] min-h-[100dvh] pt-[70px] md:gap-[30px] md:justify-center">
        <Image
          className="mix-blend-lighten xxl:max-w-[520px] w-auto max-w-[960px] md:w-full"
          src="/aga-face.png"
          alt="AGA"
          width={1920 / 3}
          height={1329 / 3}
        />
        <div className="challenges-card-bg rounded-[200px] flex justify-center items-center p-[3px]">
          <div className="text-center h-full w-full flex flex-col p-[30px_50px] border-transparent bg-cardCombined rounded-[200px] text-[45px] uppercase font-[900] text-white font-ceraPro leading-[calc(30/45)] md:p-[20px_30px] md:text-[20px] lg:text-[30px]">
            Universe
          </div>
        </div>

        <div className="uppercase text-accentGreen tracking-[4.8px] text-center md:text-[14px] md:tracking-[2.8px] md:leading-[17.64px] md:font-[700]">
          The Ultimate Coding Symphony
        </div>

        <DownloadSection />
      </div>

      <section className="flex flex-col max-w-[1080px] mx-auto gap-[70px] md:max-w[650px] sm:max-w[350px] md:mx-[20px]">
        <div className="bg-card p-[70px_50px] flex flex-col gap-[50px] items-center md:p-[50px_30px] md:rounded-[40px] md:gap-[30px]">
          <div className="text-accentGreen text-[30px] leading-[37.8px] font-[300] md:text-[24px] md:leading-[30.24px]">
            Introducing UNIVERSE
          </div>
          <div className="text-center text-[18px] leading-[22.68px] md:text-[16px] md:leading-[20.16px]">
            <span className="text-accentGreen">UNIVERSE</span> - an ethereal
            coding toolset transforming the way we craft and exchange code.
            Imagine the multifunctionality of a coder’s “swiss knife”
            harmoniously intertwined with the limitless potential of human
            imagination. Within UNIVERSE, coders and AI coalesce, crafting code
            in perfect sync, all vividly portrayed through expansive macro
            zones.
          </div>
        </div>
        <div className="flex justify-center my-[-30px]">
          {/* <div
            className="w-[150px] h-[150px]"
            style={{
              background: "url('/icons/universe.png')",
              backgroundSize: 'contain',
            }}
          > */}
          <Image
            style={
              {
                // boxShadow: '0px 0px 50px 0px rgba(17, 244, 209, 0.20);',
              }
            }
            src="/icons/universe_3xo.png"
            width={250}
            height={250}
            alt="universe"
          />
          {/* </div> */}
        </div>
        <p className="text-center md:text-[16px]">
          These zones, a canvas of logic, not only facilitate the intuitive
          creation of advanced logic connections but also host a vast array of
          pre-installed libraries. Whether it’s application creation, AI
          creation, new blockchain development, or anything your mind conceives,
          UNIVERSE makes it tangible. As your masterpiece takes form, zoom in
          and out with the ease of an eagle’s view, sharing your canvas or
          specific zones seamlessly.
          <br />
          <br />
          Watch your code come alive, running in real-time on a groundbreaking
          decentralized web, harnessing the collective power of all UNIVERSE
          nodes. Deploy your creations to third-party servers with a mere click,
          completely sidestepping devops intricacies. Witness coding not just as
          lines of text and numbers, but as visual symphonies resonating with
          the innate language of our minds.
          <br />
          <br />
          Each canvas is a mesmerizing dance of logic and creativity, and
          collectively, they unveil an entire universe of untapped potential.
          Whether for private endeavors, open-source projects, paired
          collaborations, or hackathons, UNIVERSE sets the stage. Even the
          finance aspect is simplified with an integrated wallet, encouraging
          contributions and collaborative innovations.
        </p>
        <div className="bg-card p-[50px_70px] text-center text-[18px] leading-[22.68px] md:p-[50px_30px] md:rounded-[40px] md:gap-[30px] md:text-[16px] md:leading-[20.16px]">
          <span className="text-accentGreen">
            Join us in our grand ambition:
          </span>{' '}
          a unified platform where every developer builds upon the world’s
          open-source treasures. Together, we’re not just coding; we’re
          composing multiple AI organs, channeling them towards the benevolent
          force that will be the Artificial Guardian Angel.
        </div>
        <div className="text-center text-[30px] leading-[37.8px] font-[300] md:text-[24px] md:leading-[30.24px] md:font-[400]">
          Discover, create, share - this is{' '}
          <span className="text-accentGreen">UNIVERSE</span>. Your coding
          symphony awaits.
        </div>

        <DownloadSection />
      </section>
    </main>
  );
};

export default UniversePage;
