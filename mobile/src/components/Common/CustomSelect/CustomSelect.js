import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { PaperSelect } from "react-native-paper-select";
import useLang from "../../../hooks/useLang";

export default function CustomSelect({
  data,
  onSelection,
  label,
  textInputMode,
  required = false,
}) {
  const theme = useTheme();
  const { getText } = useLang();
  const labelRequired = required ? "*" : "";
  return (
    <PaperSelect
      label={`${getText(label)} ${labelRequired}`}
      value={data.value}
      textInputMode={textInputMode || "outlined"}
      hideSearchBox={true}
      selectAllEnable={false}
      dialogDoneButtonText="Ok"
      dialogCloseButtonText="Annuler"
      dialogTitleStyle={styles.dialogTitleStyle}
      onSelection={onSelection}
      checkboxProps={{
        checkboxLabelStyle: {
          marginVertical: 20,
        },
        checkboxColor: theme.colors.primary,
      }}
      arrayList={data.list}
      selectedArrayList={data.selectedList}
      multiEnable={false}
    />
  );
}

const styles = StyleSheet.create({
  dialogTitleStyle: {
    fontSize: 20,
    margin: 0,
  },
});
