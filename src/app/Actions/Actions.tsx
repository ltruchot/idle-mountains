// npm
import React from 'react';
import './Actions.scss';
import { head, map } from 'fp-ts/lib/Array';
import { getOrElse } from 'fp-ts/lib/Option';
import { flow } from 'fp-ts/lib/function';
import { Member } from '../../models/members.model';
import {
  Action, TActionEntitities,
} from '../../models/actions.model';
import { prop } from '../../helpers/Option.helpers';
import { formatTaskTime } from '../../helpers/Date.helpers';
import { toEntities } from '../../helpers/Array.helpers';


type IProps = {
    member: Member;
    running: Action[];
    beginAction: (a: Action) => void;
};

const Actions: React.FC<IProps> = ({
  member, running,
  beginAction,
}: IProps) => {
  const findActions = (selectedMember: Member): Action[] =>
    selectedMember.actions || [];


  const handleActionClick = (action: Action): any =>
    (event: React.MouseEvent): void => {
      const btn = event.target as HTMLButtonElement;
      btn.disabled = true;
      beginAction(action);
    };
  const runningEntities: TActionEntitities = toEntities(running);
  return (
    <div className="actions">
      <div>
        <h3>Inventory</h3>
      </div>
      <div>
        <h3>Actions</h3>
        <ul>
          {
            findActions(member).map((action: Action) =>

              <li key="{action.id}">
                <button type="button" onClick={handleActionClick(action)}>
                  {action.name} {
                  formatTaskTime(runningEntities[action.id]
                    ? runningEntities[action.id].time
                    : action.time)
                  }
                </button>
              </li>)
          }
        </ul>
      </div>
      <div className="lead" />
    </div>
  );
};

export default Actions;
