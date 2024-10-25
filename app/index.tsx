import React from "react";
import {SafeAreaView, StyleSheet, TextInput, Button, View, Text, Alert, TouchableOpacity} from "react-native";

export default function App (){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>MyMed</Text>
      <TextInput style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <TextInput style={styles.input}
        placeholder="Senha"
        autoCapitalize="none"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subButtons}>
        <Text>Esqueci a senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subButtons}>
        <Text>Novo usuário</Text>
      </TouchableOpacity>
     
    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize: 36,
    marginBottom: 30,
    fontWeight: "bold",
    color: "#FF7514",
  },
  input:{
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    width: "80%",
    padding: 10,
    margin: 10,
  },
  button:{
    width: "80%",
    margin: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#FF7514",
  },
  buttonText:{
    fontSize: 20,
  },
  subButtons:{
    padding: 2,
  }
});
