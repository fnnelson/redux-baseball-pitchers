import { useState } from 'react';

// import REDUX stuff
import { useSelector, useDispatch } from 'react-redux';
import { PitcherTotal } from './PitcherTotal';
import { CatcherTotal } from './CatcherTotal';
import { PitcherOnMound } from './PitcherOnMound';
import { PitcherForm } from './PitcherForm';

function App() {
  // setting up dispatch, to use like action walkie talkie
  const dispatch = useDispatch();

  // local state stuff
  const [newCatcher, setNewCatcher] = useState('');
  const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');
  const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');

  // redux reducer stuff
  // store.pitcherList / store.catcherList is targeting the baseballStore objects which are passed along in property of store in index.js
  const pitcherList = useSelector(store => store.pitcherList)
  const catcherList = useSelector(store => store.catcherList)

  // const [pitcherList, setPitcherList] = useState(['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia']);
  // const [catcherList, setCatcherList] = useState(['Roy Campanella', 'Elston Howard', 'Kenji Jojima']);

  // const handlePitcherNameChange = event => {
  //   setNewPitcher(event.target.value);
  // };

  // // add new pitcher to the array. this will move to the pitcher reducer!
  // const handlePitcherSubmit = event => {
  //   event.preventDefault();
  //   // spread: give me everything in pitcherList, then add this new thing
  //   setPitcherList([...pitcherList, newPitcher]);
  //   setNewPitcher('');
  // };

  // const handleCatcherNameChange = event => {
  //   setNewCatcher(event.target.value);
  // };

  // // add new catcher to array. this will move to the catcher reducer!
  // const handleCatcherSubmit = event => {
  //   event.preventDefault();
  //   // spread: give me everything in catcherList, then add this new thing
  //   setCatcherList([...catcherList, newCatcher]);
  //   setNewCatcher('');
  // };

  // redux version of handlers

  const handleCatcherSubmit = event => {
    event.preventDefault();
    console.log("inside handleCatcherSubmit()", newCatcher)
    dispatch({
      type: 'ADD_CATCHER',
      payload: newCatcher
    })
  }

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <PitcherOnMound currentPitcher={currentPitcher} />
      <h2>Behind the Plate: {currentCatcher}</h2>
      <PitcherTotal />
      <CatcherTotal />
      <h3>All Pitchers</h3>
      <PitcherForm />
      <ul>
        {pitcherList.map((pitcher, index) => (
          <li key={index}
            onClick={() => setCurrentPitcher(pitcher)}
          >
            {pitcher}
          </li>
        ))}
      </ul>
      <h3>All Catchers</h3>
      <form onSubmit={handleCatcherSubmit}>
        <input
          type="text"
          value={newCatcher}
          onChange={event => setNewCatcher(event.target.value)}
          placeholder="New Catcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
      <ul>
        {catcherList.map((catcher, index) => (
          <li key={index}
            onClick={() => setCurrentCatcher(catcher)}
          >
            {catcher}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



