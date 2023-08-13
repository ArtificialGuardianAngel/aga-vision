import React from 'react';

interface Props {
  title: string;
  content: React.ReactNode;
}

const GuidelineCard: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="rounded-[10px] p-[50px] flex flex-col gap-[30px] bg-card">
      <h5 className="text-accentGreen text-[20px] font-[600] leading-[calc(15/20)]">
        {title}
      </h5>
      <div>{content}</div>
    </div>
  );
};

export default GuidelineCard;
