/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import './Button.css';

export function Button(props: { name: string; callback?:any }) {
  return (
    <>
      <button className="btn-submit" role="button" onClick={props.callback}>
        {props.name}
      </button>
    </>
  );
}
