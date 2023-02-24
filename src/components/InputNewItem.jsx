import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import ButtonCustom from './ButtonCustom'

const InputNewItem = ({onChangeText, addItem, value}) => {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={onChangeText} style={styles.input}/>
      <ButtonCustom onpress={addItem} title='add' style={styles.button}/>
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
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    button:{
        borderRadius: 5,
    }
})

export default InputNewItem