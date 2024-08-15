import BottomHeader from "@/components/header/BottomHeader";
import BannerSub from "@/components/pages/BannerSub";
import Banner from "@/components/pages/home/Banner";
import BannerBot from "@/components/pages/home/BannerBot";
import BannerMid from "@/components/pages/home/BannerMid";

export default function Home() {
  return (
    <main>
      <BottomHeader />
      <Banner />
      <BannerMid />
      <BannerBot />
      <BannerSub />
    </main>
  );
}
