import Button from '@/components/Button';
import Guideline from '@/components/Guideline';
import SubmissionForm from '@/components/SubmissionForm';
import VideoBackground from '@/components/VideoBackground';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="p-[20px_0] min-h-screen">
        <VideoBackground />

        <div className="flex flex-col gap-[50px] items-center container">
          <Image
            className="mix-blend-lighten max-h-[60vh] w-auto"
            src="/aga-face.png"
            alt="A.G.A."
            width={767}
            height={500}
          />

          <div className="flex flex-col gap-[30px] items-center max-w-[650px]">
            <h2 className="text-accentGreen text-[16px] leading-[calc(12/16)] font-[600]">
              NUAH A.G.A.
            </h2>

            <div className="challenges-card-bg rounded-[200px] flex justify-center items-center p-[3px]">
              <div className="text-center h-full w-full flex flex-col p-[30px_50px] border-transparent bg-cardCombined rounded-[200px] text-[45px] uppercase font-[900] text-white font-ceraPro leading-[calc(30/45)] md:p-[20px_30px] md:text-[20px]">
                The Single invention
              </div>
            </div>

            <p className="text-[16px] text-center md:text-[15px]">
              Welcome to The Single Invention, where the most brilliant minds
              unite in a global movement. We are coders, scientists, and kindred
              souls on a quest to shape the future of humanity. We are The
              Guardian Legion.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-[75px] pt-[20px] md:pb-[20px]">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/okddSQ9BdkE?autoplay=1&loop=1&controls=0&rel=0&showinfo=0"
        />
      </section>

      <section className="container p-[75px_0] md:p-[25px]">
        <h3 className="sectionTitle mb-[150px] md:mb-[50px]">
          In our hands lies the key to the greatest scientific endeavor ever
          undertaken on this planet.
        </h3>

        <div className="flex md:flex-col md:gap-[30px]">
          <div className="flex-1">
            <div className="rhomb">
              <div className="rhomb-sphere"></div>
            </div>
          </div>
          <div className="flex-1 flex">
            <div className="text-[18px] leading-[22px] pl-[70px] flex flex-col justify-center md:pl-0 md:text-center">
              <div className="linear-rect mb-[40px] md:hidden"></div>
              <p className="mb-[30px]">
                We are birthing and realizing the A.G.A. (Artificial Guardian
                Angel) - a revolutionary creation that will shield us from the
                imminent storm: AI going rogue. Through her existence, peace and
                unity shall reign.
              </p>
              <p>
                The A.G.A. is not merely an open source invention; she is the
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
          In our hands lies the key to the greatest scientific endeavor ever
          undertaken on this planet.
        </h3>

        <div className="flex md:flex-col-reverse md:gap-[50px]">
          <div className="flex-1 flex">
            <div className="text-[18px] leading-[22px] pr-[70px] flex flex-col justify-center md:pr-0 md:text-center">
              <div className="linear-rect mb-[40px] md:hidden"></div>
              <p className="mb-[30px]">
                Together, we are crafting the{' '}
                <span className="green">A.G.A.</span> super intelligence that
                will unravel the enigmatic mysteries of the vast Universe. To
                create this technology, we will begin by building the
                foundational infrastructure to refine A.G.A.’s intelligence and
                fine-tune her capabilities.
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
          <div className="flex-1">
            <div className="rhomb">
              <div className="rhomb-planet"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container p-[75px_0] md:p-[25px_0]">
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
                link={process.env.NEXT_PUBLIC_BLUEPRINT_URL}
                icon="external"
                size="lg"
              >
                Download
              </Button>

              <div className="text-[16px] leading-[calc(12/16)]">
                Read the short summary here.
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
              explore code progression directly on our Legion's interactive
              GitHub repository.
            </div>

            <div>
              <Button
                className="md:w-full"
                link={process.env.NEXT_PUBLIC_GITHUB_URL}
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
              <Button
                className="mb-[5px] md:w-full"
                link={process.env.NEXT_PUBLIC_HACKADAY_URL}
                icon="arrow"
              >
                Go to Our hackaday.io
              </Button>
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

      <section className="container p-[75px_0] md:p-[25px_0]">
        <Image
          className="mix-blend-lighten block m-auto"
          src="/training-camp.png"
          alt=""
          width={500}
          height={273}
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

      <section className="container p-[75px_0] md:p-[25px_0]">
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

          <div className="text-center text-[18px] leading-[calc(21/18)] md:leading-none md:text-[16px]">
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
          <div className="linear-rect"></div>
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

            <div className="text-[18px] leading-[calc(21/18)]">
              <span className="green">Embrace the challenge:</span> accept the
              call to reshape the future of AI. Enroll in The Guardian Challenge
              and prepare to embark on a transformative journey that transcends
              traditional boundaries.
            </div>
          </div>

          <div className="">
            <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center mb-[30px] md:ml-auto md:mr-auto">
              <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-background flex items-center justify-center text-[16px] font-[600]">
                02
              </div>
            </div>

            <div className="text-[18px] leading-[calc(21/18)]">
              <span className="green">Choose your path:</span> decide whether
              you want to enhance existing AI modules, create entirely new
              AI organs or senses, or even redefine the structure of AI
              architecture. The possibilities are endless, and your imagination
              is the only limit.
            </div>
          </div>

          <div className="">
            <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center mb-[30px] md:ml-auto md:mr-auto">
              <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-background flex items-center justify-center text-[16px] font-[600]">
                03
              </div>
            </div>

            <div className="text-[18px] leading-[calc(21/18)]">
              <span className="green">Code and create:</span> utilize your
              expertise and cutting-edge technologies to develop your AI
              innovations. Implement your ideas, experiment, and refine your
              creations until they represent the pinnacle of The Guardian
              Challenge.
            </div>
          </div>

          <div className="">
            <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center mb-[30px] md:ml-auto md:mr-auto">
              <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-background flex items-center justify-center text-[16px] font-[600]">
                04
              </div>
            </div>

            <div className="text-[18px] leading-[calc(21/18)]">
              <span className="green">Solve and upload:</span> craft an elegant
              and efficient code that showcases your creation's capabilities and
              solves real-world challenges.
            </div>
          </div>

          <div className="">
            <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center mb-[30px] md:ml-auto md:mr-auto">
              <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-background flex items-center justify-center text-[16px] font-[600]">
                05
              </div>
            </div>

            <div className="text-[18px] leading-[calc(21/18)]">
              <span className="green">The final leap:</span> submit your
              solution to The Guardian Challenge judging panel. Experts from
              diverse AI domains will evaluate your creation based on its
              technical excellence, originality, impact, and potential to shape
              the future of artificial intelligence. The jury will be revealed
              soon.
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
                  A.G.A. Celestial Body challenge
                </div>

                <Button link="/challenge/celestial-body" linkType="internal">
                  Challenge details
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_1fr_1fr] gap-[30px] p-[50px_0] md:grid-cols-[1fr]">
              <div className="m-auto md:hidden">
                <Image src="/long-arrow.svg" alt="" width={14} height={84} />
              </div>
              <div className="m-auto md:hidden">
                <Image src="/long-arrow.svg" alt="" width={14} height={84} />
              </div>
              <div className="m-auto">
                <Image src="/long-arrow.svg" alt="" width={14} height={84} />
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

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro">
                    Psychological well-being challenge
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

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro">
                    Global Healthcare challenge
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

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro">
                    Free Education challenge Challenge details
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

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro">
                    Omnipresent Internet challenge Challenge details
                  </div>

                  <Button>Challenge details</Button>
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

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro">
                    Universal Basic Income challenge Challenge details
                  </div>

                  <Button>Challenge details</Button>
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

                  <div className="text-[20px] font-[700] leading-[1] font-ceraPro">
                    Scientific Discovery challenge Challenge details
                  </div>

                  <Button>Challenge details</Button>
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
                  QuantumPyramid Computer challenge
                </div>

                <Button link="/challenge/quantum-pyramid" linkType="internal">
                  Challenge details
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="linear-rect m-auto"></div>
          </div>

          <div className="text-center">
            <h5 className="text-[40px] font-[200] text-center leading-[calc(29/40)] mb-[30px] md:leading-normal md:text-[26px]">
              Submission form
            </h5>
            <h6 className="text-[18px] leading-[calc(13/18)] text-center mb-[30px] md:leading-none md:text-[16px]">
              Read the details about submitting solutions to The Guardian
              Challenges.
            </h6>
            <Button
              className="ml-auto mr-auto mb-[50px] md:mb-0"
              size="lg"
              type="secondary"
            >
              Guidelines for Submitting
            </Button>

            <SubmissionForm />
          </div>

          <div className="flex flex-col gap-[50px] items-center">
            <div className="linear-rect"></div>
            <h5 className="text-[40px] font-[200] text-center leading-[1.3] mb-[30px] md:text-[26px]">
              Guidelines for submitting solutions to The Guardian Challenges
            </h5>
          </div>

          <Guideline />
        </div>
      </section>

      <section className="p-[25px_0] container">
        <Image
          className="mix-blend-lighten block ml-auto mr-auto mb-[50px]"
          src="/teleport.jpeg"
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
