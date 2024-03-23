import { StyleSheet, View } from "react-native";
import {
  ActivityIndicator,
  Modal,
  Portal,
  Text,
  useTheme,
} from "react-native-paper";
import { useSelector } from "react-redux";
import useLang from "../../../hooks/useLang";

const CustomBackDrop = () => {
  const backdrop = useSelector((state) => state.backdrop);
  const { getText } = useLang();
  const theme = useTheme();
  return (
    <Portal>
      <Modal
        visible={backdrop.visible}
        dismissable={false}
        dismissableBackButton={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <View>
            <ActivityIndicator
              size={"small"}
              animating={true}
              color={theme.colors.primary}
            />
          </View>
          <View>
            <Text variant="bodyMedium">{getText("backDropWait")}</Text>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default CustomBackDrop;

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    alignSelf: "center",
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    width: 200,
    borderRadius: 4,
    height: 100,
    alignItems: "center",
  },
});
