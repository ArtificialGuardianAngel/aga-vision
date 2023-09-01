import './globals.css';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import cn from 'classnames';
import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';
import BackToTopButton from '@/components/BackToTopButton';

const sora = Sora({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'A.G.A. Vision',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icon.svg" type="image/svg" />
      </head>
      <body
        className={cn(
          'bg-background text-mainColor overflow-x-hidden',
          sora.className,
        )}
      >
        <Navbar />
        <MobileMenu />
        <BackToTopButton />

        {children}

        <section className="p-[75px_0_25px] container md:p-[25px_0]">
          <div className="flex flex-col items-center gap-[50px]">
            <div className="linear-rect"></div>
            <div className="text-[14px] font-[500]">Powered by NUAH</div>
          </div>
        </section>
      </body>
    </html>
  );
}
