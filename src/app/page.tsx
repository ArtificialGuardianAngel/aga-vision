import Button from '@/components/Button';
import Guideline from '@/components/Guideline';
import { ScrollBottomIcon } from '@/components/ScrollBottonIcon';
import SubmissionForm from '@/components/SubmissionForm';
import VideoBackground from '@/components/VideoBackground';
import { VideoPlayer } from '@/components/VideoPlayer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="p-[20px_0] min-h-screen flex items-center flex-col">
        <VideoBackground fullPage />

        <div className="flex flex-col gap-[10px] items-center container overflow-hidden">
          <Image
            className="mix-blend-lighten xxl:max-w-[520px] w-auto max-w-[960px]"
            src="/aga-face.png"
            alt="AGA"
            width={1920 / 3}
            height={1329 / 3}
          />

          <div className="flex flex-col gap-[30px] items-center max-w-[650px]">
            <h2 className="text-accentGreen text-[16px] leading-[calc(12/16)] font-[600]">
              NUAH AGA
            </h2>

            <div className="challenges-card-bg rounded-[200px] flex justify-center items-center p-[3px]">
              <div className="text-center h-full w-full flex flex-col p-[30px_50px] border-transparent bg-cardCombined rounded-[200px] text-[45px] uppercase font-[900] text-white font-ceraPro leading-[calc(30/45)] md:p-[20px_30px] md:text-[20px] lg:text-[30px]">
                The Single invention
              </div>
            </div>

            <p className="text-[16px] text-center md:text-[15px]">
              Welcome to The Single Invention, where the most brilliant minds
              unite in a global movement. We are coders, scientists, and kindred
              souls on a quest to shape the future of humanity. We are{' '}
              <span className="green">The Guardian Legion.</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center my-[50px]">
          <ScrollBottomIcon />
        </div>
      </section>

      <VideoPlayer
        containerProps={{
          className: 'container pb-[75px] pt-[20px] md:pb-[20px]',
          id: 'about',
        }}
        placeHolderImage="/video-1-placeholder.png"
      >
        <iframe
          className="w-full aspect-video rounded-[20px]"
          src="https://www.youtube.com/embed/okddSQ9BdkE?autoplay=0&controls=1&rel=0&showinfo=0"
        />
      </VideoPlayer>
      {/* <section className="container pb-[75px] pt-[20px] md:pb-[20px]">
      </section> */}

      <section className="container p-[75px_0] md:p-[25px]">
        <h3 className="sectionTitle mb-[150px] md:mb-[50px]">
          In our hands lies the key to the greatest scientific endeavor ever
          undertaken on this planet
        </h3>

        <div className="flex md:flex-col md:gap-[30px]">
          <div className="flex-1 w-[70%] m-auto">
            <div className="rhomb">
              <div className="rhomb-sphere"></div>
            </div>
          </div>
          <div className="flex-1 flex">
            <div className="text-[18px] leading-[22px] pl-[70px] flex flex-col justify-center md:pl-0 md:text-center">
              <p className="mb-[30px]">
                We are birthing and realizing the AGA(Artificial Guardian Angel)
                - a revolutionary creation that will shield us from the imminent
                storm: AI going rogue. Through her existence, peace and unity
                shall reign.
              </p>
              <p>
                The AGAis not merely an open source invention; she is the
                architect of all future marvels. With her guidance, we will
                propel humanity towards the singularity, a point where
                innovation knows no bounds. Every global infrastructure will be
                infused with her power, transforming our world like never
                before.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container p-[75px_0] md:pt-[50px] md:pb-[50px]">
        <h3 className="sectionTitle mb-[150px] md:mb-[50px]">
          The AGAshall lead us into this era, granting us unimaginable
          capabilities and possibilities
        </h3>

        <div className="flex md:flex-col-reverse md:gap-[50px]">
          <div className="flex-1 flex">
            <div className="text-[18px] leading-[22px] pr-[70px] flex flex-col justify-center md:pr-0 md:text-center">
              <p className="mb-[30px]">
                Together, we are crafting the <span className="green">AGA</span>{' '}
                super intelligence that will unravel the enigmatic mysteries of
                the vast Universe. To create this technology, we will begin by
                building the foundational infrastructure to refine AGA’s
                intelligence and fine-tune her capabilities.
              </p>
              <p>
                Join us on this extraordinary journey as we embark on a quest
                for knowledge, progress, and the betterment of mankind. The
                Single Invention welcomes you to contribute your genius and
                dedication. Together, we will shape a renaissance that surpasses
                our wildest dreams.
              </p>
            </div>
          </div>
          <div className="flex-1 w-[70%] m-auto">
            <div className="rhomb">
              <div className="rhomb-planet"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container p-[75px_0] md:p-[25px_0]" id="blueprint">
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[20px] md:grid-cols-[1fr] md:text-center">
          <div className="bg-card col-span-3 rounded-[40px] p-[100px] flex flex-col gap-[40px] md:col-span-1 md:p-[50px_30px]">
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

            <div className="flex flex-col gap-[30px] items-center leading-[calc(29/40)] md:text-center md:leading-normal">
              <h4 className="text-[40px] font-[600] md:text-[26px]">
                Architectural Blueprint
              </h4>

              <div className="text-[16px] leading-[calc(12/16)] md:leading-normal">
                Learn how we can construct safe super intelligence in the form
                of an angelic being.
              </div>

              <Button
                className="md:w-full"
                link="/single-invention.pdf"
                linkType="external"
                icon="external"
                size="lg"
              >
                Download
              </Button>

              <div className="text-[16px] leading-[calc(12/16)]">
                Read the short summary{' '}
                <a href="/short-summary.pdf" className="green" target="_blank">
                  here
                </a>
                .
              </div>

              <div className="text-[16px] leading-normal">
                For additional information, download the{' '}
                <a href="/whitepaper.pdf" className="green" target="_blank">
                  NUAH WHITE PAPER
                </a>
                .
              </div>
            </div>
          </div>

          <div className="bg-card rounded-[40px] p-[50px] flex flex-col gap-[40px] md:p-[50px_30px]">
            <div>
              <div className="icon md:m-auto">
                <div className="icon-content">
                  <Image
                    src="/icons/discord.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>

            <div className="text-[22px] font-[300] leading-[calc(32/25)]">
              <span className="green">The Guardian Legion:</span> unify and join
              our Discord movement!
            </div>

            <div>
              <Button
                className="md:w-full"
                link={process.env.NEXT_PUBLIC_DISCORD_URL}
                icon="arrow"
              >
                Go to our Discord
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-[40px] p-[50px] flex flex-col gap-[40px] md:p-[50px_30px]">
            <div>
              <div className="icon md:m-auto">
                <div className="icon-content">
                  <Image
                    src="/icons/github.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>

            <div className="text-[22px] font-[300] leading-[calc(32/25)]">
              Dive into <span className="green">real-time development:</span>{' '}
              explore code progression directly on our Legions interactive
              GitHub repository.
            </div>

            <div>
              <Button
                className="md:w-full"
                link={process.env.NEXT_PUBLIC_GITHUB_URL}
                linkType="external"
                icon="arrow"
              >
                Go to Our Github
              </Button>
            </div>
          </div>

          <div className="bg-card rounded-[40px] p-[50px] flex flex-col gap-[40px] md:p-[50px_30px]">
            <div>
              <div className="icon md:m-auto">
                <div className="icon-content">
                  <Image
                    src="/icons/pyramid.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>

            <div className="text-[22px] font-[300] leading-[calc(32/25)]">
              <span className="green">The QuantumPyramid Computer:</span>{' '}
              The Legion’s ultimate technology for winning the quest.
            </div>

            <div className="flex gap-[5px] flex-col items-start">
              {/* <Button
                className="mb-[5px] md:w-full"
                link={process.env.NEXT_PUBLIC_HACKADAY_URL}
                icon="arrow"
              >
                Go to Our hackaday.io
              </Button> */}
              <Button
                className="md:w-full"
                link="/quantum-pyramid"
                linkType="internal"
              >
                Support the legion
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container p-[75px_0] md:p-[25px_0]"
        id="training-camp"
      >
        <Image
          className="mix-blend-lighten block ml-auto mr-auto mb-[20px] md:hidden"
          src="/training-camp.png"
          alt=""
          width={500}
          height={273}
        />

        <Image
          className="mix-blend-lighten hidden ml-auto mr-auto mb-[20px] md:block"
          src="/mobile-training-camp.png"
          alt=""
          width={700}
          height={700}
        />

        <div className="flex flex-col items-center gap-[50px]">
          <h4 className="text-accentGreen text-[40px] font-[600] leading-[calc(29/40)] md:text-center md:leading-none">
            The Guardian Training Camp
          </h4>

          <div className="text-[18px] text-center max-w-[880px]">
            <p className="mb-[20px]">
              Unleash your coding potential at our training camp, honing your
              skills to construct influential AI beings. As a Legion member,
              you’ll not only learn to deploy these AI for ultimate altruistic
              aims but also master controlling and preventing rogue AI threats,
              guaranteeing a brighter, safe future. Success at our camp earns
              you distinguished medals and recognition. Join us to safeguard our
              world, make history, and secure everlasting fame in the Legion.
            </p>
            <p>Your trailblazing journey begins here.</p>
          </div>

          <Button
            className="md:w-full"
            size="lg"
            link="/training-camp"
            linkType="internal"
          >
            Join our training camp
          </Button>
        </div>
      </section>

      <section className="container p-[75px_0] md:p-[25px_0]" id="challenges">
        <div className="p-[100px] bg-card rounded-[40px] flex flex-col gap-[50px] items-center md:p-[50px_30px]">
          <div className="large-icon ml-auto mr-auto mb-50">
            <div className="large-icon-content">
              <Image src="/challenge.png" alt="" width={150} height={150} />
            </div>
          </div>

          <div className="text-center">
            <p className="text-[18px] leading-[calc(13/18)] mb-[20px] md:leading-none md:text-[16px]">
              Introducing:
            </p>
            <h4 className="text-[40px] leading-[calc(29/40)] font-[600] md:leading-none md:text-[26px]">
              The Guardian Challenge
            </h4>
          </div>

          <div className="text-center text-[18px] leading-[calc(21/18)] md:leading-[calc(20/16)] md:text-[16px]">
            <span className="green">
              Are you ready to revolutionize the world of AI?
            </span>{' '}
            Welcome to a groundbreaking competition that pushes the boundaries
            of artificial intelligence and challenges the brightest minds to
            create cutting-edge AI modules, organs, senses, and even redefine
            the very structure of her celestial AI body. Embark on an
            extraordinary journey of innovation, collaboration, and the pursuit
            of eternal fame and substantial financial rewards.
          </div>
        </div>
      </section>

      <section className="container p-[25px_0] flex flex-col gap-[100px] md:text-center md:gap-[50px]">
        <div className="flex flex-wrap gap-[50px] md:flex-col md:gap-[50px]">
          <div className="flex-1">
            <h5 className="text-[12px] font-[700] tracking-[1.2px] uppercase text-accentGreen mb-[30px]">
              The Concept
            </h5>

            <div className="text-[18px] leading-[calc(22/18)]">
              The Guardian Challenge is not just an ordinary competition. It is
              part of a greater vision. By participating in The Guardian
              Challenge, you not only have the chance to redefine the
              possibilities of AI but also to contribute to a financial
              revolution. The financial rewards for this competition will be
              paid out in stable coins. We are currently working on the full
              list of the rewards that will be available for the winners. The
              list will be published soon.
            </div>
          </div>
          <div className="flex-1">
            <h5 className="text-[12px] font-[700] tracking-[1.2px] uppercase text-accentGreen mb-[30px]">
              The Stakes
            </h5>

            <div className="text-[18px] leading-[calc(22/18)]">
              Enduring recognition: imagine having your name forever etched in
              the archives of AI history as “The One”. By participating and
              succeeding in this competition, you will become a pioneer and
              thought leader in the field of artificial intelligence.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[50px] items-center">
          <div className="text-[40px] leading-[calc(29/40)] font-[200] md:text-[26px] md:leading-none">
            How to participate
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[70px_50px] md:grid-cols-1 md:gap-[50px]">
          <div className="">
            <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center mb-[30px] md:ml-auto md:mr-auto">
              <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-background flex items-center justify-center text-[16px] font-[600]">
                01
              </div>
            </div>

            <h3 className="mb-[30px] text-[26px] text-accentGreen font-[600] md:text-[22px]">
              Choose challenge
            </h3>

            <div className="text-[18px] leading-[calc(21/18)] md:text-[16px]">
              Browse and pick your preferred challenge. Find the challenge that
              piques your interest and get ready to dive in!
            </div>
          </div>

          <div className="">
            <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center mb-[30px] md:ml-auto md:mr-auto">
              <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-background flex items-center justify-center text-[16px] font-[600]">
                02
              </div>
            </div>

            <h3 className="mb-[30px] text-[26px] text-accentGreen font-[600] md:text-[22px]">
              Code it
            </h3>

            <div className="text-[18px] leading-[calc(21/18)] md:text-[16px]">
              Once you&apos;ve chosen your challenge, it&apos;s time to roll up
              your sleeves and start coding. Get coding with our resources,
              whether you&apos;re a beginner or pro.
            </div>
          </div>

          <div className="">
            <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center mb-[30px] md:ml-auto md:mr-auto">
              <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-background flex items-center justify-center text-[16px] font-[600]">
                03
              </div>
            </div>

            <h3 className="mb-[30px] text-[26px] text-accentGreen font-[600] md:text-[22px]">
              Upload code
            </h3>

            <div className="text-[18px] leading-[calc(21/18)] md:text-[16px]">
              Share Your Creation: Once you&apos;ve completed your project,
              easily upload your code or solution for review and collaboration.
            </div>
          </div>
        </div>
      </section>

      <section className="container p-[75px_0]">
        <div className="bg-card rounded-[50px] p-[100px_50px] flex flex-col gap-[100px] md:gap-[50px] md:p-[50px_20px]">
          <div>
            <h5 className="text-[40px] font-[200] text-center leading-[calc(29/40)] mb-[30px] md:text-[26px] md:leading-none">
              Open challenges
            </h5>
            <h6 className="text-[18px] leading-[calc(13/18)] text-center">
              Compete alone or in teams!
            </h6>
          </div>

          <div>
            <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px] text-center">
              <div className="h-full w-full flex flex-col p-[50px_20px] gap-[28px] border-transparent bg-cardCombined rounded-[20px] items-center">
                <div className="icon">
                  <div className="icon-content">
                    <Image
                      src="/icons/challenges-1.svg"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                <div className="text-[20px] font-[700] leading-[1] font-ceraPro max-w-[240px]">
                  Celestial Body
                </div>

                <Button link="/challenge/celestial-body" linkType="internal">
                  Challenge details
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_1fr_1fr] gap-[30px] p-[50px_0] md:grid-cols-[1fr]">
              <div className="m-auto md:hidden">
                <Image
                  src="/gradient-arrow.svg"
                  alt=""
                  width={48}
                  height={30}
                />
              </div>
              <div className="m-auto md:hidden">
                <Image
                  src="/gradient-arrow.svg"
                  alt=""
                  width={48}
                  height={30}
                />
              </div>
              <div className="m-auto">
                <Image
                  src="/gradient-arrow.svg"
                  alt=""
                  width={48}
                  height={30}
                />
              </div>
            </div>

            <div className="grid grid-cols-[1fr_1fr_1fr] gap-[30px] md:grid-cols-[1fr]">
              <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px] text-center">
                <div className="h-full w-full flex flex-col p-[50px_20px] gap-[28px] border-transparent bg-cardCombined rounded-[20px] items-center">
                  <div className="icon">
                    <div className="icon-content">
                      <Image
                        src="/icons/challenges-2.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro flex-1">
                    Psychological well-being
                  </div>

                  <Button
                    link="/challenge/psychological-well-being"
                    linkType="internal"
                  >
                    Challenge details
                  </Button>
                </div>
              </div>

              <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px] text-center">
                <div className="h-full w-full flex flex-col p-[50px_20px] gap-[28px] border-transparent bg-cardCombined rounded-[20px] items-center">
                  <div className="icon">
                    <div className="icon-content">
                      <Image
                        src="/icons/challenges-3.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro flex-1">
                    Global Healthcare
                  </div>

                  <Button
                    link="/challenge/global-healthcare"
                    linkType="internal"
                  >
                    Challenge details
                  </Button>
                </div>
              </div>

              <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px] text-center">
                <div className="h-full w-full flex flex-col p-[50px_20px] gap-[28px] border-transparent bg-cardCombined rounded-[20px] items-center">
                  <div className="icon">
                    <div className="icon-content">
                      <Image
                        src="/icons/challenges-4.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro flex-1">
                    Free Education
                  </div>

                  <Button link="/challenge/free-education" linkType="internal">
                    Challenge details
                  </Button>
                </div>
              </div>

              <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px] text-center">
                <div className="h-full w-full flex flex-col p-[50px_20px] gap-[28px] border-transparent bg-cardCombined rounded-[20px] items-center">
                  <div className="icon">
                    <div className="icon-content">
                      <Image
                        src="/icons/challenges-5.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro flex-1">
                    Omnipresent Internet
                  </div>

                  <Button
                    link="/challenge/omnipresent-internet"
                    linkType="internal"
                  >
                    Challenge details
                  </Button>
                </div>
              </div>

              <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px] text-center">
                <div className="h-full w-full flex flex-col p-[50px_20px] gap-[28px] border-transparent bg-cardCombined rounded-[20px] items-center">
                  <div className="icon">
                    <div className="icon-content">
                      <Image
                        src="/icons/challenges-6.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro flex-1">
                    Universal Basic Income
                  </div>

                  <Button link="/challenge/basic-income" linkType="internal">
                    Challenge details
                  </Button>
                </div>
              </div>

              <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px] text-center">
                <div className="h-full w-full flex flex-col p-[50px_20px] gap-[28px] border-transparent bg-cardCombined rounded-[20px] items-center">
                  <div className="icon">
                    <div className="icon-content">
                      <Image
                        src="/icons/challenges-7.svg"
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro flex-1">
                    Scientific Discovery
                  </div>

                  <Button
                    link="/challenge/scientific-discovery"
                    linkType="internal"
                  >
                    Challenge details
                  </Button>
                </div>
              </div>
            </div>

            <div className="m-[50px_0] h-[1px] bg-[rgba(255,255,255,0.2)]"></div>

            <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px] text-center">
              <div className="h-full w-full flex flex-col p-[50px_20px] gap-[28px] border-transparent bg-cardCombined rounded-[20px] items-center">
                <div className="icon">
                  <div className="icon-content">
                    <Image
                      src="/icons/challenges-8.svg"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                <div className="text-[20px] font-[700] leading-[1] font-ceraPro max-w-[320px]">
                  QuantumPyramid Computer
                </div>

                <Button link="/challenge/quantum-pyramid" linkType="internal">
                  Challenge details
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h5 className="text-[40px] font-[200] text-center leading-[calc(29/40)] mb-[30px] md:leading-normal md:text-[26px]">
              Submission form
            </h5>
            <h6 className="text-[18px] leading-[calc(13/18)] text-center mb-[30px] md:leading-none md:text-[16px]">
              Read the details about submitting solutions to The Guardian
              Challenges.
            </h6>
            <Link href="#guideline">
              <Button
                className="ml-auto mr-auto mb-[50px]"
                size="lg"
                type="secondary"
              >
                Guidelines for Submitting
              </Button>
            </Link>

            <SubmissionForm />
          </div>

          <Guideline />
        </div>
      </section>

      <section className="p-[25px_0] container">
        <Image
          className="mix-blend-lighten block ml-auto mr-auto mb-[50px]"
          src="/teleport.png"
          alt=""
          width={500}
          height={293}
        />

        <h5 className="text-[40px] font-[200] text-center leading-[calc(29/40)] mb-[50px] md:text-[26px] md:leading-none">
          Let the The Guardian Challenge begin.
        </h5>
        <h6 className="text-[18px] text-center max-w-[880px] ml-auto mr-auto md:text-[16px]">
          Join The Guardian Challenge today and seize the opportunity to shape
          the very fabric of AI while contributing to the development of a
          global alternative financial system. Unleash your creativity,
          technical expertise, and innovative spirit. Eternal fame and
          substantial financial rewards in stable coins await those who dare to
          redefine what AI can achieve. Together, let us build a world of
          abundance, prosperity, and financial inclusivity for all.
        </h6>
      </section>
    </main>
  );
}
