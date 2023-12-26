import Image from 'next/image';

interface UniversaCardProps {
  data: {
    image: string;
    title: string;
    text: string;
  };
}

const DATA = [
  {
    image: '/universa/universa-cards-1.png',
    title: "AI's Benevolent Core",
    text: 'Embedding benevolence in the core infrastructure of any AI agents or combination created with this protocol and tool is critical. This inherent mechanism ensures the future pendulum of history swings in the right direction, propelling AI to become a tool that uplifts humanity rather than leading to its demise.',
  },
  {
    image: '/universa/universa-cards-1.png',
    title: 'Universal Harmony in AI',
    text: 'The unique advantage of this system is that the created intelligence uses one universal communication protocol, allowing all AI entities to communicate instantly with each other. This forms a quantum super AI intelligence on the planet, akin to a “Wikipedia for AI agents” covering all topics of the planet and universe, all motivated to perform acts of benevolence for humanity, all living beings, and the planet. It forms a robust solution against the uncontrolled release of AI systems whose outcomes are unknown.',
  },
];

const UniversaCard = ({ data }: UniversaCardProps) => {
  return (
    <div className="p-[50px] flex gap-[50px] items-center bg-white/[0.03] shadow-[3px_3px_0px_0px_#11F4D1] rounded-[20px] min-h-[350px] md:p-[50px_20px] md:gap-[40px] md:flex-col">
      <Image
        className="w-[250px] h-[250px]"
        src={data.image}
        alt=""
        width={250}
        height={250}
      />

      <div className="flex flex-col gap-[30px]">
        <h5 className="text-[22px] font-[600] text-accentGreen md:text-center">
          {data.title}
        </h5>

        <div className="bg-white/20 h-[1px] w-full"></div>

        <div className="text-[16px] md:text-center">{data.text}</div>
      </div>
    </div>
  );
};

const UniversaCards = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <UniversaCard data={DATA[0]} />
      <UniversaCard data={DATA[1]} />
    </div>
  );
};

export default UniversaCards;
