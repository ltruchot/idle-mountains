import React, { useState, useEffect } from 'react';
import './App.scss';

// components
import Camp from './app/Camp/Camp';
import Time from './app/Time/Time';
import Actions from './app/Actions/Actions';

// data
import { campsData } from './data/camps.data';

// models
import { Member } from './models/members.model';
import { Action } from './models/actions.model';

// helpers
import { add1Minute } from './helpers/Date.helpers';

// hooks
import { useInterval } from './hooks/useInterval';


const App: React.FC = (_) => {
  // states
  const [camps, setCamps] = useState(campsData);
  const [selectedMember, setSelectedMember] = useState({} as Member);
  const [actionsToBegin, setActionsToBegin] = useState([] as Action[]);
  const [runningActions, setRunningActions] = useState([] as Action[]);
  const [actionsToEnd, setActionsToEnd] = useState([] as Action[]);
  const [date, setDate] = useState(new Date(1930, 10, 25, 16, 5));
  const [delay, setDelay] = useState(10);


  // functions
  const selectMember = (member: Member): void => {
    setSelectedMember(member);
  };
  const toNextTickActions = (action: Action): void => {
    if (!runningActions.find((a) => (a.id === action.id))) {
      setActionsToBegin(() => [...actionsToBegin, action]);
    }
  };

  useEffect(() => {
    if (actionsToBegin.length) {
      setRunningActions([...runningActions, ...actionsToBegin]);
      setActionsToBegin([]);
    }
    if (runningActions.length) {
      const endingAction = runningActions.filter((action) => (action.time <= 0));
      setRunningActions(runningActions
        .map((action) => ({ ...action, time: action.time - 1 }))
        .filter((action) => (action.time > 0)));
      setActionsToEnd(endingAction);
    }
  }, [date]);

  // business
  useInterval(() => {
    setDate(add1Minute(date));
  }, delay);


  return (
    <div className="app">
      <div className="menu">
        <Time now={date} />
      </div>
      <div className="panels">
        <div className="places">
          <div className="camps">
            <h3>Camps</h3>
            { camps.map((camp) => <Camp key={camp.id} infos={camp} changeSelectedMember={selectMember} />) }
          </div>
        </div>
        <Actions beginAction={toNextTickActions} member={selectedMember} running={runningActions} />
      </div>
    </div>
  );
};

export default App;
