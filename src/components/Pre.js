import React from "react";
function Pre(props) {
  return <div id={props.loader ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
