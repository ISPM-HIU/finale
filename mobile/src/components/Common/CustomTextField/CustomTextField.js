import { useRef } from "react";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import useLang from "../../../hooks/useLang";
import lan from "../../../multilangue/multilangue";

const CustomTextField = ({
  value,
  keyItem,
  label,
  style,
  isPassword,
  handleChange,
  handleFocus,
  type,
  mode,
  right,
  left,
  editable,
  disabled,
  isError = false,
  multiline,
  messageErrorHepler = "",
  placeholder,
  isNotChangeOnEdit,
  isRequired = false,
  ...rest
}) => {
  const textInputRef = useRef();

  const handlePressIn = () => {
    if (isNotChangeOnEdit) {
      handleFocus();
      textInputRef.current.blur();
    }
  };
  const { lang } = useLang();
  const required = isRequired ? "*" : "";
  return (
    <View>
      <TextInput
        multiline={multiline}
        ref={textInputRef}
        label={label}
        value={value}
        placeholder={placeholder}
        style={{ backgroundColor: "white", ...style }}
        mode={mode || "outlined"}
        secureTextEntry={isPassword || false}
        textContentType={type || "none"}
        disabled={disabled}
        editable={editable ? editable : true}
        onChangeText={(text) => {
          if (handleChange) {
            handleChange(keyItem, text);
          }
        }}
        onPressOut={handlePressIn}
        error={isError}
        right={right || null}
        left={left || null}
        {...rest}
      />
      {isError && (
        <HelperText
          type="error"
          style={{ marginBottom: isError ? 10 : 0 }}
          visible={isError}
        >
          {lan[lang][messageErrorHepler]}
        </HelperText>
      )}
    </View>
  );
};

export default CustomTextField;
