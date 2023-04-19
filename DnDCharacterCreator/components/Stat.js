import { View, StyleSheet, Text, Pressable} from "react-native";
import { useState } from "react";

import BasicButton from "./BasicButton";
import Colors from "../constants/colors";

function Stat({name, startValue, pointsLeft, pointsHandler}) {
    const [value, setValue] = useState(startValue);

    function getMod(value){
        return Math.floor((value - 10) / 2);
    }

    function buttonSubtract() {
        if (value > 1) {
            setValue(value - 1);
            pointsHandler(pointsLeft + 1)
        }
    }
    function buttonAdd() {
        if (pointsLeft > 0){
            if (value < 20) {
                setValue(value + 1);
                pointsHandler(pointsLeft - 1)
            }
        }
    }
    return (
        <View style={styles.container}>
            <BasicButton onPress={buttonSubtract}> - </BasicButton>
            
            <Text style={styles.text}>{name}: {value} ({getMod(value)})</Text>

            <BasicButton onPress={buttonAdd}> + </BasicButton>
            
        </View>
    )
}

export default Stat;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 8,
        flexDirection: 'row'
    },
    text: {
        fontSize: 24,
        color: Colors.textMain,
        marginHorizontal: 10
    }
});