import { View } from "react-native";
import { useState } from "react";
import { Searchbar } from "react-native-paper";
import useLang from "../../../hooks/useLang";

const CustomSeachbar = ({ callBack, rootStyle, barStyle }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { getText } = useLang();
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    if (callBack) {
      callBack(query);
    }
  };

  return (
    <View style={[{ padding: 20 }, rootStyle]}>
      <Searchbar
        placeholder={getText("search","...")}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={[{ backgroundColor: "whitesmoke", borderRadius: 5 }, barStyle]}
      />
    </View>
  );
};

export default CustomSeachbar;
