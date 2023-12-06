import Button from '@/components/Button';
import PerspectiveCard from '@/components/PerspectiveCard';
import VideoBackground from '@/components/VideoBackground';
import HackathonSignupForm from '@/components/hackathon/HackathonSignupForm';
import HackathonTitle from '@/components/hackathon/HackathonTitle';
import HackathonWelcomeBlock from '@/components/hackathon/HackathonWelcomeBlock';
import Image from 'next/image';

export default function HackathonPage() {
  return (
    <>
      <main>
        <VideoBackground />
        <HackathonWelcomeBlock />

        <div className="container pt-[50px] flex flex-col gap-[100px] md:gap-[50px]">
          <div className="flex gap-[20px] md:flex-col">
            <PerspectiveCard className="flex-1" title="Date">
              February [exact dates TBD]
            </PerspectiveCard>

            <PerspectiveCard className="flex-1" title="Location">
              Livit Hub, Sanur{' '}
              <a
                href="https://maps.app.goo.gl/P623BTmbvgZshbN79"
                target="_blank"
                className="underline"
              >
                [map]
              </a>
            </PerspectiveCard>

            <PerspectiveCard className="flex-1" title="Theme">
              Advancing the Frontiers of AGI
            </PerspectiveCard>
          </div>

          <div className="flex flex-col gap-[20px] text-center max-w-[880px] m-auto text-[18px] md:text-[15px]">
            <p>
              Join us this February for an extraordinary journey in the world of
              AGI, at the much-anticipated sequel to our successful Bali
              Hackathon. Hosted at Livit Hub in Sanur, this event is more than
              just a hackathon - it&apos;s a convergence of brilliant minds from
              universities and coding communities across the globe.
            </p>
            <p>
              After the groundbreaking discoveries and innovations at our last
              event in Bali, we are pushing the boundaries even further. This
              hackathon is part of our ongoing mission to harness the potential
              of AGI for transformative solutions.
            </p>
          </div>

          <div className="h-[1px] w-full bg-white/20"></div>

          <HackathonTitle>Who should join?</HackathonTitle>

          <div className="flex gap-[50px] md:flex-col">
            <div className="flex-1 flex flex-col gap-[20px]">
              <Image
                src="/hackathon/who-should-join-1.svg"
                alt=""
                width={400}
                height={400}
                className="m-auto md:max-w-[250px]"
                style={{
                  filter: 'drop-shadow(0px 10px 80px rgba(17, 244, 209, 0.40))',
                }}
              />

              <div className="p-[50px] rounded-[20px] bg-white/[0.03] flex flex-col gap-[20px] md:p-[50px_30px]">
                <h4 className="text-center text-accentGreen text-[22px] font-[600] md:text-[20px]">
                  University Students
                </h4>
                <div className="h-[1px] w-full bg-white/20"></div>
                <div className="text-center md:text-[15px]">
                  If you&apos;re a student with a passion for AI and coding,
                  this is your platform to shine and contribute to a
                  revolutionary field.
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-[20px]">
              <Image
                src="/hackathon/who-should-join-2.svg"
                alt=""
                width={400}
                height={400}
                className="m-auto md:max-w-[250px]"
                style={{
                  filter: 'drop-shadow(0px 10px 80px rgba(17, 244, 209, 0.40))',
                }}
              />

              <div className="p-[50px] rounded-[20px] bg-white/[0.03] flex flex-col gap-[20px] md:p-[50px_30px]">
                <h4 className="text-center text-accentGreen text-[22px] font-[600] md:text-[20px]">
                  Talented Coders
                </h4>
                <div className="h-[1px] w-full bg-white/20"></div>
                <div className="text-center md:text-[15px]">
                  Independent coders and tech enthusiasts from around the world,
                  we invite you to bring your skills and vision to this global
                  event.
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/20"></div>

          <HackathonTitle>Why participate?</HackathonTitle>

          <div className="flex gap-[20px] md:flex-col">
            <PerspectiveCard className="flex-1" title="Impactful Work">
              Your contributions could shape the future of AGI technology.
            </PerspectiveCard>

            <PerspectiveCard className="flex-1" title="Collaboration">
              Work alongside peers and experts in an environment buzzing with
              innovation.
            </PerspectiveCard>

            <PerspectiveCard className="flex-1" title="Recognition">
              Outstanding projects will gain visibility in the global tech
              community.
            </PerspectiveCard>
          </div>

          <div className="flex flex-col gap-[50px] items-center">
            <Image
              src="/hackathon/sign-up-now.svg"
              alt="Sign Up"
              width={340}
              height={300}
              style={{
                filter: 'drop-shadow(0px 10px 80px rgba(17, 244, 209, 0.40))',
              }}
              className="md:max-w-[200px]"
            />
            <HackathonTitle className="relative">
              Sign up now
              <div
                id="form"
                className="absolute -top-[100px] md:-top-[50px]"
              ></div>
            </HackathonTitle>
          </div>

          <HackathonSignupForm />

          <div className="flex flex-col gap-[50px]">
            <Image
              src="/hackathon/resources.svg"
              alt=""
              width={200}
              height={340}
              style={{
                filter: 'drop-shadow(0px 10px 80px rgba(17, 244, 209, 0.40))',
              }}
              className="self-center md:max-w-[150px]"
            />

            <HackathonTitle>Resources</HackathonTitle>

            <p className="text-center text-[18px] md:text-[15px]">
              To prepare for the hackathon, refer to our{' '}
              <a
                className="border-b-[1px] border-white"
                href="/hackathon/doc.pdf"
                target="_blank"
              >
                THE INFRASTRUCTURE - AGI Discovery
              </a>{' '}
              document for insights and inspiration. This document outlines key
              advancements and concepts in AGI from our previous hackathon,
              setting the stage for what&apos;s to come. Visit also our GitHub
              for the latest changes in code.
            </p>

            <Button
              size="lg"
              className="self-center md:self-stretch"
              icon="arrow"
              link="https://github.com/ArtificialGuardianAngel"
              linkType="external"
            >
              Go to our github
            </Button>
          </div>

          <div className="h-[1px] w-full bg-white/20"></div>

          <div className="flex flex-col gap-[50px]">
            <HackathonTitle>Partnerships and Support</HackathonTitle>

            <p className="text-center text-[18px] md:text-[15px]">
              This event is made possible thanks to our partnership with{' '}
              <a
                href="https://maps.app.goo.gl/P623BTmbvgZshbN79"
                target="_blank"
                className="border-b-[1px] border-white"
              >
                Livit Hub in Sanur
              </a>
              , providing an inspiring venue and logistical support. We also
              extend our gratitude to the universities and tech communities
              globally for encouraging participation.
            </p>
          </div>

          <div className="p-[80px_50px] bg-white/[0.03] flex flex-col gap-[50px] rounded-[20px] max-w-[700px] m-auto w-full border-[3px] border-accentGreen md:p-[50px_30px]">
            <Image
              src="/hackathon/calendar.svg"
              alt=""
              width={100}
              height={112}
              className="self-center md:max-w-[100px]"
            />

            <h5 className="text-[30px] text-white font-[600] text-center md:text-[26px]">
              Mark your calendar!
            </h5>

            <div className="flex flex-col gap-[30px] text-center text-[18px] md:text-[15px]">
              <p className="">
                Get ready for an exhilarating experience that combines
                technology, creativity, and collaboration in pursuit of AGI
                advancements.
              </p>

              <h5 className="font-[600]">See you in February!</h5>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
