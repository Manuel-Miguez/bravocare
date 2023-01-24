import React from 'react';
import './CardInfo.css';
import { CardProps } from '../card/Card.interfaces';
export function CardInfo(props: { params: Omit<CardProps, 'shiftID'> }) {
  const { facilityName, shiftDate, startTime, endTime } = props.params;
  return (
    <>
      <h2 className="card_title">{facilityName}</h2>
      <h4 className="card_subtitle c-gray">{shiftDate}</h4>
      <div className="card_footer c-gray">
        <time>{startTime}</time>
        <time>{endTime}</time>
      </div>
    </>
  );
}
