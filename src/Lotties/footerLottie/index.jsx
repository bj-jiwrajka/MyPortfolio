import React, { useRef } from "react";
import Styles from "./style.module.css"
export default function Rainman() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      ref={ref}
      id={Styles.footerLottie}
      src="https://assets6.lottiefiles.com/packages/lf20_afbrqn7h.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>
  );
}
