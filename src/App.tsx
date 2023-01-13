import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import { light } from './styles/themes';

import { Navigation } from './components/navigation';
import { Footer } from './components/footer';

import { About } from './sections/about';
import { Faq } from './sections/faq';
import { Home } from './sections/home';
import { RoadMap } from './sections/roadMap';
import { ShowCase } from './sections/showCase';
import { Team } from './sections/team';
import { ScrollToTop } from './components/scrollToTop';


function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <RoadMap />
        <ShowCase />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
