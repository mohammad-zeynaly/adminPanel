import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StatisticsSliderItems } from "../../allDatas";
import StatisticsSliderBox from "./StatisticsSliderBox";
SwiperCore.use([Autoplay]);
import "swiper/css";

function StatisticsSlider() {
  return (
    <div className="bg-white rounded-lg p-4 mt-6">
      <h5 className="text-2sm font-iranYekanBold"> شبکه های فروش </h5>
      <Swiper
        dir="ltr"
        className="mt-5 mb-4 overflow-hidden"
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          1300: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 2,
          },
        }}
        freeMode={true}
      >
        {StatisticsSliderItems.map((saleNetwork) => (
          <SwiperSlide key={saleNetwork.id} style={{ direction: "rtl" }}>
            <StatisticsSliderBox {...saleNetwork} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default StatisticsSlider;
