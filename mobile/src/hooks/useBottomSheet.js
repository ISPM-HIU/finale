import { useRef } from "react";

const useBottomSheet = () => {
  const bottomSheetRef = useRef(null);

  const handleShow = () => {
    bottomSheetRef.current.present();
  };

  const handleClose = () => {
    bottomSheetRef.current.dismiss();
  };

  return { bottomSheetRef, handleShow, handleClose };
};

export default useBottomSheet;
