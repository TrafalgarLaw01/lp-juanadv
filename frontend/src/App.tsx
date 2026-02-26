import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BookSection } from './components/BookSection';
import { Expertise } from './components/Expertise';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FAB } from './components/FAB';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className="pt-16">
        <Hero />
        <About />
        <BookSection />
        <Expertise />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <FAB />
    </>
  );
}

export default App;
