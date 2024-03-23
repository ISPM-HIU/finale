import { Button } from "react-native-paper";
import useLang from "../../../hooks/useLang";
import lan from "../../../multilangue/multilangue";

const ButtonNavigate = ({
  label,
  handlePress,
  style,
  mode,
  isDisabled,
  isLoading = false,
}) => {
  const { lang } = useLang();
  return (
    <Button
      onPress={handlePress}
      loading={isLoading}
      mode={mode || "contained"}
      style={{ borderRadius: 4, paddingVertical: 5, ...style }}
      disabled={isDisabled}
    >
      {lan[lang][label]}
    </Button>
  );
};

export default ButtonNavigate;
