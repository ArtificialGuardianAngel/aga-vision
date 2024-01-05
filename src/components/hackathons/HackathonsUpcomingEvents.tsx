'use client';

import { useEffect, useState } from 'react';
import HackathonsEventCard from './HackathonsEventCard';

const MOCK_DATA = [
  {
    date: '01/03/2024 - 03/03/2024',
    location: 'Bali, Indonesia',
    link: 'https://aga.vision/hackathon',
  },
  {
    date: '08/03/2024 - 09/03/2024',
    location: 'Bangkok, Thailand',
    link: '',
  },
  {
    date: 'TBA',
    location: 'Singapore',
    link: '',
  },
];

const HackathonsUpcomingEvents = () => {
  const [comingSoonModalOpened, setComingSoonModalOpened] = useState(false);

  useEffect(() => {
    if (comingSoonModalOpened) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [comingSoonModalOpened]);

  return (
    <div className="grid grid-cols-3 gap-[20px] lg:grid-cols-1">
      {MOCK_DATA.map((item, index) => (
        <HackathonsEventCard
          key={index}
          date={item.date}
          link={item.link}
          location={item.location}
          showComingSoonModal={() => setComingSoonModalOpened(true)}
        />
      ))}

      {comingSoonModalOpened && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/80 p-[10px]"
          onClick={() => setComingSoonModalOpened(false)}
        >
          <div className="fixed top-1/2 left-1/2 rounded-[20px] p-[30px] bg-blue7 -translate-x-1/2 -translate-y-1/2">
            <div className="text-[40px] font-[200] text-center md:text-[22px] text-accentGreen">
              More info soon
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HackathonsUpcomingEvents;
