import { useState } from "react";

export function PitcherOnMound() {

    const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');

    return <h2>On the Mound: {currentPitcher}</h2>;
}
