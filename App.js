import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "react-native-magnus";

function TelaInicial({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.paragrafo}>CURRICULUM VITAE</Text>
            <Image
              h={250}
              w={250}
              m={45}
              rounded="circle"
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
              }}
            />
      <Button
        title="Registro Pessoal"
        onPress={() => navigation.navigate('Registro')}
      />
      <Button
        title="Experiência"
        onPress={() => navigation.navigate('Experiencia')}
      />
       <Button
        title="Formação Acadêmica"
        onPress={() => navigation.navigate('Formacao')}
      />
        <Button
        title="Atividades Extracurriculares"
        onPress={() => navigation.navigate('Atividades')}
      />
        <Button
        title="Hobbies"
        onPress={() => navigation.navigate('Hobbies')}
      />
      
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {

  const [registro, setRegistro] = useState([])
  const [experiencia, setExperiencia] = useState([])
  const [formacao, setFormacao] = useState([])
  const [atividade, setAtividade] = useState([])
  const [hobbie, setHobbie] = useState([])

  useEffect(()=>{
    async function getAllRegistro(){
    try {
      const registro = await axios.get("https://back-end-api-node.onrender.com/registropessoal")
      console.log(registro.data)
      setRegistro(registro.data)
    } catch (error) {
      console.log(error)
    }
    }
    getAllRegistro()
  }, [])

  useEffect(()=>{
    async function getAllExperiencia(){
    try {
      const experiencia = await axios.get("https://back-end-api-node.onrender.com/experiencia")
      console.log(experiencia.data)
      setExperiencia(experiencia.data)
    } catch (error) {
      console.log(error)
    }
    }
    getAllExperiencia()
  }, [])

    useEffect(()=>{
    async function getAllFormacao(){
    try {
      const formacao = await axios.get("https://back-end-api-node.onrender.com/formacaoacademica")
      console.log(formacao.data)
      setFormacao(formacao.data)
    } catch (error) {
      console.log(error)
    }
    }
    getAllFormacao()
  }, [])

      useEffect(()=>{
    async function getAllAtividade(){
    try {
      const atividade = await axios.get("https://back-end-api-node.onrender.com/atividadesextra")
      console.log(atividade.data)
      setAtividade(atividade.data)
    } catch (error) {
      console.log(error)
    }
    }
    getAllAtividade()
  }, [])

        useEffect(()=>{
    async function getAllHobbie(){
    try {
      const hobbie = await axios.get("https://back-end-api-node.onrender.com/hobbie")
      console.log(hobbie.data)
      setHobbie(hobbie.data)
    } catch (error) {
      console.log(error)
    }
    }
    getAllHobbie()
  }, [])

function Registro() {
  return (
    <View style={styles.container}>
      <FlatList 
      data = {registro}
      renderItem={({item})=>
      <Text style={styles.estilo}>{item.nome}{"\n"}{item.idade}{" anos"}{"\n\n"}{item.bairro}{"\n"}{item.cidadeEstado}</Text>}
      keyExtractor={item => item._id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function Experiencia() {
  return (
    <View style={styles.container}>
      <FlatList 
      data = {experiencia}
      renderItem={({item})=>
      <Text style={styles.estilo}>{item.descricao}{"\n"}{item.local}{"\n"}{item.periodo}</Text>}
      keyExtractor={item => item._id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function Formacao() {
  return (
    <View style={styles.container}>
      <FlatList 
      data = {formacao}
      renderItem={({item})=>
      <Text style={styles.estilo}>{item.descricao}{"\n"}{item.local}{"\n"}{item.periodo}</Text>}
      keyExtractor={item => item._id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function Atividades() {
  return (
    <View style={styles.container}>
      <FlatList 
      data = {atividade}
      renderItem={({item})=>
      <Text style={styles.estilo}>{item.descricao}{"\n"}{item.local}{"\n"}{item.periodo}</Text>}
      keyExtractor={item => item._id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function Hobbies() {
  return (
    <View style={styles.container}>
      <FlatList 
      data = {hobbie}
      renderItem={({item})=>
      <Text style={styles.estilo}>{item.descricao}{"\n"}{item.local}{"\n"}{item.periodo}</Text>}
      keyExtractor={item => item._id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

  return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="TelaInicial" component={TelaInicial}  options={{ title: 'Tela Inicial' }} />
        <Stack.Screen name="Registro" component={Registro}  options={{ title: 'Registro Pessoal' }} />
        <Stack.Screen name="Experiencia" component={Experiencia} options={{ title: 'Experiência'}} />
        <Stack.Screen name="Formacao" component={Formacao} options={{ title: 'Formação Acadêmica'}} />
        <Stack.Screen name="Atividades" component={Atividades} options={{ title: 'Atividades Extracurriculares'}} />
        <Stack.Screen name="Hobbies" component={Hobbies} options={{ title: 'Hobbies'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'lightgray',
    padding: 8,
  },
    paragrafo: {
    margin: 2,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  estilo: {
    margin: 10,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
