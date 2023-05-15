import { View, Text, StyleSheet } from "react-native";
import { useContext, useState } from "react";

import { PlayerContext } from "../context/playerContext";

import Instructions from "../components/Instructions";
import Stat from "../components/Stat";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

function StatScreen({navigation}) {
    const [points, setPoints] = useState(27);

    const PlayerCtx = useContext(PlayerContext);

    function nextScreen() {
        navigation.navigate('ClassScreen');
    }

    return (
        <View style={styles.container}>
            <Instructions subtext={'Standard Point Buy'}>Choose Your Stats</Instructions>
            <Text style={styles.text}>Points left: {points}</Text>

            <Stat name='STR' value={PlayerCtx.str} pointsLeft={points} pointsHandler={setPoints} onChange={PlayerCtx.setPlayerStr} />
            <Stat name='DEX' value={PlayerCtx.dex} pointsLeft={points} pointsHandler={setPoints} onChange={PlayerCtx.setPlayerDex} />
            <Stat name='CON' value={PlayerCtx.con} pointsLeft={points} pointsHandler={setPoints} onChange={PlayerCtx.setPlayerCon} />
            <Stat name='INT' value={PlayerCtx.int} pointsLeft={points} pointsHandler={setPoints} onChange={PlayerCtx.setPlayerInt} />
            <Stat name='CHA' value={PlayerCtx.cha} pointsLeft={points} pointsHandler={setPoints} onChange={PlayerCtx.setPlayerCha} />
            <Stat name='WIS' value={PlayerCtx.wis} pointsLeft={points} pointsHandler={setPoints} onChange={PlayerCtx.setPlayerWis} />

            <MainButton onPress={nextScreen}>Next</MainButton>
        </View>
        
    );
}

export default StatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundMain,
        alignItems: 'center'
    },
    text: {
        color: Colors.textMain,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30
    }
});