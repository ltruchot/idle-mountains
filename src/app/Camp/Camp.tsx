// npm
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

// custom
import './Camp.scss';
import { CampInfos } from '../../models/camps.model';
import { Member } from '../../models/members.model';


type IProps = {
    readonly infos: CampInfos;
    readonly changeSelectedMember: (m: Member) => void;
};

const Camp: React.FC<IProps> = ({ infos, changeSelectedMember }: IProps) => {
  const [opened, setOpened] = useState(false);
  const toggleOpened = (event: React.MouseEvent): void => {
    event.preventDefault();
    setOpened(!opened);
  };
  const handleMemberClick = (member: Member): any =>
    (event: React.MouseEvent): void =>
      changeSelectedMember(member);

  return (
    <div className="camp">
      <div className="camp-title" onClick={toggleOpened}>
        <span>{infos.name}</span>
        <FontAwesomeIcon icon={opened ? faCaretDown : faCaretRight} />
      </div>

      { opened
        ? (
          <ul>
            {
              infos.team.map((member) => (
                <li key={member.id} onClick={handleMemberClick(member)}>
                  {member.name}
                </li>
              ))
            }
          </ul>
        ) : null}
    </div>
  );
};

export default Camp;
