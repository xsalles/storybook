import PropTypes from "prop-types";
import { Container } from "./styles";

function getTextColor(backgroundColor) {
  if (!backgroundColor || typeof backgroundColor !== "string") {
    return "black"; // Default to black if no valid background color is provided
  }

  const rgb = parseInt(backgroundColor.replace("#", ""), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  // Calculate perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Determine text color based on brightness
  return brightness > 125 ? "black" : "white";
}

export default function Header({
  main,
  backgroundColor,
  sectionOne,
  sectionTwo,
  sectionThree,
  gap,
  border,
  borderWidth,
  borderColor
}) {
  const textColor = getTextColor(backgroundColor);

  return (
    <Container
      style={{
        backgroundColor,
        color: textColor,
        gap,
        border: border ? `${borderWidth}px solid ${borderColor}` : "none",
      }}
    >
      <strong>{main}</strong>
      <p>{sectionOne}</p>
      <p>{sectionTwo}</p>
      <p>{sectionThree}</p>
    </Container>
  );
}

Header.propTypes = {
  main: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  sectionOne: PropTypes.string.isRequired,
  sectionTwo: PropTypes.string.isRequired,
  sectionThree: PropTypes.string.isRequired,
  gap: PropTypes.number,
  border: PropTypes.bool,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string.isRequired
};
