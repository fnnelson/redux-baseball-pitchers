import { useState } from "react";

export function CatcherOnMound() {

    const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');

    return <h2>Behind the Plate: {currentCatcher}</h2>;
}
