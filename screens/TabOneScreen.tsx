import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import CatrgoryListitem from '../components/CategoryListitem';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <CatrgoryListitem/>
      <CatrgoryListitem/>
      <CatrgoryListitem/>
    </View>
  );
}

const styles = StyleSheet.create({

container:{
  flex:1,
  alignItems:'stretch',
  backgroundColor:'#fff',
  justifyContent:'center',
  paddingLeft:16,
  paddingRight:16
}
});
