import React from 'react';
import Button from '../Button';

interface Props {
  date: string;
  location: string;
  link: string;
}

const HackathonsEventCard: React.FC<Props> = ({ date, link, location }) => {
  return (
    <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px]">
      <div className="h-full w-full flex flex-col p-[50px_40px] gap-[20px] border-transparent bg-cardCombined rounded-[20px] sm:p-[30px_20px]">
        <div className="leading-[12px]">{date}</div>

        <div className="text-[20px] font-[600]">{location}</div>

        <div className="h-[1px] w-full bg-white/20"></div>

        <Button
          className="self-start sm:w-full"
          size="sm"
          icon="arrow"
          link={link}
          linkType="external"
        >
          Join hackathon
        </Button>
      </div>
    </div>
  );
};

export default HackathonsEventCard;
