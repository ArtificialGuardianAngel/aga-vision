import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import VideoBackground from '@/components/VideoBackground';
import ChallengeCard from '@/components/challenge/ChallengeCard';
import { CHALLENGES_DATA } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

interface Props {
  params: {
    slug: string;
  };
}

export default function Challenge({ params }: Props) {
  const data = useMemo(() => CHALLENGES_DATA[params.slug], [params.slug]);

  if (!data) {
    return <div className="text-center text-[48px] p-[80px_0]">Not found</div>;
  }

  return (
    <main className="relative">
      <BackButton className="fixed top-[50px] left-[50px] md:top-[20px] md:left-[20px]" />

      <section className="p-[150px_0_25px] md:p-[100px_0_25px]">
        <VideoBackground />

        <div className="container">
          <div className="flex flex-col gap-[50px] items-center">
            <div className="icon icon-lg">
              <div className="icon-content">
                <Image src={data.image} alt="" width={40} height={40} />
              </div>
            </div>

            <div className="p-[30px_50px] rounded-[100px] bg-[rgba(255,255,255,0.05)] text-[40px] font-[200] leading-[calc(29/40)] md:text-[20px] md:p-[20px_30px] md:w-full md:text-center md:leading-none">
              {data.title}
            </div>

            <div className="linear-rect"></div>

            <div className="bg-card p-[70px_50px] rounded-[20px] w-full md:p-[50px_30px]">
              <h3 className="text-[30px] font-[300]">Description</h3>

              <div className="m-[30px_0] bg-[rgba(255,255,255,0.1)] h-[1px]"></div>
              <div className="text-[18px]">{data.description}</div>
            </div>
          </div>

          {(data.cardsTitle || data.cards || data.extraDescription) && (
            <div className="p-[70px_0] md:p-[50px_0]">
              <div className="m-auto linear-rect"></div>
            </div>
          )}

          <div className="flex flex-col gap-[70px]">
            {data.cardsTitle && (
              <h4 className="text-[30px] font-[300] text-center">
                {data.cardsTitle}
              </h4>
            )}

            {data.cards && (
              <div className="grid grid-cols-3 gap-[20px] md:grid-cols-1 md:gap-[10px]">
                {data.cards.map((item) => (
                  <ChallengeCard
                    key={item.title}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            )}

            {data.extraDescription && (
              <div className="flex flex-col gap-[50px] items-center">
                <div className="max-w-[880px] text-center">
                  {data.extraDescription}
                </div>
                <Link href="/#submmition-form">
                  <Button size="lg">Submit your work</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
