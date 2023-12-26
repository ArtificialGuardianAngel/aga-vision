import VideoBackground from '@/components/VideoBackground';
import { VideoPlayer } from '@/components/VideoPlayer';
import CodeInUniversa from '@/components/universa/CodeInUniversa';
import DevelopLink from '@/components/universa/DevelopLink';
import UniversaCards from '@/components/universa/UniversaCards';
import UniversaCombinations from '@/components/universa/UniversaCombinations';
import UniversaFeatures from '@/components/universa/UniversaFeatures';
import UniversaLinks from '@/components/universa/UniversaLinks';
import UniversaWelcomeBlock from '@/components/universa/UniversaWelcomeBlock';

export default function UniversaPage() {
  return (
    <main>
      <VideoBackground />
      <UniversaWelcomeBlock />

      <div className="container">
        <div className="p-[50px_0_0] flex flex-col gap-[70px] lg:gap-[50px]">
          <VideoPlayer
            containerProps={{
              className: 'container pb-[75px] pt-[20px] md:pb-[20px]',
              id: 'about',
            }}
            placeHolderImage="/universa/universa-video-placeholder.png"
          >
            <iframe
              className="w-full aspect-video rounded-[20px]"
              src="https://www.youtube.com/embed/Np88fURpJeg?autoplay=0&controls=1&rel=0&showinfo=0"
            />
          </VideoPlayer>

          <CodeInUniversa />

          <UniversaFeatures />

          <UniversaCombinations />

          <UniversaCards />

          <UniversaLinks />

          <DevelopLink />
        </div>
      </div>
    </main>
  );
}
