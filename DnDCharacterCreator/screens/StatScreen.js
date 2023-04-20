import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import Instructions from "../components/Instructions";
import Stat from "../components/Stat";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

function StatScreen({setPlayerObject, nextScreen}) {
    const [points, setPoints] = useState(27);

    return (
        <View style={styles.container}>
            <Instructions>Choose Your Stats</Instructions>
            <Text style={styles.text}>Points left: {points}</Text>

            <Stat name='STR' startValue={8} pointsLeft={points} pointsHandler={setPoints}/>
            <Stat name='DEX' startValue={8} pointsLeft={points} pointsHandler={setPoints}/>
            <Stat name='CON' startValue={8} pointsLeft={points} pointsHandler={setPoints}/>
            <Stat name='INT' startValue={8} pointsLeft={points} pointsHandler={setPoints}/>
            <Stat name='CHA' startValue={8} pointsLeft={points} pointsHandler={setPoints}/>
            <Stat name='WIS' startValue={8} pointsLeft={points} pointsHandler={setPoints}/>

            <MainButton onPress={nextScreen}>Next</MainButton>
        </View>
        
    )
}

export default StatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: Colors.textMain,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30
    }
});