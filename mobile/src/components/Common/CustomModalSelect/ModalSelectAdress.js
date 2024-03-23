import * as React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { debounce } from "lodash";
import useHttps from "../../../hooks/useHttps";
import CustomDialog from "../CustomDialog/CustomDialog";
import CustomSeachbar from "../CustomSeachbar/CustomSeachbar";
import ItemList from "../FlatListTabs/ItemList/ItemList";
import Loader from "../Loader/Loader";

const CustomModalSelect = ({
  visible,
  hideModal,
  renderItem,
  pathData,
  pathSearch,
}) => {
  const [query, setQuery] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [datas, setDatas] = React.useState({ results: [], num_pages: 10 });
  const { https } = useHttps();

  const getDatas = () => {
    if (!isLoading) {
      setIsLoading(true);
      https
        .get(pathData, {
          params: {
            index: 0,
            page_size: 20,
          },
        })
        .then((response) => {
          if (response.data) {
            setDatas({ ...response.data });
          }
        })
        .catch((error) => {})
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleSearch = () => {
    if (!isLoading) {
      if (query && query.length > 3) {
        setIsLoading(true);
        https
          .get(pathSearch, {
            params: {
              index: 0,
              page_size: 20,
              search_term: query,
            },
          })
          .then((response) => {
            if (response.data) {
              setDatas({ ...response.data });
            }
          })
          .catch((error) => {})
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        getDatas();
      }
    }
  };

  const callBackSearch = debounce(handleSearch, 500);

  React.useEffect(() => {
    callBackSearch();
  }, [query]);

  React.useEffect(() => {
    getDatas();
  }, []);

  return (
    <CustomDialog
      visible={visible}
      hideDialog={hideModal}
      headerStyle={styles.headerStyle}
      rootStyle={styles.rootStyle}
      containerStyle={styles.containerStyle}
      actionStyle={styles.actionStyle}
      isScroll={true}
      DialogTitle={
        <Text variant="bodyLarge">
          Sélectionner l'adresse de votre rendez-vous
        </Text>
      }
      DialogContent={
        <View style={{ flex: 1 }}>
            <Text>
              Sélectionner l'adresse de votre rendez-vous
            </Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  rootStyle: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 10,
    height: '100%',
    overflow: "scroll",
  },
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
    flex: 1,
    paddingBottom: 0,
  },
  headerStyle: {
    paddingTop: 0,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#888",
  },
});
export default CustomModalSelect;
