import React from 'react';
import './ButtonGroup.css';
import { ButtonGroupProps } from './ButtonGroup.interface';

export function ButtonGroup(props: { buttons: ButtonGroupProps[] }) {
  return (
    <div className="btn-group">
      {props.buttons.map((btn, index) => (
        <button key={btn.name + index} onClick={btn.callback}>
          {btn.name}
        </button>
      ))}
    </div>
  );
}
