import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Loader from "../Loader/Loader";
import NoData from "../NoData/NoData";

export default function ItemListScroll({
  data,
  isLoading,
  callBack,
  index,
  renderItem,
  children,
  isCustom = false
}) {
  const uniqueArray = Array.from(
    new Map(data.results.map((item) => [item.id, item])).values()
  );
  const lists = isCustom ? data.results : uniqueArray
  return (
    <ScrollView
      contentContainerStyle={{ padding: 20 }}
      scrollEventThrottle={16}
      onScroll={({ nativeEvent }) => {
        const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
        const isEndReached =
          layoutMeasurement.height + contentOffset.y >= contentSize.height;
        if (isEndReached && index < data.num_pages) {
          if (callBack) {
            callBack();
          }
        }
      }}
    >
      {children}
      {lists.map((item, index) => (
        <View style={styles.item} key={`${item.id}${index}`}>
          {renderItem({ item })}
        </View>
      ))}
      {isLoading && index ? <Loader /> : null}
      {!isLoading && lists.length === 0 && <NoData />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 10,
  },
});
