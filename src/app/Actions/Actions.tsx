// npm
import React from 'react';
import './Actions.scss';
import { head } from 'fp-ts/lib/Array';
import { getOrElse } from 'fp-ts/lib/Option';
import { flow } from 'fp-ts/lib/function';
import { IMember } from '../../models/members.model';
import { IActions, emptyActions } from '../../models/actions.model';
import { prop } from '../../helpers/Option.helpers';


type IProps = {
    members: IMember[];
};

const Actions: React.FC<IProps> = ({ members }: IProps) => {
  const findActions = (m: IMember[]): IActions => {
    const extractActions = flow(
      head,
      prop('actions'),
      getOrElse(() => emptyActions),
    );
    return extractActions(m);
  };
  return (
    <div className="actions">
      <div className="build" />
      <div className="explore" />
      <div className="experiment">
        <ul>
          { findActions(members).experiment.map((action) => <li key="{action.id}">{action.name}</li>)}
        </ul>
      </div>
      <div className="lead" />
    </div>
  );
};

export default Actions;
