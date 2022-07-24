import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import SwiperPic1 from '../../../../../../assets/images/picture/swiper-pic1.png'
import SwiperPic2 from '../../../../../../assets/images/picture/swiper-pic2.png'
import SwiperPic3 from '../../../../../../assets/images/picture/swiper-pic3.png'
import SwiperPic4 from '../../../../../../assets/images/picture/swiper-pic4.png'

function MySwiper() {
  return (
    <div className="swiper-new-customers">
      <h4>Our tip for new customers</h4>
      <p>
        In the showroom we present various looks that you might like. It’s worth
        taking a look!
      </p>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={"auto"} spaceBetween={30}>
        <SwiperSlide>
            <img src={SwiperPic1} alt="pic"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={SwiperPic2} alt="pic"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={SwiperPic3} alt="pic"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={SwiperPic4} alt="pic"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={SwiperPic3} alt="pic"/>
        </SwiperSlide>
      </Swiper>
      {/* <button className="view-more-btn">View all</button> */}
    </div>
  );
}
export default MySwiper;
