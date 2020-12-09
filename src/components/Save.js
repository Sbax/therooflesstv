import React, { useContext, useRef } from 'react';
import Context from '../context/store';
import Button from './Button';

const Save = ({ mon, accessToken }) => {
  const { state, dispatch } = useContext(Context);

  const { trainers } = state;

  const input = useRef();
  const save = () => {
    const trainerName = input.current.value;

    const trainer = trainers.find(({ name }) => name === trainerName);

    fetch('/.netlify/functions/simple-be/save', {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify({
        trainerName,
        hasTrainer: !!trainer,
        next: trainer ? trainer.next : `B${trainers.lenght + 2}`,
        mon: mon.name,
        accessToken,
      }),
    });
  };

  return (
    <>
      <input type="text" ref={input} />

      <Button onClick={save}>Salva!</Button>
    </>
  );
};

export default Save;
