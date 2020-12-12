const Controllers = (props: {id: number}) => {
  return (
    <ul id={`video-controls${props.id}`} className="controls">
      <li>
        <button id={`playpause${props.id}`} type="button">
          Play/Pause
        </button>
      </li>
      <li>
        <button id={`stop${props.id}`} type="button">
          Stop
        </button>
      </li>
      <li className="progress">
        <progress id={`progress${props.id}`} value="0" data-min="0">
          <span id={`progress-bar${props.id}`}></span>
        </progress>
      </li>
      <li>
        <button id={`mute${props.id}`} type="button">
          Mute/Unmute
        </button>
      </li>
      <li>
        <button id={`volinc${props.id}`} type="button">
          Vol+
        </button>
      </li>
      <li>
        <button id={`voldec${props.id}`} type="button">
          Vol-
        </button>
      </li>
      <li>
        <button id={`fs${props.id}`} type="button">
          Fullscreen
        </button>
      </li>
    </ul>
  );
};

export default Controllers;
