import { Link } from "react-router-dom";

const LinkCustom = ({ ...props }) => (
  <Link style={{ textDecoration: "none", color: "#343e4d" }} {...props} />
);

export { LinkCustom as Link };
