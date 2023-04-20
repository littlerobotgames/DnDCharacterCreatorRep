import { View, StyleSheet } from "react-native";
import Instructions from "../components/Instructions";

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
        flex: 1
    }
})