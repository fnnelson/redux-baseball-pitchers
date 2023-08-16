import { useState } from "react";
import { useDispatch } from "react-redux";

export function PitcherForm() {

    const dispatch = useDispatch();

    const [newPitcher, setNewPitcher] = useState('');

    const handlePitcherSubmit = event => {
        event.preventDefault();
        console.log("inside handlePitcherSubmit()", newPitcher)
        dispatch({
            type: 'ADD_PITCHER',
            payload: newPitcher
        })
    }

    return <form onSubmit={handlePitcherSubmit}>
        <input
            type="text"
            value={newPitcher}
            onChange={event => setNewPitcher(event.target.value)}
            placeholder="New Pitcher Name" />
        <button type="submit">Add Pitcher</button>
    </form>;
}
