import { Image, StyleSheet} from 'react-native'
import { CarouselData } from '../data/CarouselData'
import Swiper from 'react-native-swiper'

const Carousel = () => {
  return (
      <Swiper 
      autoplay={true}
      showsPagination={false}
      style={styles.wrapper}
      >{CarouselData.map((item) => (
        <Image source={item.image} style={styles.imgstyle} /> ))}
      </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
    imgstyle:{
        width:'100%',
        height:250,
    },
    wrapper:{
        height:300,

    },
});