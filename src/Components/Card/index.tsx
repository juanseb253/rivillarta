import type { ReactNode } from "react";
import "./styles.css"
type Props = {
    children: ReactNode;
};
const Card: React.FC<Props> = ({ children }) => (
    <div className="card">{children}</div>
)
export default Card;