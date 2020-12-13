import React from 'react';
import {Text} from 'react-native';

import Estilo from './estilo';

// export default não precisa nomear a função
// export default function Comp() {
//   return <Text>Comp #Oficial</Text>;
// }
// exemplo export default sem nome na função
export default function () {
  return <Text style={Estilo.txtG}>Comp #Oficial</Text>;
}
// export sem o default é obrigatório nomear a função
// exemplo 1
export function Comp1() {
  return <Text style={Estilo.txtG}>Comp #01</Text>;
}
// exemplo 2
export function Comp2() {
  return <Text style={Estilo.txtG}>Comp #02</Text>;
}
