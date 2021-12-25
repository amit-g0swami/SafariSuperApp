import React from "react";
import "./RecommendedMusic.css";
import MusicCard from "./MusicCard";

function RecommendedMusic() {
  return (
    <div className="recommendedVideos">
      <h2>Shows To Try </h2>
      <h4>Podcasts we think you’ll get hooked on.</h4>
      <div className="recommendedVideos__videos">
        <MusicCard
          title="Crazy Of Life"
          channel="Kaniya West"
          image="https://www.designformusic.com/wp-content/uploads/2015/10/insurgency-digital-album-cover-design.jpg"
        />
        <MusicCard
          title="Seconds For The Morning"
          channel="Taylor Swift  "
          image="https://tse1.mm.bing.net/th?id=OIP.MXJnMV1fSmsdylz3tTZwlAHaHa&pid=Api&P=0&w=300&h=300"
        />
        <MusicCard
          title="Song Of A Woman"
          channel="Ariana Grande "
          image="https://tse3.mm.bing.net/th?id=OIP.9oB3TAhb9iV-3XLRrYdJ2gHaGr&pid=Api&P=0&w=173&h=157"
        />
        <MusicCard
          title="Hat Of Secrets"
          channel="Billie Eilish"
          image="https://dopemusicpromotions.com/wp-content/uploads/2019/06/Stargroves-album-cover.png"
        />
      </div>
      <h2>Made for you </h2>
      <h4>Get better recommendations on podcasts.</h4>
      <div className="recommendedVideos__videos">
        <MusicCard
          title="There Goes His Music"
          channel="Shawn Mendes"
          image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/0994d841602157.57ac63336b606.jpg"
          />
        <MusicCard
          title="Forgot My Luck"
          channel="Selena Gomez"
          image="https://media.pitchfork.com/photos/5929bbc8abf31b7dc7155b86/1:1/w_600/f211d7e5.jpg"
          />
        <MusicCard
          title="Remember Your Father"
          channel="Ed Sheeran"
          image="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          />
        <MusicCard
          title="Search For My Father"
          channel="Dua Lipa"
          image="https://wallpapercave.com/wp/uYeAzcK.jpg"
          />
          </div>
          <h2>Editor's picks</h2>
          <div className="recommendedVideos__videos">
        <MusicCard
          title="Lonely And Dreams"
          channel="Lady Gaga"
          image="https://tse1.mm.bing.net/th?id=OIP.2ZXteqSC_zFy-yNh-rNsKAHaHa&pid=Api&P=0&w=300&h=300"
        /><MusicCard
        title="I Hope I Won't Come Back"
        channel="Camila Cabello"
        image="https://tse1.mm.bing.net/th?id=OIP.lqTwlyo57TNDGMDauZWtGAHaIG&pid=Api&P=0&w=300&h=300"
      />
      <MusicCard
          title="She's Bad For You"
          channel="Beyonce"
          image="https://tse2.mm.bing.net/th?id=OIP.NmI7I6y0V3UAhhYZO5WdFgHaHa&pid=Api&P=0&w=300&h=300"
        />
        <MusicCard
          title="She Heard You're Bad For Me"
          channel="The Weeknd"
          image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/album-cover-poster-template-a1cdc24f59156f97168fb2840fe2ad61_screen.jpg?ts=1478717634"
        />
        </div>
        <h2>Made like K-POP</h2>
      <div className="recommendedVideos__videos">
        <MusicCard
          title="He Heard I Hate It"
          channel="Bruno Mars"
          image="https://s-media-cache-ak0.pinimg.com/736x/26/11/79/261179df4ee3e789c7570eea3487700b--typography-inspiration-graphic-design-inspiration.jpg"
        />
        <MusicCard
          title="The Only Hope For Me Is You"
          channel="Halsey"
          image="https://tse1.mm.bing.net/th?id=OIP.ooxQ-jxyAMJ_vBULq2zbeQHaHa&pid=Api&P=0&w=300&h=300"
        />
        <MusicCard
          title="I'm Riding Alone"
          channel="Katy Perry"
          image="https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/master/pass/Artist-Designed%20Album%20Covers%202.jpg"
        /><MusicCard
        title="She Loves I Hate It"
        channel="Justin Beiber"
        image="https://tse4.mm.bing.net/th?id=OIP.UYvn3t9uJ-OmU2P4BTPzWAHaHe&pid=Api&P=0&w=300&h=300"
      />
      </div> <h2>Made like Maroon 5</h2>
      <div className="recommendedVideos__videos">
      <MusicCard
          title="He Hates He Will Leave"
          channel="Post Malone"
          image="https://img.discogs.com/NvXmiT1-ru0uFKb_1IgU20dytxk=/fit-in/600x594/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10275941-1494525627-7264.jpeg.jpg"
        />
        <MusicCard
          title="She Hopes I Am Trouble"
          channel="Khalid"
          image="https://tse3.mm.bing.net/th?id=OIP.Iluzb6y28E1QlJClihYwowHaHa&pid=Api&P=0&w=300&h=300"
        />
        <MusicCard
          title="Baby, Don't You Remember?"
          channel="Demi Lovato"
          image="https://www.elvisnews.com/images/various/vinyl-love-songs.png"
        />
        <MusicCard
          title="Me In You"
          channel="Sia"
          image="https://tse4.mm.bing.net/th?id=OIP.cYOGUozoBT3gO1tCx8U9QAHaHd&pid=Api&P=0&w=300&h=300"
        />
     </div>
    </div>
  );
}

export default RecommendedMusic;