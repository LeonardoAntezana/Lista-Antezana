import React from 'react'
import { StyleSheet, FlatList, Text} from 'react-native'
import Note from './Note'

const List = ({elements, openModalDelete, completedItem }) => {
  return (
    <FlatList
    data={elements}
    renderItem={({item}) => <Note item={item} openModalDelete={openModalDelete} completedItem={completedItem}/>}
    ListEmptyComponent={<Text style={styles.listEmpty}>Sin notas</Text>}
    keyExtractor={(item) => item.id}
    />
  )
}

export default List

const styles = StyleSheet.create({
  listEmpty: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 20,
  },
})