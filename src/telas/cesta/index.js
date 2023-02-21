import React from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import Texto from "../../components/Texto";
import Detalhes from "./components/Detalhes";
import Item from "./components/Item";
import Topo from "./components/Topo";

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={styles.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={styles.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const styles = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
})
