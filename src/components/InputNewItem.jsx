import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import ButtonCustom from './ButtonCustom'

const InputNewItem = ({onChangeText, addItem, value, placeholder, titleButton}) => { 
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={styles.input}/>
      <ButtonCustom 
      onpress={addItem} 
      title={titleButton} 
      style={value ? styles.button : styles.buttonDisabled} 
      disabled={value ? false : true}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
    },
    input:{
      width: 200,
      borderBottomColor: '#76D7C4',
      borderBottomWidth: 1,
    },
    button:{
      backgroundColor: '#76D7C4',
    },
    buttonDisabled: {
      backgroundColor: '#cfe1de',
    }
})

export default InputNewItem