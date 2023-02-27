import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ButtonCustom from '../ButtonCustom'

const Note = ({item, openModalDelete, completedItem}) => {
  const {id, content, completed} = item;
  return (
    <TouchableOpacity 
    style={completed ? {...styles.note, ...styles.bgColorCompleted} : styles.note }
    onPress={() => completedItem(id)}
    >
      <TouchableOpacity>
        <Text style={completed ? styles.noteCompleted : styles.notCompleted}>{content}</Text>
      </TouchableOpacity>
      <ButtonCustom style={styles.button} title='borrar' onpress={() => openModalDelete(item)}/>
    </TouchableOpacity>
  )
}

export default Note

const styles = StyleSheet.create({
  note:{
    flex: 1,
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#e2762f',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  button:{
    backgroundColor: '#dd4566',
  },
  bgColorCompleted:{
    backgroundColor: '#f7a56f',
  },
  noteCompleted: {
   textDecorationLine: 'line-through',
   color: '#fff' 
  },
  notCompleted: {
    color: '#fff'
  }
})