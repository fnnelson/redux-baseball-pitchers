import { useState } from 'react';

// import REDUX stuff
import { useSelector, useDispatch } from 'react-redux';
import { PitcherTotal } from './PitcherTotal';
import { CatcherTotal } from './CatcherTotal';
import { PitcherOnMound } from './PitcherOnMound';
import { PitcherForm } from './PitcherForm';
import { CatcherForm } from './CatcherForm';
import { PitcherList } from './PitcherList';
import { CatcherList } from './CatcherList';
import { CatcherOnMound } from './CatcherOnMound';

function App() {
  // setting up dispatch, to use like action walkie talkie
  const dispatch = useDispatch();

  // local state stuff - STILL NEED TO MOVE TO GLOBAL STATE
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

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <PitcherOnMound />
      <CatcherOnMound />
      <PitcherTotal />
      <CatcherTotal />
      <h3>All Pitchers</h3>
      <PitcherForm />
      <PitcherList />
      <h3>All Catchers</h3>
      <CatcherForm />
      <CatcherList />
    </div>
  );
}

export default App;







