import { StyleSheet } from "react-native";

import { COLORS,SIZES,FONT } from "../../constants";
const styles = StyleSheet.create({
  
  CardContainer:{
    borderWidth: 2,
    alignItems:'center',
  },
  cardHeading:{
    color:COLORS.darkGreen,
    fontSize: SIZES.xxxl,
    fontWeight: '900',
    fontFamily: FONT.bold,
    textTransform: 'uppercase',
  },
  submitButton:{
    padding:SIZES.sm,
    margin: SIZES.sm,
    backgroundColor: COLORS.lightGreen,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:SIZES.xxl,
  },
  cardBody:{

  },
  input:{
    borderWidth:1,
    height:SIZES.xxxl,
    paddingHorizontal:SIZES.xxxl,
  }
});

export default styles;