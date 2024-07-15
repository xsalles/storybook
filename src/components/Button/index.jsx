import { Container } from "./styles";
import  PropTypes  from "prop-types";

function getTextColor(backgroundColor) {
    if (!backgroundColor || typeof backgroundColor !== 'string') {
        return 'black';
    }

    const rgb = parseInt(backgroundColor.replace('#', ''), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;


    return luminance < 128 ? 'white' : 'black';
}


export default function Button({ style, label, backgroundColor }) {

    const textColor = getTextColor(backgroundColor)

  return(
    <Container style={{...style, backgroundColor, color: textColor}}>
       {label}
    </Container>
  ) 
}

Button.propTypes = {
    style: PropTypes.object,
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
};
