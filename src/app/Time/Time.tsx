// npm
import React from 'react';
import './Time.scss';
import { formatDay } from '../../helpers/Date.helpers';

type IProps = {
    now: Date;
};

const Actions: React.FC<IProps> = ({ now }: IProps) => (
  <span>
    { formatDay(now)}
  </span>
);

export default Actions;
