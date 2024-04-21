import { StyleSheet, Text, View, ScrollView} from 'react-native';


export type Props = {
  legend: string;
  barPercentage: string;
};

export default function BarItem(props : Props) {
  return <View style={{
      flex:1,
      height: props.barPercentage,
      backgroundColor: "#F53",
      borderWidth: 1,
      borderColor: "white",
      borderStyle:"solid",
      justifyContent: "flex-end",
    }}>
    <Text style={styles.legend}>{props.legend}</Text>
  </View>;
};

const styles = StyleSheet.create({

  legend : {
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "flex-start"
  },

});