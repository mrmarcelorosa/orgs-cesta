import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../components/Texto";

export default function Item({ item: { nome, imagem } }) {
    return <View style={styles.item}>
        <Image source={imagem} style={styles.imagem} />
        <Texto style={styles.nome} key={nome}>{nome}</Texto>
    </View>
}

const styles = StyleSheet.create({

    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center"
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})