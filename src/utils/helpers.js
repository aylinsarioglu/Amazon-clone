import { FontAwesome } from "@expo/vector-icons";

export const getRating = (rating) => {
  
    const ratingStar= [];

    const fullstar = <FontAwesome name="star" size={10} color="#ffaf00" />;
    const halfstar = <FontAwesome name="star-half-empty" size={10} color="#ffaf00" />;
    const emptystar = <FontAwesome name="star-o" size={10} color="#ffaf00" />;
    
    for( let i= 0; i<5; i++){
        if( i< rating){
            ratingStar.push(fullstar);
        } else {
            ratingStar.push(emptystar);
        }
    }

    if( rating % 1 !== 0){
        ratingStar[Math.floor(rating)] = halfstar;
    }

    return ratingStar;
}