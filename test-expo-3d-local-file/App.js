import { StyleSheet, View } from 'react-native';
import ThreeScene from './src/components/ThreeScene';
import ThreeD from './src/components/ThreeD';
import ExpoGL from './src/components/ExpoGL';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoGL />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
