import { useState } from "react";
import { useDispatch } from "react-redux";

export function CatcherForm() {

    const dispatch = useDispatch();

    const [newCatcher, setNewCatcher] = useState('');

    const handleCatcherSubmit = event => {
        event.preventDefault();
        console.log("inside handleCatcherSubmit()", newCatcher)
        dispatch({
            type: 'ADD_CATCHER',
            payload: newCatcher
        })
    }

    return <form onSubmit={handleCatcherSubmit}>
        <input
            type="text"
            value={newCatcher}
            onChange={event => setNewCatcher(event.target.value)}
            placeholder="New Catcher Name" />
        <button type="submit">Add Catcher</button>
    </form>;
}
