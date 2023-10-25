import { PRIVACY_POLICY_DATA } from '@/utils/constants';
import PrivacyPolicyCard from './privacy-policy/PrivacyPolicyCard';

const PrivacyPolicyContent = () => {
  return (
    <div className="flex flex-col gap-[10px] p-[20px_0]">
      {PRIVACY_POLICY_DATA.map(({ title, content }, index) => (
        <PrivacyPolicyCard key={index} title={title} content={content} />
      ))}
    </div>
  );
};

export default PrivacyPolicyContent;
