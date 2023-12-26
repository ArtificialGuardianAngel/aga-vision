import Link from 'next/link';

const CodeInUniversa = () => {
  return (
    <div className="p-[15%_50px] flex flex-col gap-[70px] md:gap-[50px] items-center code-in-universa-bg md:p-[70px_20px] md:ml-[-20px] md:mr-[-20px]">
      <h3 className="text-accentGreen text-[40px] font-[700] md:text-[24px]">
        Code in UNIVERSA
      </h3>

      <div className="text-center text-[30px] font-[300] md:text-[24px]">
        A universal open-source protocol that enables the effortless creation of
        AI agents, AI agent combinations, AGI, and Super AI, all creatable and
        deployable from one easy-to-use interface.
      </div>

      <div className="flex flex-col gap-[50px]">
        <Link className="gradient-button" href="#">
          Start developing
        </Link>

        <div className="text-center">
          or{' '}
          <Link href="#" className="underline">
            watch tutorial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CodeInUniversa;
