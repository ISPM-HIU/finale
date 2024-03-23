import React from "react";
import { StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import Loader from "../Loader/Loader";
import NoData from "../NoData/NoData";

const ItemList = ({
  data,
  index,
  isLoading,
  numPages,
  renderItem,
  callback,
  horizontal = false,
  keyUnique = "id",
  isCustom = false,
  text,
}) => {
  const uniqueArray = Array.from(
    new Map(data.map((item) => [item[keyUnique], item])).values()
  );
  const customData = isCustom ? data : uniqueArray;
  const keyExtractor = isCustom
    ? (item, i) => `${i}`
    : (item, i) => `${item[keyUnique]}-${i}`;
  return (
    <View style={styles.container}>
      {customData && customData.length ? (
        <FlashList
          data={customData}
          estimatedItemSize={numPages * 10}
          horizontal={horizontal}
          keyExtractor={keyExtractor}
          onEndReached={() => {
            if (index < numPages) {
              if (callback) {
                callback();
              }
            }
          }}
          onEndReachedThreshold={0.5}
          renderItem={renderItem}
          ListFooterComponent={() =>
            isLoading && customData.length && index ? <Loader /> : null
          }
        />
      ) : (
        <NoData text={text} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
export default ItemList;
