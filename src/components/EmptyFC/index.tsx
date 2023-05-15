import React, { useState } from 'react';

import './style.css';

export interface Props {
  children?: React.ReactNode;
  [name: string]: any;
}

const EmptyFC: React.FC<Props> = ({ name }: Props) => {
  return (
    <div className='root'>
      <h1>Empty Component</h1>
    </div>
  );
};

export default EmptyFC;
