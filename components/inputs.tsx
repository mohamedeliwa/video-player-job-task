import { useState, useContext } from "react";
import { Video } from "../context/VideosContext";
import { VideosContext } from "../context/VideosContext";
import styles from "../styles/inputs.module.css";


const initState: Video = {
  title: "",
  titleColor: "",
  path: "",
};

const Inputs = () => {
  const { addVideo } = useContext(VideosContext);
  const [video, setVideo] = useState(initState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    switch (e.target.type) {
      case "text":
        setVideo({
          ...video,
          title: e.target.value,
        });
        break;
      case "color":
        setVideo({
          ...video,
          titleColor: e.target.value,
        });
        break;
      case "file":
        setVideo({
          ...video,
          path: URL.createObjectURL(e.target.files[0]),
        });
        break;
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addVideo(video);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Video Title:</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter video title"
          value={video.title}
          onChange={handleChange}
          required
        />
        <label className={styles.label}>Title Color:</label>
        <input
          className={styles.input}
          type="color"
          value={video.titleColor}
          onChange={handleChange}
          required
        />
        <label className={styles.label}>Select Video:</label>
        <input
          className={styles.input}
          type="file"
          accept="video/mp4"
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="submit"
          value="Upload"
        />
      </form>
    </div>
  );
};

export default Inputs;
