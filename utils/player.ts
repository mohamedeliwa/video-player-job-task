

export const alterVolume = function (dir: string, video: HTMLVideoElement) {
  const currentVolume = Math.floor(video.volume * 10) / 10;
  if (dir === "+") {
    if (currentVolume < 1) video.volume += 0.1;
  } else if (dir === "-") {
    if (currentVolume > 0) video.volume -= 0.1;
  }
};

// function to check if browser in fullscreen mode
export const isFullScreen = () => {
  return !!(document.fullscreen || document.fullscreenElement);
};

export const setFullscreenData = function (
  state: boolean,
  videoContainer: HTMLElement
) {
  videoContainer.setAttribute("data-fullscreen", !!state);
};

export const handleFullscreen = function (videoContainer: HTMLElement) {
  if (isFullScreen()) {
    if (document.exitFullscreen) document.exitFullscreen();
    setFullscreenData(false, videoContainer);
  } else {
    if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
    setFullscreenData(true, videoContainer);
  }
};

export const main = function (
  videoContainer: HTMLElement,
  video: HTMLVideoElement,
  videoControls: HTMLElement,
  playpause: HTMLElement,
  stop: HTMLElement,
  mute: HTMLElement,
  volinc: HTMLElement,
  voldec: HTMLElement,
  progress: HTMLProgressElement,
  progressBar: HTMLElement,
  fullscreen: HTMLElement
) {
  const supportsVideo = !!document.createElement("video").canPlayType;
  if (supportsVideo) {
    // Hide the default controls
    video.controls = false;
    // Display the custom controls
    videoControls.style.display = "block";

    playpause.addEventListener("click", function (e) {
      if (video.paused || video.ended) video.play();
      else video.pause();
    });

    stop.addEventListener("click", function (e) {
      video.pause();
      video.currentTime = 0;
      progress.value = 0;
    });

    mute.addEventListener("click", function (e) {
      video.muted = !video.muted;
    });

    volinc.addEventListener("click", function (e) {
      alterVolume("+", video);
    });
    voldec.addEventListener("click", function (e) {
      alterVolume("-", video);
    });

    // waiting the metadata of the video to be loaded
    video.addEventListener("loadedmetadata", function () {
      progress.setAttribute("max", video.duration.toString());
    });

    // updating the progress bar while the video is playing
    video.addEventListener("timeupdate", function () {
      if (!progress.getAttribute("max"))
        progress.setAttribute("max", video.duration.toString());
      progress.value = video.currentTime;
      progressBar.style.width =
        Math.floor((video.currentTime / video.duration) * 100) + "%";
    });

    // skipping part of the video by clicking the proogress bar
    progress.addEventListener("click", function (e) {
      const pos = (e.pageX - this.offsetLeft) / this.offsetWidth;
      video.currentTime = pos * video.duration;
    });

    // checking if the browser is supporting the fullScreen mode
    // and it's enabled
    const fullScreenEnabled = !!document.fullscreenEnabled;
    if (!fullScreenEnabled) {
      fullscreen.style.display = "none";
    }
    fullscreen.addEventListener("click", function () {
      handleFullscreen(videoContainer);
    });

    document.addEventListener("fullscreenchange", function (e) {
      setFullscreenData(
        !!(document.fullscreen || document.fullscreenElement),
        videoContainer
      );
    });
  }
};
