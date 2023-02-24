import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonCustom = ({onpress, title, style}) => {
  return (
    <TouchableOpacity onPress={onpress} style={{...styles.button ,...style}}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'grey',
    },
    text:{
        textTransform: 'uppercase',
        color: '#fff',
    }
})

export default ButtonCustom
