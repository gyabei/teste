import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default class App extends Component {
  render() {
    return (
      <>
        <View>
          <Text style={styles.containerHeader}>CRUD</Text>
        </View>
        <View>
          <Text>Inserir Nome:</Text>
          <br></br>
          <TextInput
            onChangeText={this.handleInputChange}
            style={styles.input}
          ></TextInput>
          <Button title="Inserir" />
        </View>
        <br></br>
        <View>
          <Text>Consultar por Nome</Text>
          <br></br>
          <TextInput
            onChangeText={this.handleInputChange}
            style={styles.input}
          ></TextInput>
          <br></br>
          <Button title="Consultar" />
          <br></br>
          <Button title="Listar Todos" />
        </View>
        <br></br>
        <View>
          <Text>Excluir Usuário com o ID:</Text>
          <br></br>
          <TextInput
            onChangeText={this.handleInputChange}
            style={styles.input}
          ></TextInput>
          <Button title="Excluir" />
        </View>
        <br></br>
        <View>
          <Text> Atualizar Usuário com o ID:</Text>
          <br></br>
          <TextInput
            onChangeText={this.handleInputChange}
            style={styles.input}
          ></TextInput>
          <Text>para:</Text>
          <br></br>
          <TextInput
            onChangeText={this.handleInputChange}
            style={styles.input}
          ></TextInput>
          <Button title="Atualizar" />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: "30px",
  },
  input: {
    height: 35,
    width: "75%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: "3px",
    alignitems: "center",
  },
});
