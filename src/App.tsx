import React, { useState } from 'react';
import './App.scss';
import Camp from './app/Camp/Camp';
import { campsData } from './data/camps.data';
import Actions from './app/Actions/Actions';
import { IMember } from './models/members.model';


const App: React.FC = (_) => {
  const [camps, setCamps] = useState(campsData);
  const [selectedMembers, setSelectedMembers] = useState([] as IMember[]);
  const selectMembers = (members: IMember[]): void => {
    setSelectedMembers(members);
  };
  return (
    <div className="app">
      <div className="places">
        <div className="camps">
          <h3>Camps</h3>
          { camps.map((camp) => <Camp key={camp.id} infos={camp} changeSelectedMembers={selectMembers} />) }
        </div>
      </div>
      <Actions members={selectedMembers} />
    </div>
  );
};

export default App;
