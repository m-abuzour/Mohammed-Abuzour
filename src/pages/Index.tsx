
import Header from '@/components/Header';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
