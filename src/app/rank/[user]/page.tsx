import Image from 'next/image';
import cn from 'classnames';
import VideoBackground from '@/components/VideoBackground';
import Button from '@/components/Button';
import { notFound } from 'next/navigation';

const RANKS = {
  white: 1,
  yellow: 2,
  orange: 3,
  green: 4,
  blue: 5,
  purple: 6,
  red: 7,
  brown: 8,
  black: 9,
};

interface IDeveloper {
  name: string;
  slug: string;
  email?: string;
  github?: string;
  belt: keyof typeof RANKS;
}

async function getData(slug: string) {
  const response = await fetch(
    `${process.env['NEXT_API_URL']}/developer/${slug}`,
    { cache: 'no-store' },
  );

  const contentType = response.headers.get('content-type');
  const isJson = contentType && contentType.indexOf('application/json') !== -1;

  if (!response.ok || !isJson) {
    return notFound();
  }

  return response.json() as Promise<IDeveloper>;
}

interface Props {
  params: {
    user: string;
  };
}

export default async function RankPage({ params }: Props) {
  const data = await getData(params.user);

  return (
    <>
      <main className="relative">
        <section className="container pt-[90px]">
          <VideoBackground videoSource="/rank-video-bg.mp4" mask mobileMask />

          <div className="rounded-[50px] p-[70px] bg-card backdrop-blur-[15px] flex flex-col gap-[30px] md:p-[50px_20px] md:rounded-[20px]">
            <div className="flex flex-col gap-[15px] text-center">
              <h3 className="text-[30px] font-[700] text-accentGreen md:text-[24px] leading-[22px]">
                {data.name}
              </h3>

              <h4 className="m-auto p-[7px_10px] text-[11px] text-[#22304D] bg-accentGreen rounded-[50px] uppercase font-bold leading-[8px] md:text-[10px]">
                Genesis Hackathon
              </h4>

              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="text-[18px] text-white md:text-[16px] leading-[13px]"
                >
                  {data.email}
                </a>
              )}
            </div>

            <div className="">
              <Image
                src={`/belts/${data.belt}.svg`}
                alt={data.belt}
                width={820}
                height={440}
                className="m-auto"
              />
            </div>

            <div className="bg-white/5 p-[50px_20px] flex flex-col gap-[30px] rounded-[20px] md:p-[30px_20px]">
              <h4 className="text-center text-[18px] text-white md:text-[16px]">
                Achievements:
              </h4>

              <div className="flex gap-[10px] lg:flex-wrap lg:justify-center">
                {Object.entries(RANKS).map(([key, value]) => (
                  <Image
                    key={key}
                    src={`/belts/${key}.svg`}
                    alt={key}
                    width={82}
                    height={44}
                    className={cn(
                      'flex-1 h-auto lg:max-w-[calc(50%-10px)] lg:justify-center lg:w-full',
                      {
                        'opacity-20': value > RANKS[data.belt],
                      },
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              {data.github && (
                <Button
                  link={data.github}
                  icon="arrow"
                  size="lg"
                  className="m-auto"
                  linkType="external"
                >
                  Go to {data.name} github
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
