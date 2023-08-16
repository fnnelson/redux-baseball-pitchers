import { useState } from "react";
import { useSelector } from "react-redux";

export function CatcherList() {

    const catcherList = useSelector(store => store.catcherList)

    const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');

    return <ul>
        {catcherList.map((catcher, index) => (
            <li key={index}
                onClick={() => setCurrentCatcher(catcher)}
            >
                {catcher}
            </li>
        ))}
    </ul>;
}
