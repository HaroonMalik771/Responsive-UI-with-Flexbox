import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={(styles.TopView)}>
        <View style={(styles.View1)}>
          <Text style={(styles.Text1)}>1</Text>

        </View>
        <View style={styles.View2}>
          <Text style={(styles.Text1)}>2</Text>

        </View>
        <View style={(styles.View3)}>
          <Text style={(styles.Text1)}>3</Text>
        </View>
      </View>
      <View style={(styles.CenterView)}>

        <View style={(styles.View4)}>
          <Text style={(styles.Text1)}>4</Text>

        </View>
        <View style={(styles.View5)}>
          <Text style={(styles.Text1)}>5</Text>
        </View>

      </View>
      <View style={(styles.BottomView)}>
        <View style={(styles.View6)}>
          <Text style={(styles.Text1)}>6</Text>

        </View >
        <View style={(styles.View7)}>
          <Text style={(styles.Text1)}>7</Text>
        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  Text1: {
    fontSize: 15,
    fontStyle: 'italic',
    margin: 10

  },
  TopView: {
    flex: 0.2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center'

  },
  CenterView: {
    flex: 0.2,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'

  },
  BottomView: {
    flex: 0.6,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center'

  },
  View1: {
    flex: 1,

    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center'


  },
  View2: {
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center'

  },
  View3: {

    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center'

  },
  View4: {
    flex: 1,


    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center'

  },
  View5: {
    flex: 1,


    backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center'

  },
  View6: {
    flex: 1,


    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  },
  View7: {
    flex: 1,


    backgroundColor: '#0000cd',
    alignItems: 'center',
    justifyContent: 'center'

  }
});
