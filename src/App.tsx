import React, { useState, useEffect } from 'react';
import './App.scss';

// components
import Camp from './app/Camp/Camp';
import Time from './app/Time/Time';
import Actions from './app/Actions/Actions';

// data
import { campsData } from './data/camps.data';

// models
import { IMember } from './models/members.model';
import { useInterval } from './hooks/useInterval';
import { add1Minute } from './helpers/Date.helpers';
import { Action, emptyActions } from './models/actions.model';
import { usePrevious } from './hooks/usePrevious';


const App: React.FC = (_) => {
  // states
  const [camps, setCamps] = useState(campsData);
  const [selectedMembers, setSelectedMembers] = useState([] as IMember[]);
  const [actionsToBegin, setActionsToBegin] = useState([] as Action[]);
  const [runningActions, setRunningActions] = useState([] as Action[]);
  const [actionsToEnd, setActionsToEnd] = useState([] as Action[]);
  const [date, setDate] = useState(new Date(1930, 10, 25, 16, 5));
  const [delay, setDelay] = useState(1000);


  // functions
  const selectMembers = (members: IMember[]): void => {
    setSelectedMembers(members);
  };
  const toNextTickActions = (action: Action): void => {
    if (!runningActions.find((a) => (a.id === action.id))) {
      setActionsToBegin(() => [...actionsToBegin, action]);
    }
  };
  /*   const treatRunningActions = (): void => {
    console.log('running', runningActions);
    setActionsToEnd(
      () => runningActions.filter((action) => (action.time <= 0)),
    );
    setRunningActions(
      () => runningActions.filter((action) => (action.time > 0)),
    );
  }; */
  const running = usePrevious(runningActions);
  useEffect(() => {
    if (actionsToBegin.length) {
      setRunningActions([...runningActions, ...actionsToBegin]);
      setActionsToBegin([]);
    }
    if (running === runningActions && runningActions.length) {
      setRunningActions(runningActions.map((action) =>
        ({ ...action, time: action.time - 1 })));
    }
  }, [actionsToBegin, date, running, runningActions]);

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
            { camps.map((camp) => <Camp key={camp.id} infos={camp} changeSelectedMembers={selectMembers} />) }
          </div>
        </div>
        <Actions beginAction={toNextTickActions} members={selectedMembers} running={runningActions} />
      </div>
    </div>
  );
};

export default App;
