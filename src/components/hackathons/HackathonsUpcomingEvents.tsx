import HackathonsEventCard from './HackathonsEventCard';

const MOCK_DATA = [
  {
    date: '23/10/2023',
    location: 'Katowice, Poland',
    link: '',
  },
  {
    date: '23/10/2023',
    location: 'Tokyo, Japan',
    link: '',
  },
  {
    date: '23/10/2023',
    location: 'Berlin, Germany',
    link: '',
  },
];

const HackathonsUpcomingEvents = () => {
  return (
    <div className="grid grid-cols-3 gap-[20px] lg:grid-cols-1">
      {MOCK_DATA.map((item, index) => (
        <HackathonsEventCard
          key={index}
          date={item.date}
          link={item.link}
          location={item.location}
        />
      ))}
    </div>
  );
};

export default HackathonsUpcomingEvents;
