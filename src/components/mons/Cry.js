import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
`;

const Cry = ({ file }) => {
  const audio = useRef(null);
  const play = () => audio.current.play();

  return (
    <Container>
      <audio ref={audio} src={file} />
      <FontAwesomeIcon onClick={play} icon={faPlay} />
    </Container>
  );
};

export default Cry;
