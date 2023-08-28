import React from 'react';
import TrainingCampModule from './TrainingCampModule';

interface Props {
  name: string;
  modules: {
    [name: string]: {
      [item: string]: {
        description: string;
        git: string[];
        youtube: {
          title: string | null;
          description: string | null;
          link: string | null;
        }[];
        playlists: {
          title: string | null;
          description: string | null;
          link: string | null;
        }[];
      };
    };
  };
}

const TrainingCampBlock: React.FC<Props> = ({ name, modules }) => {
  return (
    <>
      <div className="bg-card p-[70px] w-full rounded-[40px] flex flex-col gap-[70px] md:gap-[50px] md:p-[50px_10px_10px] md:rounded-[10px]">
        <h2 className="text-center text-accentGreen font-[600] text-[24px] md:text-[18px]">
          {name}
        </h2>

        <div className="flex flex-col gap-[5px]">
          {Object.entries(modules).map(([module, data]) => (
            <TrainingCampModule
              key={module}
              degree={name}
              name={module}
              data={data}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrainingCampBlock;
