import Navbar from "../../../components/navbar";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export default function Home() {
  return (
    <main className="w-full relative text-white bg-black">
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>
      <div className="w-full relative bg-black">
        <img src="/image/background.png" className="w-full object-contain" alt="Background" />

        <div className="w-full h-1/2 bg-gradient-to-b from-black via-transparent to-transparent absolute top-0 left-0 z-20"></div>
        <div className="w-full h-1/2 bg-gradient-to-t from-black via-transparent to-transparent absolute bottom-0 left-0 z-20"></div>
      </div>
      <div className="h-[500px] ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-32 z-30">
          <h1 className="text-5xl text-center font-bold text-white">The Best Streaming Experience</h1>
        </div>
        <div className="text-center py-8 text-[#999999]">
          <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With</p>
          <p>StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more.</p>
          <p>You can also create your own watchlists, so you can easily find the content you want to watch.</p>
        </div>
        <div className="pt-4">
          <div className="bg-red-500 max-w-fit mx-auto px-4 py-3 rounded-md flex items-center space-x-1">
            <PlayArrowRoundedIcon sx={{ fontSize: 30 }}/>
            <label>Start Watching Now</label>
          </div>
        </div>
      </div>
    </main>
  );
}
