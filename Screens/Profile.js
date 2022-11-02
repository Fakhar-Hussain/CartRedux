import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import { addMyCarts } from '../Redux/MyCartSliceReduser';



const Profile = ({navigation}) => {

  const MyProducts = useSelector( state => state.product)
  const MyCarts = useSelector( state => state.cart)
  const dispatch = useDispatch();

  const Data = (item) => { 
    dispatch(addMyCarts(item))
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />

      <View style={styles.headerView}>
        <Text style={styles.headerText}>CartRedux</Text>
      </View>

      <FlatList
        data={MyProducts}
        renderItem={({item, index}) => {
          return (
            <View style={styles.middleView}>
                <Image
                  source={{uri: item.image}}
                  style={styles.middleViewImage}
                />
                <View style={styles.middleTxtView}>
                  <Text style={styles.TxtName}>
                    {item.name.length > 12 ? (item.name.substring(0,14) + "...") : item.name}
                  </Text>
                  
                  <Text style={styles.TxtBrand}>{item.brand}</Text>
                  <Text style={styles.TxtPrice}>Rs: {item.price}</Text>
                  
                  <TouchableOpacity style={styles.CartBtnView} onPress={() => Data(item)}>
                    <Text style={styles.CartBtnTxt}>Add to Cart</Text>
                  </TouchableOpacity>
              </View> 
            </View>
          );
        }}
      />

      {
        MyCarts.length > 0 ? (
          <View style={styles.lowerView}>
            <Text style={styles.txtItems}>Cart items: {MyCarts.length}</Text>
            <TouchableOpacity style={styles.openCartView} onPress={() => navigation.navigate("ViewCart")} >
              <Text style={styles.openCartTxt}>View Cart</Text>
            </TouchableOpacity>
          </View>
        ) : null
      }


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



            // // // // // LOWER PORTION // // // // //

  lowerView: {
    elevation: 10,
    backgroundColor: "#fff",
    marginTop: '2%',
    height: '10%',
    flexDirection: "row",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "space-around"
  },
  // lowerTextView: {
  //   flexDirection: "row",
  //   marginHorizontal: 40
  // },
  txtItems: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    // marginTop: 12
  },
  // txtTotalPrice: {
  //   fontSize: 16,
  //   fontWeight: "700",
  // },
  openCartView: {
    backgroundColor: "green",
    height: 40,
    width: 160,
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

export default Profile;
