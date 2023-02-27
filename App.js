import { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { InputNewItem, List, ModalCustom } from './src/components';

export default function App() {
  const [valueInput, setValueInput] = useState('')
  const [items, setItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [noteSelected, setNoteSelected] = useState('')

  const onChangeInput = value => setValueInput(value)

  const addItem = () => {
    valueInput && setItems(items => ([...items, {id: Date.now(), content: valueInput, completed: false}]))
    setValueInput('')
  }

  const openModalDelete = note => {
    setNoteSelected(note)
    setModalVisible(!modalVisible)
  }

  const deleteNote = id => {
    setItems(items => items.filter(note => note.id !== id))
    setModalVisible(!modalVisible)
  }

  const completedItem = id => {
    const findNote = items.find(note => note.id === id)
    findNote.completed = !findNote.completed
    setItems([...items])
  }

  const cancelModal = () => setModalVisible(false)

  return (
    <View style={styles.container}>
      <InputNewItem 
      value={valueInput} 
      onChangeText={onChangeInput} 
      addItem={addItem}
      titleButton='agregar' 
      placeholder='Ingrese una nota'/>
      <List elements={items} openModalDelete={openModalDelete} completedItem={completedItem}/>
      <ModalCustom 
      modalVisible={modalVisible}
      noteSelected={noteSelected}
      cancelModalVisible={cancelModal}
      deleteNote={deleteNote}
      />
      {items.length !== 0 && <Text style={styles.info}> Para marcar las notas como completadas, presionelas</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 40,
  },
  info:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 20,
    color: '#e2762f',
  }
});
