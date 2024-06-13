import * as React from 'react';
import { Video } from 'utils/videos';

type PlayerContextType = {
  video: Video | null;
  setVideo: React.Dispatch<React.SetStateAction<Video | null>>;
};

const PlayerContext = React.createContext<PlayerContextType>({ video: null, setVideo: () => null });

export default PlayerContext;
