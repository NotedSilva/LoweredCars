import * as React from 'react';
import {SafeAreaView, Text, Image, View, StyleSheet, ImageBackground, TouchableOpacity,Linking} from 'react-native';


export default function Home({navigation}){

  const openYoutubeVideo = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=wIh6qX1WsiE&pp=ygUbbyBxdWUgc2FvIGNhcnJvcyByZWJhaXhhZG9z&ab_channel=7008films';

    Linking.openURL(videoUrl);
  };

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.textoTopo}>The greatest</Text>
        <Text style={styles.textoTopo}>Brazilian Lowered Cars</Text>
      </View>

      <View style={styles.centro}>

        <Image
          source={require('../assets/carros.jpg')}
          style={styles.imagem}
        />

        <TouchableOpacity style={styles.btn} onPress={openYoutubeVideo}>
        <Text style={styles.btnTexto}>Where can I get one?</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#47c5ff',
  },
  topo: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  textoTopo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: '95%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
    borderColor: '#000',
    borderWidth: 2,
    backgroundColor: '#0b6a99'
  },
 btn: {
    backgroundColor: '#0b6a99',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  btnTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});