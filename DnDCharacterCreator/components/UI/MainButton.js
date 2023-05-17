import { View, StyleSheet, Pressable, Text } from "react-native";

import Colors from "../../constants/colors";

function MainButton({children, onPress}) {
    return (
        <View styles={styles.buttonContainerOuter}>
            <Pressable 
                style={styles.buttonContainerInner}
                onPress={onPress}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default MainButton;

const styles = StyleSheet.create({
    buttonContainerOuter: {
        marginHorizontal: 10,
    },
    buttonContainerInner: {
        borderColor: Colors.textMain,
        borderWidth: 2,
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 150
    },
    buttonText: {
        fontSize: 24,
        color: Colors.textMain,
    }
})