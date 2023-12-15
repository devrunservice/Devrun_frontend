import React from "react";
import * as St from "./style";

interface Top {
  text: string;
  onExit?: () => void;
  onButton: () => void;
}


const VideoTop = ({ text, onExit, onButton }: Top) => (
  <St.Top>
    <div>
      {onExit ? (
        <St.TopButton onClick={() => onExit()}>
          <St.Arr />
          {text}
        </St.TopButton>
      ) : (
        <St.Title>{text}</St.Title>
      )}
    </div>
    <St.Deletes onClick={() => onButton()} />
  </St.Top>
);

export default VideoTop;

