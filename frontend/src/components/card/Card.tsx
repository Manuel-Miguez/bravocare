import React, { useEffect, useState } from 'react';
import './Card.css';
import { CardProps } from './Card.interfaces';
import { CardInfo } from '../card-info/CardInfo';
export function Card(props: { params: CardProps }) {
  const { isCardSelected } = props.params;
  const [, setSelectedState] = useState(isCardSelected);
  useEffect(() => {
    setSelectedState(isCardSelected);
  }, [isCardSelected]);
  return (
    <>
      <span className={'card_link ' + (isCardSelected ? 'card_selected' : '')}>
        <div className="card_content card_content--lhs ">
          <CardInfo params={props.params} />
        </div>
        <div className="card_content card_content--rhs " aria-hidden="true">
          <CardInfo params={props.params} />
        </div>
      </span>
    </>
  );
}
