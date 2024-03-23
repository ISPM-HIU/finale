import React from "react";
import { DataTable } from "react-native-paper";

const HouseData = ({ house }) => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Matériel</DataTable.Title>
        <DataTable.Title>État</DataTable.Title>
      </DataTable.Header>
      {house &&
        house.length &&
        house.map((materiel, idx) => (
          <DataTable.Row key={idx}>
            <DataTable.Cell>{materiel.name}</DataTable.Cell>
            <DataTable.Cell>
              {materiel.name != "securite"
                ? materiel.value
                  ? "Ouvert"
                  : "Fermer"
                : materiel.value
                ? "Activé"
                : "Desactivé"}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
    </DataTable>
  );
};

export default HouseData;
