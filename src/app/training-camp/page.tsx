'use client';

import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import TrainingCenter from '@/components/TrainingCenter';
import VideoBackground from '@/components/VideoBackground';
import { TRAINING_CENTER } from '@/utils/constants';
import Image from 'next/image';
import YoutubeModal from '@/components/YoutubeModal';
import { useState } from 'react';
import TrainingCampBlock from '@/components/training-camp/TrainingCampBlock';

export default function TrainingFunction() {
  return (
    <>
      <main className="relative">
        <BackButton className="fixed top-[50px] left-[50px] md:top-[20px] md:left-[20px]" />

        <section className="p-[150px_0_25px] md:p-[75px_0_25px]">
          <VideoBackground />

          <div className="flex flex-col gap-[100px] container md:gap-[50px]">
            <div className="flex flex-col items-center">
              <Image
                className="mix-blend-lighten max-[1560px]:max-w-[620px] md:hidden"
                alt=""
                src="/training-camp.png"
                width={500}
                height={272}
              />

              <Image
                className="mix-blend-lighten hidden ml-auto mr-auto mb-[20px] md:mb-0 md:block"
                src="/mobile-training-camp.png"
                alt=""
                width={300}
                height={300}
              />

              <div className="challenges-card-bg rounded-[200px] flex justify-center items-center p-[3px] mb-[50px]">
                <div className="text-center h-full w-full flex flex-col p-[30px_50px] border-transparent bg-cardCombined rounded-[200px] text-[30px] font-[600] text-[#D6E1FA] font-ceraPro md:p-[20px_60px] md:text-[20px] max-w-[430px] leading-[1]">
                  AI Science Developer Training Camp
                </div>
              </div>

              <div className="text-center text-[18px] max-w-[880px] ml-auto mr-auto mb-[50px]">
                <p>
                  Embark on an AI Science journey as a full stack developer,
                  mastering AI coding while merging it seamlessly with a wide
                  scientific spectrum including Quantum Computing, Robotics,
                  Chemistry, and more. This holistic approach empowers you to
                  create remarkable AI innovations, potentially even leading to
                  a Nobel Prize. Join this globally accessible program to
                  explore the unique fusion of AI development and a profound
                  understanding of the Universe.
                </p>
              </div>

              <div className="flex flex-col gap-[50px] w-full">
                <div className="h-[1px] bg-white/20 w-full"></div>

                <h2 className="text-center text-accentGreen font-[600] text-[24px] md:text-[18px]">
                  Education program – 3 pillars (1/3 each)
                </h2>

                <div className="grid grid-cols-3 gap-[10px] md:grid-cols-1">
                  <div className="bg-card p-[30px_30px_40px] rounded-[20px] flex flex-col gap-[30px] md:p-[20px_20px_30px]">
                    <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center">
                      <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-[rgb(37,48,77)] flex items-center justify-center text-[16px] font-[600]">
                        1/3
                      </div>
                    </div>

                    <div className="text-[18px]">
                      <span className="text-accentGreen font-[600]">
                        Theory:
                      </span>{' '}
                      immerse yourself in educational videos.
                    </div>
                  </div>

                  <div className="bg-card p-[30px_30px_40px] rounded-[20px] flex flex-col gap-[30px] md:p-[20px_20px_30px]">
                    <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center">
                      <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-[rgb(37,48,77)] flex items-center justify-center text-[16px] font-[600]">
                        2/3
                      </div>
                    </div>

                    <div className="text-[18px]">
                      <span className="text-accentGreen font-[600]">
                        Experimentation:
                      </span>{' '}
                      bring theory to life with solo or group projects.
                    </div>
                  </div>

                  <div className="bg-card p-[30px_30px_40px] rounded-[20px] flex flex-col gap-[30px] md:p-[20px_20px_30px]">
                    <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center">
                      <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-[rgb(37,48,77)] flex items-center justify-center text-[16px] font-[600]">
                        3/3
                      </div>
                    </div>

                    <div className="text-[18px]">
                      <span className="text-accentGreen font-[600]">
                        Teaching:
                      </span>{' '}
                      create and share teaching videos. As the saying goes, “To
                      teach is to learn twice.”.
                    </div>
                  </div>
                </div>

                <div className="text-center text-[18px] md:text-[16px]">
                  Together, these pillars craft an unparalleled learning
                  journey.
                </div>

                <div className="h-[1px] bg-white/20 w-full"></div>

                <h2 className="text-center text-accentGreen font-[600] text-[24px] md:text-[18px]">
                  Degree / Rank in The Guardian Legion
                </h2>

                <div className="text-center text-[18px]">
                  Rise to the challenges set by The Guardian Legion and submit
                  your code for scrutiny. Whether you’re a seasoned developer or
                  a coding novice, you’re welcome here. Dive into this advanced
                  course at no cost. Engage with our vibrant community on
                  Discord.
                </div>

                <Button
                  className="self-center"
                  link={process.env.NEXT_PUBLIC_DISCORD_URL}
                  icon="arrow"
                >
                  Go to our Discord
                </Button>
              </div>
            </div>

            <h1 className="text-[40px] font-[200] text-center md:text-[26px]">
              Learning program:
            </h1>

            <div className="flex flex-col gap-[30px]">
              {Object.entries(TRAINING_CENTER).map(([name, modules]) => (
                <TrainingCampBlock key={name} name={name} modules={modules} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
