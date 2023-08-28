'use client';

import Image from 'next/image';
import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import VideoBackground from '@/components/VideoBackground';
import { TRAINING_CENTER } from '@/utils/constants';
import { useMemo, useState } from 'react';
import TrainingCenter from '@/components/TrainingCenter';
import YoutubeModal from '@/components/YoutubeModal';

export default function TechnologyPage({
  params,
}: {
  params: {
    degree: string;
    module: string;
    technology: string;
  };
}) {
  const [modalOpened, setModalOpened] = useState(false);
  const [video, setVideo] = useState('');

  const openModal = (vid: string | null) => {
    if (!vid) {
      return;
    }

    const videoCode = vid.includes('youtube')
      ? vid.split('watch?v=')[1]
      : vid.split('https://youtu.be/')[1];

    setVideo(videoCode);
    setModalOpened(true);
  };

  const data = useMemo(() => {
    return TRAINING_CENTER[decodeURI(params.degree)][
      decodeURI(params.module).replace(/%3A/g, ':')
    ][decodeURI(params.technology)];
  }, [params]);

  return (
    <>
      <main className="relative">
        <BackButton
          href="/training-camp"
          className="absolute top-[50px] left-[50px] md:top-[30px] md:left-[20px]"
        />

        <section className="p-[150px_0_25px] md:p-[100px_0_25px]">
          <VideoBackground />

          <div className="flex flex-col gap-[50px] container">
            <div className="flex flex-col gap-[30px] items-center">
              <h2 className="text-center text-[40px] font-[200]">
                {params.technology}
              </h2>

              <div className="text-center">{data.description}</div>
            </div>

            <div className="bg-card rounded-[40px] p-[50px] flex flex-col gap-[30px]">
              <div className="icon m-auto">
                <div className="icon-content">
                  <Image
                    src="/icons/github.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="text-[18px] font-[300] text-center">
                Go to GitHub repository:
              </div>
              <div className="flex gap-[25px] flex-wrap justify-center">
                {data.git.map((item, index) => (
                  <Button
                    className="flex items-center gap-[10px]"
                    link={item}
                    linkType="external"
                    key={index}
                  >
                    Github link {index + 1}{' '}
                    <Image
                      src="/icons/arrow.svg"
                      alt=""
                      height={10}
                      width={10}
                    />
                  </Button>
                ))}
              </div>
            </div>

            <h4 className="text-center text-[18px] leading-[calc(13/18)]">
              Video-lessons:
            </h4>

            <div className="grid grid-cols-2 gap-[30px] md:grid-cols-1">
              {data.youtube.map((item) => (
                <TrainingCenter
                  key={item.link}
                  title={item.title}
                  link={item.link}
                  content={item.description}
                  type="video"
                  openModal={() => openModal(item.link)}
                />
              ))}
            </div>

            <h4 className="text-center text-[18px] leading-[calc(13/18)]">
              Video channels / playlists:
            </h4>

            <div className="grid grid-cols-2 gap-[30px] md:grid-cols-1">
              {data.playlists.map((item, i) => (
                <TrainingCenter
                  key={item.link}
                  title={item.title}
                  link={item.link}
                  content={item.description}
                  type="playlist"
                />
              ))}
            </div>
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
