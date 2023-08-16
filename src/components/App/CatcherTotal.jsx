import { useSelector } from "react-redux";

export function CatcherTotal() {
    // need to access store to use variables inside of store
    const catcherList = useSelector(store => store.catcherList)

    return <div>Total Catchers: {catcherList.length}</div>;
}
