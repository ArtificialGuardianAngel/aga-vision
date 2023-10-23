import BackButton from '@/components/BackButton';
import VideoBackground from '@/components/VideoBackground';
import PrivacyPolicyCard from '@/components/privacy-policy/PrivacyPolicyCard';
import { PRIVACY_POLICY_DATA } from '@/utils/constants';

export default function PrivacyPolicy() {
  return (
    <main className="relative">
      <BackButton className="fixed top-[20px] left-[20px] md:top-[20px] md:left-[20px]" />

      <section className="p-[150px_0_25px] md:p-[100px_0_25px]">
        <VideoBackground />

        <div className="container">
          <div className="items-center flex flex-col gap-[50px] mb-[50px]">
            <div className="challenges-card-bg rounded-[200px] flex justify-center items-center p-[3px] mb-[50px] max-w-[530px]">
              <div className="text-center h-full w-full flex flex-col p-[20px_50px] border-transparent bg-cardCombined rounded-[200px] text-[30px] font-[600] text-[#D6E1FA] md:p-[20px_60px] md:text-[20px] leading-[calc(38/30)]">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col gap-[10px]">
            {PRIVACY_POLICY_DATA.map(({ title, content }, index) => (
              <PrivacyPolicyCard key={index} title={title} content={content} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
