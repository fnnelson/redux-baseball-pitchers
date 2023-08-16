import { useSelector } from "react-redux";

export function PitcherTotal() {
    // need to access store to use variables inside of store
    const pitcherList = useSelector(store => store.pitcherList)

    return <div>Total Pitchers: {pitcherList.length}</div>;
}
