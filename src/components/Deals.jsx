import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import RecommendedProduct from '../assets/recommended.jpg'

const Deals = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Recommended deal for you</Text>
        <Image source={RecommendedProduct} style={styles.imgStyle} />

        <View style={styles.bottomSection}>

            <View style={styles.row}>
                <TouchableOpacity style={styles.offDealBtn}>
                    <Text style={styles.offDeal}>%18 off</Text>
                </TouchableOpacity>

                <Text style={styles.deal}>Deal</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.discountPrice}>1,599.99 ₺</Text>
                <Text style={styles.actualPrice}>1,900 ₺</Text>
            </View>

            <Text style={styles.productName}>
                Nykaa Face Wash Gentle cleanser,moisturizing and deeply cleansing face wash for all skin types.
            </Text>


            <TouchableOpacity>
                <Text style={styles.allDeals}> See all deals </Text>
            </TouchableOpacity>

        </View>
    </View>
  );
};  

export default Deals;

const styles = StyleSheet.create({
    container:{
     marginTop:20,
    },
    imgStyle:{
        width:"100%",
        height:250,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:10,
        marginBottom:10,
        color:'#000000',
    },
    bottomSection:{
      paddingHorizontal:10,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
    },
    offDealBtn:{
        backgroundColor:'#be0201',
        width:60,
        padding:5,
        borderRadius:5,
        alignItems:'center',
    },
    offDeal:{
        fontSize:12,
        color:'#fff',

    },
    deal:{
        fontSize:12,
        color:'#be0201',
        marginLeft:6,
        fontWeight:'600',
    },
    discountPrice:{
        fontSize:16,
        color:'#000000',
        marginVertical:5,
    },
    actualPrice:{
        fontSize:10,
        marginLeft:7,
        textDecorationLine:'line-through',
    },
    productName:{
        fontSize:14,
        color:'#000000',
    },
    allDeals:{
        fontSize:14,
        color:'#017185',
        marginVertical:10,
    },
});