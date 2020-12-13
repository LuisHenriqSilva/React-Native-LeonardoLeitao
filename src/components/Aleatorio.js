import React from 'react';
import {Text} from 'react-native';

import Estilo from './estilo';

export default ({min, max}) => {
  const delta = max - min + 1;
  const aleatorio = parseInt(Math.random() * delta) + min;
  return <Text style={Estilo.txtG}>O valor aleatório é {aleatorio}</Text>;
};

// propriedades são somente leitura sempre criar novas variaveis

// const {} = {}

// => a primeira chave está lendo os atributos de um determinado objeto, a segunda chave é um objeto

// => na primeira chave usa a tecnica de desestruturar que permite filtrar atributos de um determinado objeto

// => na segunda chave, cria-se o objeto e passa os atributos
