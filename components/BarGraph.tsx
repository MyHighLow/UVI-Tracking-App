import BarItem from './BarItem';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {useMemo} from 'react';

export type Props = {
    dataArray: Array<{
        value: number,
        legend: string
    }>;
};


export default function BarGraph({dataArray} : Props) {
    const barItems = useMemo(() => {
        let highestValue = 0;
    
        // get the highest value
        dataArray.forEach(({ value }) => {
          highestValue = Math.max(highestValue, value);
        });
    
        // calculate "barPercentage" using the "highestValue" to construct the bar items
        return dataArray.map((item) => ({
          legend: item.legend,
          barPercentage: `${Math.round((item.value / highestValue) * 100)}%`,
        }));
      }, [dataArray]);


  return (
    <View style={styles.barGraph}>
      <View style={styles.barsList}>
        {barItems.map((barItem, idx) => (
          <BarItem
            key={idx}
            legend={barItem.legend}
            barPercentage={barItem.barPercentage}
          />
        ))}
      </View>
      <View style={styles.barsLine}/>
    </View>
  );
};

const styles = StyleSheet.create({
    barGraph : {
        alignSelf: "center",
        position: "relative",
        width: "100%",
        maxWidth: "400px",
        height: "170px",
      },
      
      barsList : {
        flexDirection: "row",
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
        height: "100%",
      },
      
      barsLine : {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "1px",
        backgroundColor: "#505050",
        opacity: 0.5,
        pointerEvents: "none",
      }

});