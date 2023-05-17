import { View, StyleSheet, Pressable, Text } from "react-native";

import Colors from "../../constants/colors";

function BasicButton({children, onPress}) {
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

export default BasicButton;

const styles = StyleSheet.create({
    buttonContainerOuter: {
        marginHorizontal: 10,
        overflow: 'hidden'
    },
    buttonContainerInner: {
        borderColor: Colors.textMain,
        borderWidth: 2,
        borderRadius: 5,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 30,
        color: Colors.textMain,
    }
})