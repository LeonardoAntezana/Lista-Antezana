import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
      <InputNewItem value={valueInput} onChangeText={onChangeInput} addItem={addItem}/>
      <List elements={items} openModalDelete={openModalDelete} completedItem={completedItem}/>
      <ModalCustom 
      modalVisible={modalVisible}
      noteSelected={noteSelected}
      cancelModalVisible={cancelModal}
      deleteNote={deleteNote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});
