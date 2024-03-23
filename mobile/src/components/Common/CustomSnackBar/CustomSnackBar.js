import * as React from "react";
import { Snackbar, useTheme } from "react-native-paper";

const CustomSnackBar = ({ visible, setVisible, message, type, hasAction = true }) => {
  const theme = useTheme();
  const onDismissSnackBar = () => setVisible(false);
  const backgroundColor =
    type == "error"
      ? theme.colors.error
      : type == "success"
      ? theme.colors.success
      : theme.colors.primary;
  return (
    <Snackbar
      visible={visible}
      style={{ backgroundColor }}
      onDismiss={onDismissSnackBar}
      action={hasAction && {
        label: "Fermer",
        onPress: () => onDismissSnackBar,
      }}
    >
      {message}
    </Snackbar>
  );
};

export default CustomSnackBar;