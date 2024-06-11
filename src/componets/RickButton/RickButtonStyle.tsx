import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 container: {
    marginTop:5,
    display:'flex',
    flexDirection:'column',
    gap:5,
  },
  botao:{
    width:'100%',
    alignItems:'center',
    padding:8,
    borderWidth: 1,
    borderRadius: 5,
    elevation:1,
    
  },
  text:{
    fontSize:16,
    lineHeight:21,
    fontWeight:'500',
    letterSpacing: 0.25,
    color: '#318C8C'
  }
});