import  PropTypes  from "prop-types";
import { Container } from "./styles";

export default function Image ({src}){
    return(
        <Container src={src}/>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired
}