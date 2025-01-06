import { Tooltip } from "@mui/material";
import Navbar from "../../components/navbar";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import TabletAndroidOutlinedIcon from '@mui/icons-material/TabletAndroidOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import VrpanoOutlinedIcon from '@mui/icons-material/VrpanoOutlined';

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
      <div className="h-[350px]">
        <div className="absolute -mt-12 w-full text-center z-30">
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
      <div className="w-[80%] mx-auto">
        <div className="w-full flex"> 
          <div className="text-start w-[80%]">
            <h1 className="text-4xl font-bold text-white mb-4">Explore our wide variety of categories</h1>
            <span className="text-[#999999] text-lg">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</span>
          </div>
          <div className="w-[20%] flex justify-end">
            <div className="flex border-2 rounded-xl items-center border-[#1f1f1f] bg-[#0f0f0f] p-4">
              <div className="p-2 bg-[#1a1a1a] rounded-lg cursor-pointer">
                <Tooltip title="Previous">
                  <div><ArrowBackIcon sx={30} /></div>
                </Tooltip>
              </div>
              <div className="mx-2">- - - -</div>
              <div className="p-2 bg-[#1a1a1a] rounded-lg cursor-pointer">
                <Tooltip title="Next">
                  <div><ArrowForwardIcon sx={30} /></div>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-20">
          {["Action", "Adventure", "Comedy", "Drama", "Horror"].map((category) => (
            <div key={category} className="p-5 rounded-xl border border-[#262626] bg-[#1a1a1a]">
              <div className="relative">
                <div className="grid grid-cols-2 gap-1">
                  <img
                    className="w-[120px] h-[120px] rounded-xl"
                    src="/image/preview.jpg"
                    alt="Background"
                  />
                  <img
                    className="w-[120px] h-[120px] rounded-xl"
                    src="/image/preview.jpg"
                    alt="Background"
                  />
                  <img
                    className="w-[120px] h-[120px] rounded-xl"
                    src="/image/preview.jpg"
                    alt="Background"
                  />
                  <img
                    className="w-[120px] h-[120px] rounded-xl"
                    src="/image/preview.jpg"
                    alt="Background"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
              </div>
              <div className="flex justify-between">
                <h6 className="text-white text-md">{category}</h6>
                <Tooltip title="See more">
                  <div className="cursor-pointer">
                    <ArrowForwardIcon />
                  </div>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">We Provide you streaming experience across various devices.</h1>
            <h6 className="text-[#999999] text-lg">With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of </h6>
            <h6 className="text-[#999999] text-lg">devices, ensuring that you never miss a moment of entertainment.</h6>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-10 py-14">
              {['Smartphones', 'Tablet', 'Smart Tv', 'Laptops', 'Gaming Consoles', 'Vr Headsets'].map((item) => (
                <div key={item} className="bg-gradient-to-bl from-[#1e0e0e] via-[#0f0f0f] to-[#0f0f0f] p-10 rounded-xl border border-[#262626]">
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-2 bg-[#141414] border border-[#1f1f1f] rounded-lg">
                      {item === 'Smartphones' ? <SmartphoneOutlinedIcon className="text-[#e40000] " sx={{ fontSize: 30 }} /> : item === 'Tablet' ? <TabletAndroidOutlinedIcon className="text-[#e40000] " sx={{ fontSize: 30 }} /> : item === 'Smart Tv' ? <TvOutlinedIcon className="text-[#e40000] " sx={{ fontSize: 30 }} /> : item === 'Laptops' ? <LaptopChromebookOutlinedIcon className="text-[#e40000] " sx={{ fontSize: 30 }} /> : item === 'Gaming Consoles' ? <SportsEsportsOutlinedIcon className="text-[#e40000] " sx={{ fontSize: 30 }} /> : <VrpanoOutlinedIcon className="text-[#e40000] " sx={{ fontSize: 30 }} />}
                    </div>
                    <div>
                      <h6 className="text-white text-lg">{item}</h6>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-[#999999] text-sm">
                      {item === 'Smartphones' ? 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' : item === 'Tablet' ? 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' : item === 'Smart Tv' ? 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' : item === 'Laptops' ? 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' : item === 'Gaming Consoles' ? 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' : 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
