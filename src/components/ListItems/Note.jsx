import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ButtonCustom from '../ButtonCustom'

const Note = ({item, openModalDelete, completedItem}) => {
  const {id, content, completed} = item;
  return (
    <View style={styles.note}>
      <TouchableOpacity onPress={() => completedItem(id)}>
        <Text style={completed && styles.noteCompleted}>{content}</Text>
      </TouchableOpacity>
      <ButtonCustom style={styles.button} title='delete' onpress={() => openModalDelete(item)}/>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({
  note:{
    flex: 1,
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  button:{
    borderRadius: 5,
    backgroundColor: 'red',
  },
  noteCompleted: {
   textDecorationLine: 'line-through',
   color: 'grey' 
  }
})