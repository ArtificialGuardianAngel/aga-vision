'use client';

import Image from 'next/image';
import cn from 'classnames';
import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import VideoBackground from '@/components/VideoBackground';
import { TRAINING_CENTER } from '@/utils/constants';
import { useEffect, useMemo, useState } from 'react';
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

  const notOnlyGithub = useMemo(() => {
    return !!data.git.find((item) => !item.includes('github'));
  }, [data]);

  useEffect(() => {
    localStorage.setItem(
      'LAST_MODULE',
      decodeURI(params.module).replace(/%3A/g, ':'),
    );
  }, [params.module]);

  useEffect(() => {
    document.title = `${decodeURI(
      params.technology,
    )} – aga.vision – Welcome to our AGA community.`;
  }, [params.technology]);

  return (
    <>
      <main className="relative">
        <BackButton
          href="/training-camp"
          className="fixed top-[20px] left-[20px] md:top-[20px] md:left-[20px]"
        />

        <section className="p-[150px_0_25px] md:p-[100px_0_25px]">
          <VideoBackground />

          <div className="flex flex-col gap-[50px] container">
            <div className="flex flex-col gap-[30px] items-center">
              <h2 className="text-center text-[40px] font-[200]">
                {decodeURI(params.technology)}
              </h2>

              <div className="text-center">{data.description}</div>
            </div>

            {data.git.length !== 0 && (
              <div className="bg-card rounded-[40px] p-[50px] flex flex-col gap-[30px]">
                {!notOnlyGithub && (
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
                )}
                <div className="text-[18px] font-[300] text-center">
                  Go to {notOnlyGithub ? 'source' : 'github'}:
                </div>
                <div className="flex gap-[25px] flex-wrap justify-center">
                  {data.git.map((item, index) => (
                    <Button
                      className="flex items-center gap-[10px]"
                      link={item}
                      linkType="external"
                      key={index}
                    >
                      Source link {index + 1}{' '}
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
            )}

            {data.youtube.length !== 0 && (
              <h4 className="text-center text-[18px] leading-[calc(13/18)]">
                Video-lessons:
              </h4>
            )}

            <div
              className={cn('grid gap-[30px] md:grid-cols-1', {
                'grid-cols-1 max-w-[520px] m-auto w-full':
                  data.youtube.length === 1,
                'grid-cols-2': data.youtube.length !== 1,
              })}
            >
              {data.youtube.map((item) => (
                <TrainingCenter
                  key={item.link}
                  title={item.title}
                  link={item.link}
                  content={item.description}
                  type="video"
                  openModal={() => openModal(item.link)}
                  external={item.external}
                />
              ))}
            </div>

            {data.playlists.length !== 0 && (
              <h4 className="text-center text-[18px] leading-[calc(13/18)]">
                Video channels / playlists:
              </h4>
            )}

            <div
              className={cn('grid gap-[30px] md:grid-cols-1', {
                'grid-cols-1 max-w-[520px] m-auto w-full':
                  data.playlists.length === 1,
                'grid-cols-2': data.playlists.length !== 1,
              })}
            >
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
