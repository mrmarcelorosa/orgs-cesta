import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({children, style}){
    let estilo = styles.text;

    if(style?.fontWeight === 'bold'){
        estilo = styles.textBold
    }

    return <Text style={[style,estilo]}> {children}</Text>
}

const styles = StyleSheet.create({
    text:{
        fontFamily: "MontserratRegular",
        fontWeight: 'normal'
    },
    textBold:{
        fontFamily: "MontserratBold",
        fontWeight: 'normal'
    }
})