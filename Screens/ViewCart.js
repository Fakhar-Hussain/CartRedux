import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import { addMyCarts , removeItem , deleteCartItem , deleteCart} from '../Redux/MyCartSliceReduser';



const ViewCart = ({navigation}) => {

  const MyCarts = useSelector( state => state.cart)
  const dispatch = useDispatch();
  
  const Total = () => {
    let total = 0;
    MyCarts.map( (item) => {
      total = total + item.qty * item.price
    })
    return total;
  }

  const CancelCart = () => { 
      if (MyCarts.length < 1) {
        Alert.alert(
          "Order Cart",
          `Sorry...! No Cart Added`,
          [
            { text: "Cancel",style: "cancel" },
            { text: "OK", style: "ok"}
          ]
        )
      }
      else{
        Alert.alert(
          "Order Cart",
          `Thank You...! 
Your Order will be delivered soon...`,
          [
            { text: "Cancel", style: "cancel" },
            { text: "OK", onPress: () => { MyCarts.map( (item) => { dispatch(deleteCart(item.id)) }) } }
          ]
        )
      }

  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"transparent"} />

      <FlatList
        data={MyCarts}
        renderItem={({item, index}) => {
          return (
            <View  style={styles.middleView}>
              <Image
                source={{uri: item.image}}
                style={styles.middleViewImage}
              />
              <View style={styles.middleTxtView}>
                <Text style={styles.TxtName}>
                  {
                    item.name.length > 12 ? (item.name.substring(0,14) + "...") : item.name
                  } 
                </Text>
                <Text style={styles.TxtBrand}>{item.brand}</Text>
                <Text style={styles.TxtPrice}>Rs: {item.price}</Text>
              

                  <View style={{flexDirection: "row", marginTop: 3}}>
                
                    <TouchableOpacity style={styles.CartBtnMinusPlusView} 
                      onPress={ () => {
                        if (item.qty > 1) {
                          console.log("Remove")
                          dispatch(removeItem(item)) 
                        }else{
                          console.log("Delete")
                          dispatch(deleteCartItem(item.id))
                        }
                      }}
                    >
                      <Text style={styles.CartBtnMinusPlusText}>-</Text>
                    </TouchableOpacity>

                      <Text style={styles.CartCenterText} >
                        {item.qty}
                      </Text>
                    
                    <TouchableOpacity style={styles.CartBtnMinusPlusView} onPress={ () => dispatch(addMyCarts(item)) }>
                      <Text style={styles.CartBtnMinusPlusText}>+</Text>
                    </TouchableOpacity>

                  </View>
             
            
            </View> 



            </View>
          );
        }}
        />

      <View style={styles.lowerView}>
        <View style={styles.lowerTextView}>
          <Text style={styles.txtItems}>Cart items ({MyCarts.length}) </Text>
          <Text style={styles.txtTotalPrice}>Rs. {Total()} </Text>
        </View>
        <TouchableOpacity style={styles.openCartView} onPress={() => CancelCart() } >
          <Text style={styles.openCartTxt}>Order Cart</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3"
  },


            // // // // // HEADER PORTION // // // // //
  
  headerView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: '#000',
    elevation: 10,
    height: '8%',
    width: '100%',
    borderBottomColor: "#000",
    borderBottomWidth: 1
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
  },
  


            // // // // // MIDDLE PORTION // // // // //
  
  middleView: {
    width: '92%',
    alignSelf: 'center',
    height: 120,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    marginHorizontal: '4%',
  },
  middleViewImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginLeft: '3%',
    marginTop: '3%',
    resizeMode: 'contain',
  },
  middleTxtView: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  TxtName: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: '700',
    color: "black"
  },
  TxtBrand: {
    fontSize: 14,
    fontWeight: '700',
  },
  TxtPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: "green",
    marginTop: 4,
  },
  CartBtnView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    height: 30,
    width: 100,
    borderRadius: 6,
    marginTop: 2,
    elevation: 4
  },
  CartBtnTxt: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  CartBtnMinusPlusView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    height: 25,
    width: 25,
    borderRadius: 6,
    marginTop: 5,
    elevation: 4
  },
  CartBtnMinusPlusText: {
    fontSize: 18,
    color: '#fff',
    // fontWeight: '700',
  },
  CartCenterText: {
    fontSize: 22,
    color: '#000',
    marginTop: 3,
    marginHorizontal: 6
  },
  CartCancelBtnView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 24,
    width: 24,
    borderRadius: 12,
    // marginTop: 5,
    elevation: 10,
    left: 98,
    bottom: 70
  },
  CartCancelBtnText: {
    fontSize: 14,
    color: '#fff',
},





            // // // // // LOWER PORTION // // // // //

  lowerView: {
    elevation: 10,
    backgroundColor: "#fff",
    marginTop: '2%',
    height: '12%',
    flexDirection: "row",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "space-between"
  },
  lowerTextView: {
    // backgroundColor: "#ff00",
    flexDirection: "column",
  },
  txtItems: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    // marginTop: 12
  },
  txtTotalPrice: {
    fontSize: 16,
    fontWeight: "700",
  },
  openCartView: {
    backgroundColor: "green",
    height: 40,
    width: 140,
    alignItems: "center",
    justifyContent: "center" ,
    // marginTop: 15,
    borderRadius: 6,   
  },
  openCartTxt: {
    fontWeight: "700",
    color: "#fff",
  },

});

export default ViewCart;
