import IbtihajTeaPage from './IbtihajTeaPage'; // Assuming your file is IbtihajTeaPage.tsx in the app folder
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ibtihaj Tea (ইবতিহাজ চা) - Premium Tea from Bangladesh',
  description: 'Experience the finest first flush and classic black tea from the heart of Bangladesh. Quality, authenticity, and tradition in every cup.',
  icons: {
    icon: '/favicon.ico', // Make sure you have this file later
  },
};

export default function HomePage() {
  return <IbtihajTeaPage />;
}