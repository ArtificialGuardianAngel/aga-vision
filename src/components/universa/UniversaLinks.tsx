import Image from 'next/image';
import Button from '../Button';

const UniversaLinks = () => {
  return (
    <div className="p-[0_100px_50px] flex flex-col gap-[70px] items-center md:p-[0]">
      <Image
        className="mix-blend-lighten h-[400px] w-auto md:w-full md:h-auto"
        src="/universa/universa-brain.png"
        alt=""
        width={400}
        height={400}
      />

      <div className="text-center text-[40px] font-[200] text-white md:text-[24px]">
        We eagerly anticipate seeing the developments and innovations that we
        will emerge{' '}
        <span className="text-accentGreen font-[500]">together</span>.
      </div>

      <div className="flex gap-[20px] justify-center md:flex-col md:gap-[5px] md:justify-stretch md:w-full">
        <Button size="lg" icon="arrow">
          Read documentation
        </Button>
        <Button
          size="lg"
          icon="arrow"
          link={process.env.NEXT_PUBLIC_GITHUB_URL}
          linkType="external"
        >
          Go to our github
        </Button>
        <Button
          size="lg"
          icon="arrow"
          link={process.env.NEXT_PUBLIC_DISCORD_URL}
          linkType="external"
        >
          Go to our discord
        </Button>
      </div>
    </div>
  );
};

export default UniversaLinks;
