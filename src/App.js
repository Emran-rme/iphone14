import Footer from "./components/fragments/footer/Footer";
import EighteenthSection from "./components/fragments/sections/EighteenthSection";
import EleventhSection from "./components/fragments/sections/EleventhSection";
import FifteenthSection from "./components/fragments/sections/FifteenthSection";
import FifthSection from "./components/fragments/sections/FifthSection";
import FirstSection from "./components/fragments/sections/FirstSection";
import FourteenthSection from "./components/fragments/sections/FourteenthSection";
import FourthSection from "./components/fragments/sections/FourthSection";
import NineteenthSection from "./components/fragments/sections/NineteenthSection";
import SecondSection from "./components/fragments/sections/SecondSection";
import SeventeenSection from "./components/fragments/sections/SeventeenSection";
import SeventhSection from "./components/fragments/sections/SeventhSection";
import SixteenthSection from "./components/fragments/sections/SixteenthSection";
import SixthSection from "./components/fragments/sections/SixthSection";
import TenthSection from "./components/fragments/sections/TenthSection";
import ThirdSection from "./components/fragments/sections/ThirdSection";
import ThirteenthSection from "./components/fragments/sections/ThirteenthSection";
import TwelfthSection from "./components/fragments/sections/TwelfthSection";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <main id="main" className="main">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <TenthSection />
        <EleventhSection />
        <TwelfthSection />
        <ThirteenthSection />
        <FourteenthSection />
        <FifteenthSection />
        <SixteenthSection />
        <SeventeenSection />
        <EighteenthSection />
        <NineteenthSection />
      </main>
      <Footer />
    </MainLayout>
  );
}

export default App;
