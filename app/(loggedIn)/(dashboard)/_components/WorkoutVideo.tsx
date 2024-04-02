import React from "react";
import Video from "next-video";
import speedSwitches from "@/videos/speedSwitches.mp4";

const WorkoutVideo = () => {
  return (
    <div>
      <Video src={speedSwitches} loop muted autoPlay />
    </div>
  );
};

export default WorkoutVideo;
