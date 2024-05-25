import { getSlider } from "@/actions/getSlider";
import Slider from "@/components/Slider";

export default async function Home() {
  const sliderList = await getSlider();
  return (
    <div>
      Anasayfa
      <Slider sliderList={sliderList} />
    </div>
  );
}
