const VideoBackground = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-[100dvh] -z-10 wrapper-background"></div>
      <video
        className="absolute top-0 left-0 w-screen h-[100dvh] -z-20 object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-screen h-[100dvh] gradient -z-10"></div>
    </>
  );
};

export default VideoBackground;
