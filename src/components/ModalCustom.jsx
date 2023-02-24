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
            <ButtonCustom title='x' onpress={cancelModalVisible}/>
          </View>
          <Text style={styles.text}>Desea eliminar la nota:</Text>
          <Text style={styles.text}>'{content}'</Text> 
          <ButtonCustom title='Eliminar nota' onpress={() => deleteNote(id)}/>    
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
  boton:{
    width: 20,
  }
})