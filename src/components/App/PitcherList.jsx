import { useState } from "react";
import { useSelector } from "react-redux";

export function PitcherList() {

    const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');

    const pitcherList = useSelector(store => store.pitcherList)

    return <ul>
        {pitcherList.map((pitcher, index) => (
            <li key={index}
                onClick={() => setCurrentPitcher(pitcher)}
            >
                {pitcher}
            </li>
        ))}
    </ul>;
}
