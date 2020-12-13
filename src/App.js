import React from 'react';
import {View, StyleSheet} from 'react-native';

import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import Primeiro from './components/Primeiro';

export default () => (
  <View style={style.App}>
    <Titulo
      principal="Cadastro Produto"
      secundario="Tela de Cadastro do produto"
    />
    {/* <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} /> */}
    {/* <MinMax min={3} max={20} /> */}
    {/* <MinMax min={1} max={94} /> */}
    {/* <CompPadrao /> */}
    {/* <Comp1 /> */}
    {/* <Comp2 /> */}
    {/* <Primeiro /> */}
  </View>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center', // coloca os elementos que estão no eixo vertical no centro
    alignItems: 'center', // coloca os elementos que estão no eixo horizontal no centro
    padding: 20,
  },
});
