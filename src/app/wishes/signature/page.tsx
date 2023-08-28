'use client';

import Image from 'next/image';
import VideoBackground from '@/components/VideoBackground';

export default function ESignature() {
  return (
    <main>
      <section className="pt-[50px] min-h-screen">
        <VideoBackground />

        <div className="p-[70px] flex flex-col gap-[70px] md:p-[15px] md:gap-[30px]">
          <div className="flex flex-col gap-[30px] items-center">
            <h2 className="text-center text-[40px] font-[200] md:text-[28px]">
              <span className="green">Congratulations</span> on taking this
              step!
            </h2>

            <div className="text-center max-w-[740px]">
              Check your inbox (or spam folder) and e-sign the agreement to
              begin enjoying all the advantages.
            </div>
          </div>

          <div className="h-[1px] bg-white/10"></div>

          <div className="flex flex-col gap-[30px]">
            <h3 className="text-accentGreen text-[22px] font-[600] text-center">
              E-signature Instructions
            </h3>

            <div className="text-center">
              Secure your commitment with an e-signature via email, and let's
              set the wheels in motion.
            </div>
          </div>

          <div className="flex flex-col gap-[5px]">
            <div className="rounded-[10px] p-[30px] bg-card flex gap-[15px] items-center md:flex-col">
              <div className="bg-accentGreen w-[30px] h-[30px] rounded-full text-blue7 font-bold text-[13px] flex items-center justify-center">
                1
              </div>

              <div>
                Check your email inbox (or spam folder) for the e-signature
                request.
              </div>
            </div>

            <div className="rounded-[10px] p-[30px] bg-card flex gap-[15px] items-center md:flex-col">
              <div className="bg-accentGreen w-[30px] h-[30px] rounded-full text-blue7 font-bold text-[13px] flex items-center justify-center">
                2
              </div>

              <div>
                Complete the e-signature within the next{' '}
                <span className="green">9 min. 47 sec.</span>
              </div>
            </div>

            <div className="rounded-[10px] p-[30px] bg-card flex gap-[15px] items-center md:flex-col">
              <div className="bg-accentGreen w-[30px] h-[30px] rounded-full text-blue7 font-bold text-[13px] flex items-center justify-center">
                3
              </div>

              <div>
                Once signed, you’ll receive access to an endorsing money
                generation page for free.
              </div>
            </div>

            <div className="rounded-[10px] p-[30px] bg-card flex gap-[15px] items-center md:flex-col">
              <div className="bg-accentGreen w-[30px] h-[30px] rounded-full text-blue7 font-bold text-[13px] flex items-center justify-center">
                4
              </div>

              <div>
                This page will refresh automatically once the signature is
                completed.
              </div>
            </div>

            <div className="rounded-[10px] p-[30px] bg-card flex gap-[15px] items-center md:flex-col">
              <div className="bg-accentGreen w-[30px] h-[30px] rounded-full text-blue7 font-bold text-[13px] flex items-center justify-center">
                5
              </div>

              <div>
                Copy and save your unique endorser link:{' '}
                <span
                  className="green cursor-pointer"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      'https://aga.live/3wishes/e/user@gmail.com',
                    )
                  }
                >
                  https://aga.live/3wishes/e/user@gmail.com
                  <Image
                    className="inline ml-[10px] md:hidden"
                    src="/icon-copy.svg"
                    width={17}
                    height={17}
                    alt="Copy"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
