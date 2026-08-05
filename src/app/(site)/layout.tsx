import '@/styles/animate.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import BackgroundVideo from '@/components/Common/BackgroundVideo';
import PageTransition from '@/components/Common/PageTransition';
import SubmarineCursor from '@/components/Common/SubmarineCursor';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import ToasterContext from '../context/ToastContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <body>
        <div className='isolate'>
          <BackgroundVideo />

          <NextTopLoader
            color='#3b82f6'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <Header />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />

          <ToasterContext />
        </div>

        <ScrollToTop />
        <SubmarineCursor />
      </body>
    </html>
  );
}
