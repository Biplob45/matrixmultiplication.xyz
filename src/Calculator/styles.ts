import {style, keyframes} from 'typestyle';
import MatrixStyles from '../Matrix/styles';
import {pallete} from '../styles';

namespace Styles {
  export const matrixBracketWidth = MatrixStyles.matrixBracketWidth;
  export const step1Duration1 = 600; // ms
  export const step1Duration2 = 900; // ms
  export const nextCombDuration = 500; // ms
  export const nextCombCellTransitionDelay = nextCombDuration * 0.001 * 0.5;
  export const colorPallete = pallete;

  export const hideAnimation = keyframes({
    from: {opacity: 1},
    to: {opacity: 0},
  });

  export const calculator = style({
    marginTop: '200px',
    marginBottom: '100px',
  });

  export const matrices = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  export const matrixAWrapper = style({
    position: 'relative',
  });

  export const resultMatrix = style({
    position: 'relative',
    transition: 'opacity 0.5s',
  });

  export const animatedCell = style({
    transition: `all 0.3s ease ${nextCombCellTransitionDelay}s`,
  });

  export const operatorGrid = style({
    position: 'absolute',
    top: '3px',
    left: '3px',
  });

  export const operatorCell = style({
    transform: 'scale(0.6)',
    transition: `opacity 0.3s ease ${nextCombCellTransitionDelay}s`,
  });

  export const plusSign = style({
    '&::after': {
      content: '"+"',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: '40px',
      fontSize: '24px',
      width: '2em',
      height: '2em',
      fontFamily: `'Source Sans Pro', sans-serif`,
      lineHeight: '49px',
      textAlign: 'center',
      border: 'none',
      textIndent: '0',
      padding: '0',
      color: pallete.black,
    },
  });

  export const controlPanel = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '86px',
    '& > * + *': {
      marginLeft: '8px',
    },
  });

  const commonButton: NestedCSSProperties = {
    color: pallete.white,
    border: 'none',
    fontSize: '24px',
    padding: '8px 16px',
    '& > svg': {
      marginBottom: '-2px',
      marginRight: '8px',
    },
  };

  const commonButtonEnabled: NestedCSSProperties = {
    boxShadow: `0 1px 1px 0 ${pallete.gray}`,
    cursor: 'pointer',
  };

  const commonButtonDisabled = style(commonButton, {
    backgroundColor: pallete.gray,
  });

  export const multiplyButton = style(commonButton, commonButtonEnabled, {
    backgroundColor: pallete.blue,
    '&:hover': {
      backgroundColor: pallete.blueWeak,
    },
  });
  export const multiplyButtonDisabled = commonButtonDisabled;

  export const nextButton = multiplyButton;
  export const nextButtonDisabled = commonButtonDisabled;

  export const endButton = style(commonButton, commonButtonEnabled, {
    backgroundColor: pallete.orange,
    '&:hover': {
      backgroundColor: pallete.orangeWeak,
    },
  });
  export const endButtonDisabled = commonButtonDisabled;

  export const multiplyOrEqualsSign = style({
    margin: '1em',
    fontSize: '24px',
    color: pallete.grayDark,
  });

  export const disappear = style({
    animationName: hideAnimation,
    animationDuration: '0.5s',
  });

  export const rowsResizer = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 10px',
  });

  export const colsResizerContainer = style({
    position: 'relative',
  });

  export const colsResizer = style({
    position: 'absolute',
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px 0',
  });

  export const resizerButton = style({
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxShadow: `0 1px 1px 0 ${pallete.gray}`,
    color: pallete.grayDark,
    border: 'none',
    fontSize: '20px',
    textAlign: 'center',
    width: '30px',
    height: '30px',
    lineHeight: '30px',
    margin: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: pallete.grayLight,
    },
  });
};

export default Styles;