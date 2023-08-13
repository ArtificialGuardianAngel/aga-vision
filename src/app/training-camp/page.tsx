'use client';

import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import TrainingCenter from '@/components/TrainingCenter';
import VideoBackground from '@/components/VideoBackground';
import { TRAINING_CENTER } from '@/utils/constants';
import Image from 'next/image';
import YoutubeModal from '@/components/YoutubeModal';
import { useState } from 'react';

export default function TrainingFunction() {
  const [modalOpened, setModalOpened] = useState(false);
  const [video, setVideo] = useState('');

  const openModal = (vid: string | null) => {
    if (!vid) {
      return;
    }

    const videoCode = vid.includes('youtube')
      ? vid.split('watch?v=')[1]
      : vid.split('https://youtu.be/')[1];

    console.log(videoCode);
    setVideo(videoCode);
    setModalOpened(true);
  };

  return (
    <>
      <main className="relative">
        <BackButton className="absolute top-[50px] left-[50px] md:top-[30px] md:left-[20px]" />

        <section className="p-[150px_0_25px] md:p-[100px_0_25px]">
          <VideoBackground />

          <div className="flex flex-col gap-[100px] container md:gap-[50px]">
            <div className="flex flex-col items-center">
              <Image
                className="mix-blend-lighten max-[1560px]:max-w-[620px]"
                alt=""
                src="/training-camp.png"
                width={500}
                height={272}
              />
              <div className="p-[30px_50px] rounded-[100px] bg-[rgba(255,255,255,0.05)] text-[40px] font-[200] leading-[calc(29/40)] mb-[50px] md:text-[20px] md:p-[20px_30px] md:w-full md:text-center">
                The Guardian Training Camp
              </div>
              <div className="text-center text-[18px] max-w-[880px] m-auto">
                <p className="mb-[20px]">
                  Welcome to the coding training facility! This is your central
                  hub, granting you access to all crucial links for code and
                  associated training videos. Your objective: to forge yourself
                  into an elite legionnaire, honing your AI craft to perfection.{' '}
                </p>
                <p>
                  Equipped with this training, you will possess the ability to
                  create formidable beings, ready to be unleashed on the planet,
                  safeguarding it from rogue AI threats. The knowledge acquired
                  from this intensive training camp will qualify you to tackle
                  challenging missions, earning prestigious medals that elevate
                  your status within The Guardian Legion. Prepare yourself,
                  embrace the training, and stand as the shield that defends our
                  world from the perils of AI.
                </p>
              </div>
            </div>

            <div className="bg-card p-[70px] w-full rounded-[40px] flex flex-col gap-[50px] md:gap-[30px] md:p-[50px_20px]">
              <h3 className="text-[30px] leading-[calc(22/30)] md:text-[24px]">
                Learn about:
              </h3>

              <div className="flex flex-wrap gap-[10px]">
                {Object.keys(TRAINING_CENTER).map((item) => (
                  <div
                    className="p-[10px_18px] text-[14px] font-[500] leading-[calc(10/14)] rounded-[30px] bg-white/10"
                    key={`t${item}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="linear-rect m-auto"></div>

            {Object.entries(TRAINING_CENTER).map(([name, item]) => (
              <div key={name} className="flex flex-col gap-[50px] items-center">
                <h3 className="text-[40px] font-[200] leading-[calc(29/40)] md:text-[26px] md:leading-none">
                  {name}
                </h3>

                <Button
                  className="md:w-full"
                  size="lg"
                  link={item.git}
                  linkType="external"
                >
                  go to github repository
                </Button>

                <h4 className="text-[18px] leading-[calc(13/18)]">
                  Video-lessons:
                </h4>

                <div className="grid grid-cols-2 w-full gap-[30px] md:grid-cols-1">
                  {item.youtube.map((video) =>
                    video.title || video.link || video.description ? (
                      <TrainingCenter
                        key={video.link}
                        title={video.title}
                        link={video.link}
                        content={video.description}
                        type="video"
                        openModal={() => openModal(video.link)}
                      />
                    ) : null,
                  )}
                </div>

                <h4 className="text-[18px] leading-[calc(13/18)]">
                  Video channels / playlists:
                </h4>

                <div className="grid grid-cols-2 w-full gap-[30px] md:grid-cols-1">
                  {item.playlists.map((playlist, i) =>
                    playlist.title || playlist.link || playlist.description ? (
                      <TrainingCenter
                        key={`${i}${playlist.link}`}
                        title={playlist.title}
                        link={playlist.link}
                        content={playlist.description}
                        type="playlist"
                      />
                    ) : null,
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <YoutubeModal
        opened={modalOpened}
        setOpened={setModalOpened}
        video={video}
      />
    </>
  );
}
