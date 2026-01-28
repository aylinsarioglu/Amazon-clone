import { Image, StyleSheet, Text, View } from 'react-native'
import Brand1 from '../assets/brand1.jpeg'
import Brand2 from '../assets/brand2.jpeg'
import Brand3 from '../assets/brand3.jpeg'
import Brand4 from '../assets/brand4.jpeg'

const Brands = () => {
  return (
    <View style={styles.container}>

        <Text style={styles.title}> Brands of the Day </Text>

        <View style={styles.row}>

            <View style={styles.brands}>
                <Image source={Brand1} style={styles.imgStyle}/>
                <Text style={styles.brandTitle}>Jewerly - Upto 50% Off on Earrings, Necklaces & More </Text>
            </View>

            <View style={styles.brands}>
                <Image source={Brand2} style={styles.imgStyle}/>
                <Text style={styles.brandTitle}>Min. 20% off | Fossil, Titan Smart Watch & More </Text>
            </View>

  
      
        </View>


        <View style={styles.row}>

            <View style={styles.brands}>
                <Image source={Brand3} style={styles.imgStyle}/>
                <Text style={styles.brandTitle}>Heels - Upto 50% Off on Heeled Sandals, High Heels </Text>
            </View>

            <View style={styles.brands}>
                <Image source={Brand4} style={styles.imgStyle}/>
                <Text style={styles.brandTitle}>Sonny 60W Bluetooth SoundBar Speaker Audio Engine </Text>
            </View>

        </View>


    </View>

  )
}

export default Brands

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        borderTopWidth:1,
        borderTopColor:'#dddddd',

    },
    title:{
       fontSize:18,
       color: '#000000',
       padding:10,
       fontWeight:'bold',   
    },
    row:{
        flexDirection:'row',
    },
    brands:{
        width:"50%",
        padding: 4,
    },
    brandTitle:{
        fontSize:12,
        color:'#000000',
        marginTop:5,
    },
    imgStyle:{
     width:"100%",
     height:150,
     borderRadius:10,
    },
})