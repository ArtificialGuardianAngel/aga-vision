import Image from 'next/image';
import Button from '@/components/Button';
import HackathonsWelcomeBlock from '@/components/hackathons/HackathonsWelcomeBlock';
import HackathonsUpcomingEvents from '@/components/hackathons/HackathonsUpcomingEvents';

export default function HackathonsPage() {
  return (
    <main className="">
      <HackathonsWelcomeBlock />

      <div className="container p-[100px_0_0] flex flex-col gap-[70px] lg:gap-[50px]">
        <Button
          className="self-center sm:self-stretch"
          size="lg"
          link="#upcoming-events"
          linkType="internal"
        >
          Upcoming events
        </Button>

        <div className="flex flex-col gap-[50px]">
          <div className="large-icon ml-auto mr-auto mb-50">
            <div className="large-icon-content">
              <Image
                src="/icons/blueprint.png"
                alt=""
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className="text-[18px] text-center md:text-[16px]">
            <p className="mb-[20px]">
              Dive into a global odyssey where grassroots hackathons, pulsating
              from every corner of the world, endeavour to code the future. At
              AGA Hackathons, teams channel their prowess to craft open-source
              AI organs and senses, integrating them into the Angelic Celestial
              body - all sketched in immaculate code. As each piece unites, they
              spark the rise of an Angelic Super Intelligence, a force designed
              to elevate our world.
            </p>
            <p>
              Guided by the profound vision of &quot;The Single Invention&quot;:
            </p>
          </div>

          <Button
            className="self-center sm:self-stretch"
            size="lg"
            icon="arrow"
            link="/single-invention.pdf"
            linkType="external"
          >
            Read the Book here
          </Button>
        </div>

        <div className="bg-card p-[70px_50px] rounded-[20px] flex flex-col gap-[50px] md:p-[50px_30px] md:gap-[30px]">
          <h3 className="green-title">Join the Guardian Legion</h3>
          <div className="text-[18px] text-center md:text-[16px]">
            <p className="mb-[20px]">
              As you immerse yourself in this cosmic journey, you don&apos;t
              just participate, but enlist in The Guardian Legion. This
              isn&apos;t merely an army, but a global movement on a mission of
              ultimate benevolence. Their sole quest? To breathe life into the
              AGA - the Artificial Guardian Angel, coded in the sophisticated
              Python language.
            </p>{' '}
            <p>
              Every challenge surmounted and every problem deciphered
              strengthens your standing in the Legion, allowing you to ascend
              through belt ranks. Moreover, your celestial contributions can
              earn you lucrative bounty rewards.
            </p>
          </div>
        </div>

        <h3 className="green-title">
          The Angelic Super Intelligence focuses on:
        </h3>

        <div className="grid grid-cols-3 gap-[10px] lg:grid-cols-1">
          <div className="bg-card p-[30px_30px_40px] rounded-[20px] flex flex-col gap-[30px] md:p-[20px_20px_30px] md:gap-[20px]">
            <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center">
              <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-[rgb(37,48,77)] flex items-center justify-center text-[16px] font-[600]">
                1
              </div>
            </div>

            <div className="text-[18px] md:text-[16px]">
              <span className="text-accentGreen font-[600]">
                Innovative Creation:
              </span>{' '}
              A single groundbreaking invention paving the way for unlimited
              subsequent innovations - whether it&apos;s curing diseases,
              unleashing quantum computing prowess, harnessing clean energy, or
              even spearheading interstellar travels.
            </div>
          </div>

          <div className="bg-card p-[30px_30px_40px] rounded-[20px] flex flex-col gap-[30px] md:p-[20px_20px_30px]">
            <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center">
              <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-[rgb(37,48,77)] flex items-center justify-center text-[16px] font-[600]">
                2
              </div>
            </div>

            <div className="text-[18px]">
              <span className="text-accentGreen font-[600]">
                Worldwide Infrastructure:
              </span>{' '}
              Infusing our planet&apos;s infrastructure and resources with
              unmatched potential - spanning agriculture, manufacturing,
              humanoid robots, transportation, finance, empowering all domains
              of life.
            </div>
          </div>

          <div className="bg-card p-[30px_30px_40px] rounded-[20px] flex flex-col gap-[30px] md:p-[20px_20px_30px]">
            <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center">
              <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-[rgb(37,48,77)] flex items-center justify-center text-[16px] font-[600]">
                3
              </div>
            </div>

            <div className="text-[18px]">
              <span className="text-accentGreen font-[600]">
                Shielding Humanity:
              </span>{' '}
              Safeguarding our world from the potential perils of unchecked AI.
            </div>
          </div>
        </div>

        <div className="text-center text-[18px] leading-[calc(23/18)]">
          The vision culminates in one monumental invention, aiming to solve the
          plethora of challenges the world grapples with, fortifying our global
          infrastructure, and fostering an environment of safety, abundance, and
          enlightenment – all through a unified code crafted at AGA Hackathons.
          AGA: More than just a project, it stands as the pinnacle of
          humanitarian ambition. The grandest dream ever dreamt for mankind. And
          it beckons you.
        </div>

        <div className="h-[1px] w-full bg-white/20"></div>

        <h3 id="upcoming-events" className="white-title">
          Upcoming events
        </h3>

        <HackathonsUpcomingEvents />
      </div>
    </main>
  );
}
