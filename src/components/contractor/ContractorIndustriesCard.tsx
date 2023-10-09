import React from 'react';

interface Props {
  title: string;
  text: string;
}

const ContractorIndustriesCard: React.FC<Props> = ({ title, text }) => {
  return (
    <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px]">
      <div className="h-full w-full flex flex-col p-[50px_40px] gap-[20px] border-transparent bg-cardCombined rounded-[20px] sm:p-[30px_20px]">
        <h5 className="text-[20px] leading-[calc(25/20)] font-[600]">
          {title}
        </h5>

        <div className="h-[1px] w-full bg-white/20"></div>

        <div>{text}</div>
      </div>
    </div>
  );
};

export default ContractorIndustriesCard;
