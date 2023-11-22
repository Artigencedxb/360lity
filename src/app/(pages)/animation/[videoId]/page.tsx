import React from "react";
import VideoFullScreen from "../../../../common/VideoFullScreen";

const AnimationVideopage: React.FC<{ params: { videoId: string } }> = ({
  params,
}) => {
  return <VideoFullScreen videoId={params?.videoId} />;
};

export default AnimationVideopage;
