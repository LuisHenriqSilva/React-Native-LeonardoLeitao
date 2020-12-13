import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  txtG: {
    fontSize: 32,
    textAlign: 'center',
  },
});

// medidas CSS => (px, pt, em,rem, %,)

//#elemento { margin: top right bottom left };
//#elemento { margin: 15px 10px 25px 35px; }

// valor da margem do top igual a do bottom e right igual a left
//#elemento { margin: 25px 10px }

// uma msm medida para todos
// #elemento { margin: 10px; }

// margin pega margem externa
// padding pega margem interna

// The CCS Box Model
// => Content - The content of the box, where text and images appear
// => Padding - Clears an area around the content. The padding is transparent
// => Border - A border that goes around the padding and content
// => Margin - Clears an area outside the border. The margin is transparent
