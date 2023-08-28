import VideoBackground from '@/components/VideoBackground';

export default function Wishes() {
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
              souls on a quest to shape the future of humanity. We are{' '}
              <span className="green">The Guardian Legion.</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
