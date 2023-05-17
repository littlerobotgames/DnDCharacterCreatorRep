import { View, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";

import { PlayerContext } from "../../context/playerContext";

import Instructions from "../../components/UI/Instructions";
import Stat from '../../components/charactercreate/Stat';
import MainButton from "../../components/UI/MainButton";
import Colors from "../../constants/colors";

import { POINT_BUY_STANDARD } from "../../store/data";

function StatScreen({navigation}) {
    const [points, setPoints] = useState(27);

    const PlayerCtx = useContext(PlayerContext);

    function nextScreen() {
        navigation.navigate('ClassScreen');
    }

    useEffect(() => {
        const p = 27 - (POINT_BUY_STANDARD[PlayerCtx.str] + POINT_BUY_STANDARD[PlayerCtx.dex] + POINT_BUY_STANDARD[PlayerCtx.con]
                    +POINT_BUY_STANDARD[PlayerCtx.int] + POINT_BUY_STANDARD[PlayerCtx.cha] + POINT_BUY_STANDARD[PlayerCtx.wis]);
        setPoints(p);
    }, [PlayerCtx])

    return (
        <View style={styles.container}>
            <Instructions subtext={'Standard Point Buy'}>Choose Your Stats</Instructions>
            <Text style={styles.text}>{'Points Left: '+points}</Text>

            <Stat name='STR' value={PlayerCtx.str} pointsLeft={points} changeStat={PlayerCtx.setPlayerStr} />
            <Stat name='DEX' value={PlayerCtx.dex} pointsLeft={points} changeStat={PlayerCtx.setPlayerDex} />
            <Stat name='CON' value={PlayerCtx.con} pointsLeft={points} changeStat={PlayerCtx.setPlayerCon} />
            <Stat name='INT' value={PlayerCtx.int} pointsLeft={points} changeStat={PlayerCtx.setPlayerInt} />
            <Stat name='CHA' value={PlayerCtx.cha} pointsLeft={points} changeStat={PlayerCtx.setPlayerCha} />
            <Stat name='WIS' value={PlayerCtx.wis} pointsLeft={points} changeStat={PlayerCtx.setPlayerWis} />

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