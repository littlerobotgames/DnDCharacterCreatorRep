import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

function Instructions({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

export default Instructions;

const styles = StyleSheet.create({
    container: {
        marginBottom: 25,
        marginTop: 75,
        borderBottomColor: Colors.textMain,
        borderBottomWidth: 2,
    },
    text: {
        color: Colors.textMain,
        fontSize: 30,
        textAlign: 'center',
    }
});