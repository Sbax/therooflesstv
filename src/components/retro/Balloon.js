const { default: styled } = require('styled-components');
const { fontFamily } = require('../../theme/theme');

const Balloon = styled.div`
  font-family: ${fontFamily.serif};
  font-size: 2rem;
  padding: 0.5rem 0.75rem;
  margin: 0.5rem;
  position: relative;

  background: white;

  text-align: center;

  &:after {
    position: absolute;
    z-index: -1;
    content: '';

    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;

    border: none;
    border-radius: 0;
    box-shadow: 0 -0.25rem white, 0 -0.5rem, 0.25rem 0 white, 0.25rem -0.25rem,
      0.5rem 0, 0 0.25rem white, 0 0.5rem, -0.25rem 0 white, -0.25rem 0.25rem,
      -0.5rem 0, -0.25rem -0.25rem, 0.25rem 0.25rem;
  }
`;

export default Balloon;
