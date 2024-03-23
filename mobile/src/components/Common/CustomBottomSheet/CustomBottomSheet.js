import {
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import CustomHeader from "./CustomHeader/CustomHeader";
import CustomBackdrop from "./CustomBackdrop/CustomBackdrop";

const CustomBottomSheet = ({ bottomSheetRef, children, title, index }) => {
  const snapPoints = useMemo(() => ["40%", "60%", "90%", "95%","100%"], []);

  const handleSheetChanges = useCallback((index) => {}, []);

  const handleClose = () => {
    bottomSheetRef.current.dismiss();
  };

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={index}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enableDismissOnClose={true}
      backdropComponent={(props) => <CustomBackdrop {...props} />}
    >
      <BottomSheetView style={styles.contentContainer}>
        <CustomHeader handleClose={handleClose} title={title} />
        <BottomSheetScrollView>{children}</BottomSheetScrollView>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    height: "100%",
  },
});

export default CustomBottomSheet;
