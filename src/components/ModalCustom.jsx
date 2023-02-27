import React from 'react'
import { StyleSheet, Text, View, Modal} from 'react-native'
import ButtonCustom from './ButtonCustom';

const ModalCustom = ({modalVisible, cancelModalVisible, noteSelected, deleteNote}) => {
  const {id, content} = noteSelected;
  return (
   <Modal 
    animationType='fade' 
    visible={modalVisible}
    transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.top}>
            <ButtonCustom style={styles.button} title='x' onpress={cancelModalVisible}/>
          </View>
          <Text style={styles.text}>¿Desea eliminar la nota?</Text>
          <Text style={{...styles.text, ...styles.content}}>'{content}'</Text> 
          <ButtonCustom style={styles.button} title='Eliminar nota' onpress={() => deleteNote(id)}/>    
        </View>      
      </View>  
    </Modal>
  )
}

export default ModalCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(116, 117, 119, 0.5)',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 40,
    padding: 25,
    borderRadius: 10,
  },
  top:{
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#dd4566',
  },
  content: {
    fontWeight: 'bold',
  }
})