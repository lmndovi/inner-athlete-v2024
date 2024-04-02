import React from "react";
import Video from "next-video";
import speedSwitches from "@/videos/speedSwitches.mp4";
import gymIncline from "@/videos/gymInclineBench.mp4";

export const SpeedWorkoutVideo = () => {
  return (
    <div>
      <Video src={speedSwitches} loop muted autoPlay />
    </div>
  );
};

export const StrengthWorkoutVideo = () => {
  return (
    <div>
      <Video src={gymIncline} loop muted autoPlay />
    </div>
  );
};
