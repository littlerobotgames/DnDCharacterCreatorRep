import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Instructions({children, subtext}) {
    return (
        <View>
            <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
            </View>
        <Text style={styles.subtext}>- {subtext} -</Text>
        </View>
        
       
    )
}

export default Instructions;

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        marginTop: 75,
        borderBottomColor: Colors.textMain,
        borderBottomWidth: 2,
    },
    text: {
        color: Colors.textMain,
        fontSize: 30,
        textAlign: 'center',
    },
    subtext: {
        color: Colors.textMain,
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center'
    }
});