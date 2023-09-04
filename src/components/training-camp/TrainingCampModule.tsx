'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { ITrainingModule } from '../../utils/types';
import Link from 'next/link';

interface Props {
  degree: string;
  name: string;
  data: ITrainingModule;
}

const TrainingCampModule: React.FC<Props> = ({ degree, name, data }) => {
  const [opened, setOpened] = useState(false);

  const [moduleNumber, moduleName] = name.split(':');

  const toggleOpened = () => {
    setOpened((p) => !p);
  };

  useEffect(() => {
    const lastModule = localStorage.getItem('LAST_MODULE');

    if (lastModule && lastModule === name) {
      setOpened(true);
    }
  }, []);

  return (
    <div>
      <div
        className="flex items-center gap-[50px] p-[5px_5px_5px_50px] bg-card rounded-[100px] text-[18px] font-[600] cursor-pointer md:rounded-[5px] md:p-[10px_10px_10px_20px]"
        onClick={toggleOpened}
      >
        <div className="flex-1 md:text-[13px]">
          <span className="text-accentGreen">{moduleNumber}:</span>
          <span>{moduleName}</span>
        </div>

        <div className="bg-card w-[40px] h-[40px] rounded-full flex items-center justify-center">
          <Image
            src="/icons/white-small-arrow.svg"
            alt=""
            width={12}
            height={12}
            className={cn('transition-all', { ['rotate-180']: opened })}
          />
        </div>
      </div>

      {opened && (
        <div className="p-[30px_0_60px] gap-[20px] grid grid-cols-3 md:grid-cols-1">
          {Object.entries(data).map(([techName, techData]) => (
            <Link
              key={techName}
              href={`/training-camp/${degree}/${name}/${techName}`}
            >
              <div className="challenges-card-bg rounded-[20px] flex justify-center items-center p-[3px] cursor-pointer h-full">
                <div className="h-full w-full flex p-[30px_20px] gap-[20px] border-transparent bg-cardCombined rounded-[20px] items-center transition-colors hover:bg-[rgb(50,61,96)]">
                  <div className="flex-1 flex flex-col gap-[20px]">
                    <h5 className="text-[18px] font-[800] leading-normal text-accentGreen">
                      {techName}
                    </h5>

                    <div className="text-[15px]">{techData.description}</div>
                  </div>

                  <div className="w-[30px] h-[30px] rounded-full bg-accentGreen flex items-center justify-center">
                    <Image
                      src="/icons/blue-small-arrow.svg"
                      alt=""
                      width={10}
                      height={10}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrainingCampModule;
