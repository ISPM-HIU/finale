import * as React from "react";
import { Dialog, Portal } from "react-native-paper";

const CustomDialog = ({
  visible,
  hideDialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  containerStyle,
  actionStyle,
  rootStyle,
  headerStyle,
  dismissable = true,
  isScroll = false,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <Portal>
      <Dialog
        dismissable={dismissable}
        visible={visible}
        onDismiss={hideDialog}
        style={rootStyle}
      >
        {DialogTitle && (
          <Dialog.Title style={headerStyle}>{DialogTitle}</Dialog.Title>
        )}
        <Dialog.Content style={containerStyle}>
          {isScroll ? (
            DialogContent
          ) : (
            <Dialog.ScrollArea>{DialogContent}</Dialog.ScrollArea>
          )}
        </Dialog.Content>
        {DialogActions && (
          <Dialog.Actions style={actionStyle}>{DialogActions}</Dialog.Actions>
        )}
      </Dialog>
    </Portal>
  );
};

export default CustomDialog;
