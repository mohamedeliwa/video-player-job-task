import { createContext, useState } from "react";

export interface Video {
  path: string;
  title: string;
  titleColor: string;
}
const initialState: Video[] = [
  // {
  //   path: "/tears-of-steel-battle-clip-medium.mp4",
  //   title: "Video Title",
  //   titleColor: "black",
  // },
];
const x: any = "";
export const VideosContext = createContext(x);

const VideosContextProvider = (props: any) => {
  const [videos, setVideo] = useState(initialState);

  const addVideo = (video: Video) => {
    setVideo([video, ...videos]);
  };

  return (
    <VideosContext.Provider value={{ videos, addVideo }}>
      {props.children}
    </VideosContext.Provider>
  );
};

export default VideosContextProvider;
