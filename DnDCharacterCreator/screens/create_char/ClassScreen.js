import { View, StyleSheet } from "react-native";
import Instructions from "../../components/UI/Instructions";

import Colors from "../../constants/colors";

function ClassScreen() {
    return (
        <View style={styles.container}>
            <Instructions>Choose Your Class</Instructions>
        </View>
    );
}

export default ClassScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundMain,
        justifyContent: 'center',
        alignItems: 'center'
    },
})