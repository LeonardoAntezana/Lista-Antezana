import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonCustom = ({onpress, title, style, disabled}) => {
  return (
    <TouchableOpacity
    disabled={disabled}  
    onPress={onpress} 
    style={{...styles.button ,...style}}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'grey',
        borderRadius: 5,
    },
    text:{
        textTransform: 'uppercase',
        color: '#fff',
    }
})

export default ButtonCustom
