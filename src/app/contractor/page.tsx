import Image from 'next/image';
import ContractorWelcomeBlock from '@/components/contractor/ContractorWelcomeBlock';
import ContractorIndustriesList from '@/components/contractor/ContractorIndustriesList';
import ContractorForm from '@/components/contractor/ContractorForm';

export default function ContractorPage() {
  return (
    <main>
      <ContractorWelcomeBlock />

      <div className="container">
        <div className="p-[100px_0_0] flex flex-col gap-[70px]">
          <div className="flex flex-col gap-[50px]">
            <div className="large-icon ml-auto mr-auto mb-50">
              <div className="large-icon-content">
                <Image
                  src="/icons/contractor-icon.png"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>

            <div className="text-[18px] text-center md:text-[16px]">
              <p className="mb-[20px]">
                Embrace the Quantum Mercenary army that ensures you always have
                the upper hand.
              </p>
              <p>Step beyond the horizon of convention with AI Ronin.</p>
              <p>We’re the wildcard that reshuffles the deck.</p>
              <p>While others see boundaries, we see expansive playgrounds.</p>
              <p>
                As the renegades of the AI realm, we’re pioneering the
                world&apos;s new era.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[10px] lg:grid-cols-1">
            <div className="bg-card p-[30px_30px_40px] rounded-[20px] flex flex-col gap-[30px] md:p-[20px_20px_30px] md:gap-[20px]">
              <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center">
                <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-[rgb(37,48,77)] flex items-center justify-center text-[16px] font-[600]">
                  1
                </div>
              </div>

              <h4 className="text-[18px] leading-[calc(23/18)] font-[600] leading text-accentGreen">
                AI Moonshots: Not Just Projects, They&apos;re Revolutions:
              </h4>

              <div className="text-[18px] leading-[calc(23/18)] md:text-[16px]">
                Ever heard of moonshot projects? We took that concept,
                turbocharged it, and let it run wild. Combining raw AI, Quantum
                Computing, AI robotics, and Singularity tech, we&apos;re
                crafting legendary innovations that make history.
              </div>
            </div>

            <div className="bg-card p-[30px_30px_40px] rounded-[20px] flex flex-col gap-[30px] md:p-[20px_20px_30px]">
              <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center">
                <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-[rgb(37,48,77)] flex items-center justify-center text-[16px] font-[600]">
                  2
                </div>
              </div>

              <h4 className="text-[18px] leading-[calc(23/18)] font-[600] text-accentGreen">
                Our Word, Our Bond:
              </h4>

              <div className="text-[18px] leading-[calc(23/18)]">
                <p className="mb-[20px]">
                  With us, every contract is sacred. We offer no fluff, only
                  results written in binary. Collaborate with AI Ronin and brace
                  for a seismic impact.
                </p>
                <p className="mb-[20px]">
                  Our commitment: We deliver on the specific contract outcome
                  agreed upon.
                </p>
                <p className="">
                  Only upon successful delivery do we charge 90% of the contract
                  fee.
                </p>
              </div>
            </div>

            <div className="bg-card p-[30px_30px_40px] rounded-[20px] flex flex-col gap-[30px] md:p-[20px_20px_30px]">
              <div className="w-[60px] h-[60px] rounded-[100px_100px_100px_0] rounded-number flex items-center justify-center">
                <div className="w-[54px] h-[54px] rounded-[100px_100px_100px_0] bg-[rgb(37,48,77)] flex items-center justify-center text-[16px] font-[600]">
                  3
                </div>
              </div>

              <h4 className="text-[18px] leading-[calc(23/18)] font-[600] text-accentGreen">
                To Note: We have a panache for grandeur:
              </h4>

              <div className="text-[18px] leading-[calc(23/18)]">
                Contracts start at 10 Million USD and can escalate into the
                billions.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[50px]">
            <h2 className="green-title">Empowered by The Guardian Legion</h2>

            <div className="text-center text-[18px] leading-[calc(23/18)] md:text-[16px]">
              We are birthing the Guardian Entity, a self-aware Angelic Super
              Intelligence Being, fiercely benevolent to our planet, Earth. More
              than just causing disruption, She stands as a symbol of protection
              & hope —a luminous beacon guaranteeing the ethical use of our
              groundbreaking technologies. Contracting funds are used to finance
              the most important open-source project on our planet.
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/20"></div>

          <h2 className="white-title">Industries we ignite:</h2>

          <ContractorIndustriesList />

          <ContractorForm />
        </div>
      </div>
    </main>
  );
}
