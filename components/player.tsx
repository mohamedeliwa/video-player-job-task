import Controllers from "./controllers";
import { Video } from "../context/VideosContext";
import { useEffect } from "react";

import { main } from "../utils/player";

const Player = (props: { video: Video; id: number }) => {
  useEffect(() => {
    const videoContainer = document.getElementById(`videoContainer${props.id}`);
    const video = document.getElementById(
      `video${props.id}`
    ) as HTMLVideoElement;
    const videoControls = document.getElementById(`video-controls${props.id}`);
    const playpause = document.getElementById(`playpause${props.id}`);
    const stop = document.getElementById(`stop${props.id}`);
    const mute = document.getElementById(`mute${props.id}`);
    const volinc = document.getElementById(`volinc${props.id}`);
    const voldec = document.getElementById(`voldec${props.id}`);
    const progress = document.getElementById(
      `progress${props.id}`
    ) as HTMLProgressElement;
    const progressBar = document.getElementById(`progress-bar${props.id}`);
    const fullscreen = document.getElementById(`fs${props.id}`);
    main(
      videoContainer,
      video,
      videoControls,
      playpause,
      stop,
      mute,
      volinc,
      voldec,
      progress,
      progressBar,
      fullscreen
    );
  }, []);

  return (
    <figure id={`videoContainer${props.id}`}>
      <figcaption style={{ color: props.video.titleColor }}>
        {props.video.title.toUpperCase()}
      </figcaption>
      <video
        width="100%"
        height="auto"
        id={`video${props.id}`}
        controls
        preload="metadata"
        // poster="/poster.jpg"
      >
        <source src={props.video.path} type="video/mp4" />
        {/* Offer download */}
        <a href="/tears-of-steel-battle-clip-medium.mp4">Download MP4</a>
      </video>

      <Controllers id={props.id} />
    </figure>
  );
};

export default Player;
