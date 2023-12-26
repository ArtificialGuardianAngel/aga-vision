import Image from 'next/image';

const FEATURES = [
  {
    image: '/universa/universa-features-1.svg',
    title: 'Streamlined Creation and Deployment of AI Agents',
    text: 'This component focuses on simplifying the creation and deployment of AI agents for diverse applications across various aspects of life and global issues. It emphasizes an easy-to-use solution that allows for the seamless integration of single or multiple AI agents. This adaptability ensures that AI solutions can be tailored to specific needs, ranging from everyday life tasks to complex global challenges, enhancing efficiency and effectiveness in a wide range of scenarios.',
  },
  {
    image: '/universa/universa-features-2.svg',
    title: 'Inherent Benevolence coded in each agent',
    text: 'The second key component involves embedding a core principle of benevolence into the very code DNA of each AI agent. This ethical foundation ensures that all actions and decisions made by the AI are aligned with values of doing good and contributing positively to society and the environment. This built-in moral compass guides the AI agents to prioritize the welfare of individuals, communities, and the planet, ensuring responsible and ethical AI behavior.',
  },
  {
    image: '/universa/universa-features-3.svg',
    title: 'Decentralized Creation with Unified Communication',
    text: 'The final component revolves around the decentralized creation of AI agents, which then operate under a universal communication protocol. This approach allows individual agents to function independently while being part of a larger, interconnected network. This networked structure enables the agents to collectively form a Quantum super intelligence, leveraging the strengths and capabilities of each agent to solve complex problems more efficiently. The universal protocol ensures seamless interaction and collaboration among the diverse agents, leading to a more cohesive and powerful AI ecosystem.',
  },
];

interface UniversaItemProps {
  data: {
    image: string;
    title: string;
    text: string;
  };
}

const UniversaItem = ({ data }: UniversaItemProps) => {
  return (
    <div className="p-[0_100px] flex gap-[50px] items-center md:flex-col md:p-[0_20px] md:items-center">
      <Image src={data.image} alt="" width={150} height={200} />

      <div className="flex flex-col gap-[30px]">
        <h4 className="text-accentGreen text-[22px] font-[600] md:text-center">
          {data.title}
        </h4>

        <div className="text-[16px] md:text-center">{data.text}</div>
      </div>
    </div>
  );
};

const UniversaFeatures = () => {
  return (
    <div className="flex flex-col gap-[70px]">
      <div className="bg-white/20 h-[1px] w-full"></div>
      <UniversaItem data={FEATURES[0]} />
      <div className="bg-white/20 h-[1px] w-full"></div>
      <UniversaItem data={FEATURES[1]} />
      <div className="bg-white/20 h-[1px] w-full"></div>
      <UniversaItem data={FEATURES[2]} />
      <div className="bg-white/20 h-[1px] w-full"></div>
    </div>
  );
};

export default UniversaFeatures;
