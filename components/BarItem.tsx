import { StyleSheet, Text, View, ScrollView} from 'react-native';


export type Props = {
  legend: string;
  barPercentage: string;
};

let generateStyle = function(props : Props) {
  let ret = {
    flex:1,
    height: props.barPercentage,
    backgroundColor: "#F53",
    borderWidth: 1,
    borderColor: "white",
    borderStyle:"solid",
    justifyContent: "flex-end",
  };

  if (props.barPercentage == "0%") {
    ret["height"] = "100%";
    ret["backgroundColor"] = "white";
  }
  return ret;
};

export default function BarItem(props : Props) {
  return <View style={generateStyle(props)}>
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