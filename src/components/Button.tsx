import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface IButton {
    children: JSX.Element;
    click: () => void;
}

const Button = ({children, click}: IButton) => {
  const theme = useContext(ThemeContext)

  return (
   <button
   className="button"
   style={{background: 
    theme.backgroundColor,
    color: theme.foregroundColor
    
   }}
   onClick={click}
   >
    {children}
   </button>
  )
}

export default Button
