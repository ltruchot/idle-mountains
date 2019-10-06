// npm
import React from 'react';
import './Actions.scss';
import { head } from 'fp-ts/lib/Array';
import { getOrElse } from 'fp-ts/lib/Option';
import { flow } from 'fp-ts/lib/function';
import { IMember } from '../../models/members.model';
import {
  TActions, emptyActions, Action, TActionEntitities,
} from '../../models/actions.model';
import { prop } from '../../helpers/Option.helpers';
import { formatTaskTime } from '../../helpers/Date.helpers';
import { toEntities } from '../../helpers/Array.helpers';


type IProps = {
    members: IMember[];
    running: Action[];
    beginAction: (a: Action) => void;
};

const Actions: React.FC<IProps> = ({
  members, running,
  beginAction,
}: IProps) => {
  const findActions = (selectedMembers: IMember[]): TActions => {
    const extractActions = flow(
      head,
      prop('actions'),
      getOrElse(() => emptyActions),
    );
    return extractActions(selectedMembers);
  };


  const handleActionClick = (action: Action): any =>
    (event: React.MouseEvent): void => {
      beginAction(action);
    };
  const runningEntities: TActionEntitities = toEntities(running);
  return (
    <div className="actions">
      <div className="build" />
      <div className="explore" />
      <div className="experiment">
        <ul>
          {
            findActions(members).experiment.map((action) =>

              <li key="{action.id}" onClick={handleActionClick(action)}>
                {action.name} {
                  runningEntities[action.id]
                    ? formatTaskTime(runningEntities[action.id].time)
                    : formatTaskTime(action.time)
                }
              </li>)
          }
        </ul>
      </div>
      <div className="lead" />
    </div>
  );
};

export default Actions;
