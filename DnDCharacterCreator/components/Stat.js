import { View, StyleSheet, Text} from "react-native";

import BasicButton from "./BasicButton";
import Colors from "../constants/colors";

function Stat({name, value, pointsLeft, pointsHandler, onChange}) {
    function getMod(value){
        return Math.floor((value - 10) / 2);
    }

    function buttonSubtract() {
        if (value > 8) {
            onChange(value - 1);
            pointsHandler(pointsLeft + 1)
        }
    }
    function buttonAdd() {
        if (pointsLeft > 0){
            if (value < 15) {
                onChange(value + 1)
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
        flexDirection: 'row',
    },
    text: {
        fontSize: 24,
        color: Colors.textMain,
        marginHorizontal: 10,
        width: 150,
        textAlign: 'center'
    }
});