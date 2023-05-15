import { createContext, useState } from "react";

export const PlayerContext = createContext({
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    cha: 0,
    wis: 0,
    setPlayerStr: (input) => {},
    setPlayerDex: (input) => {},
    setPlayerCon: (input) => {},
    setPlayerInt: (input) => {},
    setPlayerCha: (input) => {},
    setPlayerWis: (input) => {},
});

function PlayerContextProvider({children}) {
    const [playerStr, setPlayerStr] = useState(8);
    const [playerDex, setPlayerDex] = useState(8);
    const [playerCon, setPlayerCon] = useState(8);
    const [playerInt, setPlayerInt] = useState(8);
    const [playerCha, setPlayerCha] = useState(8);
    const [playerWis, setPlayerWis] = useState(8);

    const value= {
        str: playerStr,
        dex: playerDex,
        con: playerCon,
        int: playerInt,
        cha: playerCha,
        wis: playerWis,
        setPlayerStr: setPlayerStr,
        setPlayerDex: setPlayerDex,
        setPlayerCon: setPlayerCon,
        setPlayerInt: setPlayerInt,
        setPlayerCha: setPlayerCha,
        setPlayerWis: setPlayerWis,
    }

    return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export default PlayerContextProvider;