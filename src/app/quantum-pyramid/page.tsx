import BackButton from '@/components/BackButton';
import PreOrderForm from '@/components/PreOrderForm';
import TechnicalSpecsCard from '@/components/TechnicalSpecsCard';
import VideoBackground from '@/components/VideoBackground';
import { QUANTUM_PYRAMID_SPECS } from '@/utils/constants';
import Image from 'next/image';

export default function QuantumPyramid() {
  return (
    <main className="relative">
      <BackButton className="fixed top-[50px] left-[50px] md:top-[20px] md:left-[20px]" />

      <section className="p-[100px_0_25px] md:p-[50px_0_25px]">
        <VideoBackground />

        <div className="container flex flex-col gap-[100px] md:gap-[50px]">
          <div className="flex flex-col items-center">
            <Image
              className="mix-blend-lighten max-[1560px]:max-w-[620px]"
              alt=""
              src="/quantum-pyramid.png"
              width={730}
              height={550}
            />
            <div className="p-[30px_50px] rounded-[100px] bg-[rgba(255,255,255,0.05)] text-[40px] font-[200] leading-[calc(29/40)] mb-[50px] md:text-[20px] md:p-[20px_30px]">
              QuantumPyramid Computer
            </div>
            <div className="text-center text-[18px] max-w-[880px] m-auto md:text-[16px]">
              <span className="green">
                Introducing the future of computing:
              </span>{' '}
              The QuantumPyramid. Support the AGA with building the
              QuantumPyramid Computer and get exclusive early access.
            </div>
          </div>

          <div className="bg-card p-[70px_50px] flex flex-col gap-[50px] text-center text-[18px] rounded-[20px] md:p-[50px_30px] md:text-[16px]">
            <div>
              Step into the future of technology with the world’s first
              QuantumPyramid Computer. As we venture into the realms of
              unprecedented computing power, we invite you to be a pioneer in
              this revolutionary journey. Join our pre-order round today and
              secure your position as one of the first to experience the
              limitless potential of quantum computing, delivered right to your
              doorstep.
            </div>

            <h4 className="text-[30px] font-[300]">
              Pre-order exclusive: be the first in the world.
            </h4>

            <div>
              By pre-ordering the QuantumPyramid Computer, you not only secure
              your device early but also gain an incredible advantage - an
              exclusive 1-year period of access before it’s released to the
              general market. During this time, you’ll have unparalleled
              opportunities to explore, innovate, and unleash the true power of
              quantum computing.Reserve your place in history by pre-ordering
              the exclusive first batch of QuantumPyramid Computers. By
              participating in this pre-order offer, you ensure that you’ll be
              among the first to own this cutting-edge device and enjoy a full
              year of unmatched exclusivity.
            </div>
          </div>

          <div className="flex flex-col gap-[50px] items-center">
            <div className="linear-rect"></div>

            <h4 className="text-[30px] font-[300] md:text-[26px]">
              Pre-order details
            </h4>

            <div className="grid grid-cols-3 w-full gap-[20px] md:grid-cols-1 md:text-center">
              <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px]">
                <div className="h-full w-full flex flex-col p-[50px_40px] gap-[20px] border-transparent bg-cardCombined rounded-[20px]">
                  <div className="text-[16px] leading-[12px]">Obtain</div>

                  <div className="h-[1px] bg-[rgba(255,255,255,0.2)]"></div>

                  <div className="text-[20px] font-[600] leading-[23px]">
                    QuantumPyramid computer
                  </div>
                </div>
              </div>

              <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px]">
                <div className="h-full w-full flex flex-col p-[50px_40px] gap-[20px] border-transparent bg-cardCombined rounded-[20px]">
                  <div className="text-[16px] leading-[12px]">
                    Pre-order price
                  </div>

                  <div className="h-[1px] bg-[rgba(255,255,255,0.2)]"></div>

                  <div className="text-[20px] font-[600] leading-[23px]">
                    10,000,000 USD
                  </div>

                  <div className="text-[16px] leading-[12px]">
                    per single quantum computer
                  </div>
                </div>
              </div>

              <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px]">
                <div className="h-full w-full flex flex-col p-[50px_40px] gap-[20px] border-transparent bg-cardCombined rounded-[20px]">
                  <div className="text-[16px] leading-[12px]">
                    Reservation deposit
                  </div>

                  <div className="h-[1px] bg-[rgba(255,255,255,0.2)]"></div>

                  <div className="text-[20px] font-[600] leading-[23px]">
                    1,000,000 USD
                  </div>

                  <div className="text-[16px] leading-[12px]">
                    this finances the development
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center max-w-[880px] m-auto">
              <p className="mb-[20px]">
                Don’t miss this extraordinary opportunity to not only own a
                piece of the future but also be a trailblazer in the quantum
                revolution. Place your pre-order now and get ready to embark on
                a groundbreaking computing journey with the QuantumPyramid
                Computer.
              </p>
              <p className="mb-[20px]">
                <span className="font-bold">Please note:</span> limited
                quantities available, so act fast to secure your reservation.
                Expected delivery dates will be communicated once the pre-order
                period concludes.{' '}
              </p>
              <p>
                Thank you for being a part of the quantum computing revolution!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[70px] items-center">
            <div className="linear-rect"></div>

            <h4 className="text-[30px] font-[300]">Technical specs</h4>

            <div className="grid grid-cols-3 gap-[20px] md:grid-cols-1">
              {QUANTUM_PYRAMID_SPECS.map(({ title, content }) => (
                <TechnicalSpecsCard
                  key={title}
                  title={title}
                  content={content}
                />
              ))}
            </div>
          </div>

          <PreOrderForm />
        </div>
      </section>
    </main>
  );
}
