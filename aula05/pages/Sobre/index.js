import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { TouchableOpacity, Modal } from "react-native";
import ActionModal from "../../components/ActionModal";

export default function Sobre() {
  const [exibirModal, setExibirModal] = useState(false);

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => setExibirModal(true)}
      >
        <Text style={style.text}>Abrir</Text>
      </TouchableOpacity>
      <Modal visible={exibirModal} trasparence={true}>
        <ActionModal
          handleClose={() => setExibirModal(false)}
          handleAjuda={() => alert("Clicou em Ajuda")}
          handleOutros={() => alert("Clicou em Outros")}
        />
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alingItems: "center",
    justifyContent: "center",
  },
});
