import VideoPlayerWithComments from "./components/VideoPlayer";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-6xl bg-gradient-to-r from-fromTextColor to-toTextColor bg-clip-text text-transparent">
        Awesome Video Player
      </h1>
      <VideoPlayerWithComments />
    </div>
  );
}

export default App;
