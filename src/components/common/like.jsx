import React from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";

const Like = ({ onLikeToggle, liked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return <i onClick={onLikeToggle} className={classes} aria-hidden="true" />;
};

export default Like;
