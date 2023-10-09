import { MOCK_CONTRACTOR_INDUSTRIES } from '@/utils/constants';
import ContractorIndustriesCard from './ContractorIndustriesCard';

const ContractorIndustriesList = () => {
  return (
    <div className="grid grid-cols-3 gap-[20px] lg:grid-cols-2 sm:grid-cols-1">
      {MOCK_CONTRACTOR_INDUSTRIES.map((item) => (
        <ContractorIndustriesCard
          key={item.title}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default ContractorIndustriesList;
