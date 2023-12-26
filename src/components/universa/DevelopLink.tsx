import Link from 'next/link';

const DevelopLink = () => {
  return (
    <div className="p-[100px] shadow-[0_0_100px_0_rgba(124,29,206,0.70)] rounded-[20px] universa-start-dev-bg md:p-[70px_20px]">
      <div className="relative flex flex-col gap-[70px] md:gap-[50px]">
        <div className="text-center text-[40px] font-[200] leading-[50px] md:text-[24px] md:leading-[30px]">
          Develop with this protocol and dev tool today, and be a part of
          rewriting the code of the future in history.
        </div>

        <div className="flex flex-col gap-[50px] items-center md:gap-[30px]">
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
    </div>
  );
};

export default DevelopLink;
