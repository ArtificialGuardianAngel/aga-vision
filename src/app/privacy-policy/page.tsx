import BackButton from '@/components/BackButton';
import VideoBackground from '@/components/VideoBackground';
import PrivacyPolicyCard from '@/components/privacy-policy/PrivacyPolicyCard';
import { PRIVACY_POLICY_DATA } from '@/utils/constants';

export default function PrivacyPolicy() {
  return (
    <main className="relative">
      <BackButton className="absolute top-[50px] left-[50px] md:top-[30px] md:left-[20px]" />

      <section className="p-[150px_0_25px] md:p-[100px_0_25px]">
        <VideoBackground />

        <div className="container">
          <div className="items-center flex flex-col gap-[50px] mb-[50px]">
            <div className="p-[30px_50px] rounded-[100px] bg-[rgba(255,255,255,0.05)] text-[40px] font-[200] leading-[calc(29/40)] md:text-[20px] md:p-[20px_30px] md:w-full md:text-center">
              Privacy Policy
            </div>
            <div className="linear-rect"></div>
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
