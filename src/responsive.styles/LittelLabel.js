import styled from 'styled-components';
import device from './Device.js';

const LittelLabel = styled.h4`
color: ${({ color }) => color || '#FFFFFF'};
font-size: ${({ fontSize }) => fontSize || '15px'};
font-weight: ${weight => weight || '600'};
text-aling: ${({ aling }) => aling || 'left'};
padding: 5px 0;
${({ firstToUpperCase }) =>
  firstToUpperCase &&
  `
    &:first-letter {
        text-transform: uppercase;
    }
    `}
@media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '20px'}
}
@media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '23px'}
}
@media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '26px'}
}


`;

export default LittelLabel;
