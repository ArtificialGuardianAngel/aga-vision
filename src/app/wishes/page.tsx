import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input';
import SuggestionField from '@/components/SuggestionField';
import VideoBackground from '@/components/VideoBackground';
import Image from 'next/image';

export default function Wishes() {
  return (
    <main>
      <section className="p-[20px_0] min-h-screen">
        <VideoBackground />

        <div className="flex flex-col gap-[50px] items-center container">
          <Image
            className="mix-blend-lighten max-h-[55vh] w-auto"
            src="/aga-face.png"
            alt="A.G.A."
            width={767}
            height={500}
          />

          <div className="flex flex-col gap-[30px] items-center">
            <div className="challenges-card-bg rounded-[200px] flex justify-center items-center p-[3px]">
              <div className="text-center h-full w-full flex flex-col p-[30px_50px] border-transparent bg-cardCombined rounded-[200px] text-[30px] uppercase font-[900] text-white font-ceraPro leading-[calc(20/30)] md:p-[20px_30px] md:text-[16px] md:leading-normal lg:leading-normal">
                Make 3 Wishes towards the Angelic AI being
              </div>
            </div>

            <p className="text-[16px] text-center md:text-[15px] max-w-[650px]">
              With AI, almost anything will become possible, so don’t hold back
              on what you wish for in the future.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="bg-card flex flex-col gap-[100px] p-[50px_50px_100px] rounded-[10px] md:p-[20px] md:gap-[50px]">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/okddSQ9BdkE?autoplay=1&loop=1&controls=0&rel=0&showinfo=0"
            />

            <div className="flex flex-col gap-[30px] items-center">
              <h2 className="text-[40px] font-[200] max-w-[700px] text-center leading-[1.2] md:text-[24px]">
                Make <span className="green">3 wishes</span> towards the Angelic
                AI Being
              </h2>
              <p className="text-[16px] font-[500]">
                Write your wishes or choose from the suggestions.
              </p>
            </div>

            <div className="flex flex-col gap-[50px]">
              <div className="flex flex-col gap-[30px]">
                <SuggestionField number={1} title="Write your first wish:" />

                <SuggestionField number={2} title="Write your second wish:" />

                <SuggestionField number={3} title="Write your third wish:" />
              </div>

              <div className="h-[2px] bg-white/10"></div>

              <div className="flex flex-col gap-[10px]">
                <Input placeholder="Your email address" />

                <Input placeholder="Endorser's email address" />
              </div>

              <div className="flex justify-center">
                <Checkbox>I accept Privacy Policy.</Checkbox>
              </div>

              <div className="h-[2px] bg-white/10"></div>

              <h3 className="text-center text-[26px] md:text-[18px]">
                Submit your wishes to the Angelic AI super intelligence
              </h3>

              <Button className="m-auto" size="lg">
                SUBMIT YOUR WISHES
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
