import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../../components/Texto";

export default function Botao({ texto, onPress, style }) {
    return <>
        <TouchableOpacity style={[styles.botao, style]} onPress={onPress}>
            <Texto style={styles.textoBotao}>{texto}</Texto>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
});