import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Travtube</h2>
            <div className="recommendedVideos__videos">
           
             <VideoCard   
            title="Let's explore EUROPE"
            views="22M"
            timestamp="1 hour ago"
            channelImage="https://tse4.mm.bing.net/th?id=OIP.0euTNePm-7NfcfG9Z09HwAHaDd&pid=Api&P=0&w=370&h=174"
            channel="Nomad Ankit"
            image="https://tse3.mm.bing.net/th?id=OIP.iEEVWKN2xSqulSkklhOw6AHaEL&pid=Api&P=0&w=316&h=179"
            />
             <VideoCard   
            title="Going to the most dangerous city"
            views="2M"
            timestamp="19 hour ago"
            channelImage="https://tse2.mm.bing.net/th?id=OIP.46Q_OE74O-Sa_yIxCkCSdAHaE6&pid=Api&P=0&w=253&h=169"
            channel="Europian Riders"
            image="https://teneightymagazine.com/wp-content/uploads/2019/07/Wanderlust-Travel-Vloggers.jpg"
            />
            <VideoCard   
            title="Love the life you live."
            views="9M"
            timestamp="2 Days ago"
            channelImage="https://auspost.com.au/content/dam/corp/travel-essentials/photo-boats-on-water-in-thailand.jpg"
            channel="Nomad Amit"
            image="https://i.ytimg.com/vi/wc3Puj9TSjk/maxresdefault.jpg"
            />
            <VideoCard   
            title="Another day another adventure."
            views="98M"
            timestamp="3 hour ago"
            channelImage="https://www.canadiantravelclinics.ca/images/Destinations/Europe/latvia.jpg"
            channel="Extrazy"
            image="https://i.ytimg.com/vi/rh4IEqw-wQY/maxresdefault.jpg"
            />
            </div> 
            <h2>Travel Vlogs</h2>
      <h4>Get better recommendations on Travel.</h4>
      <div className="recommendedVideos__videos">
            <VideoCard   
            title="We’re on the road again!"
            views="32M"
            timestamp="9 hour ago"
            channelImage="https://tse2.mm.bing.net/th?id=OIP.LsV8Ndri5mcESmoSi4G4hAHaE8&pid=Api&P=0&w=234&h=157"
            channel="XqC"
            image="https://tse2.mm.bing.net/th?id=OIP.Ic8GGcS6andclvXLxsa5ZAHaEK&pid=Api&P=0&w=322&h=182"
            />
            <VideoCard   
            title="Taking the scenic route."
            views="6M"
            timestamp="22 Days ago"
            channelImage="https://tse4.mm.bing.net/th?id=OIP.jxtvu3fBmDOC7RGAINOzgQHaEo&pid=Api&P=0&w=244&h=154"
            channel="Playsic"
            image="https://i.ytimg.com/vi/Ki87wR2rXts/maxresdefault.jpg"
            />
            <VideoCard   
            title="Why travel? For the sake of it."
            views="700k"
            timestamp="9 hour ago"
            channelImage="https://www.tripsavvy.com/thmb/jr9xzky-Z6NP5z0_7yZobLl4bsM=/2121x1414/filters:fill(auto,1)/GettyImages-578261603-58f12c125f9b582c4ddeed2c.jpg"
            channel="Eliteway"
            image="https://i.ytimg.com/vi/gCYYSILm18w/maxresdefault.jpg"
            />
            <VideoCard   
            title="Sun. Sea. Sand. Magic!"
            views="2M"
            timestamp="19 hour ago"
            channelImage="https://tse1.mm.bing.net/th?id=OIP.n6tVDJiVeM_uHjs-Ppkh6wHaEW&pid=Api&P=0&w=264&h=155"
            channel="Gamecast"
            image="https://tse1.mm.bing.net/th?id=OIP.oYoUeZPYE25MP-Ix6lrFSwHaEK&pid=Api&P=0&w=296&h=167"
            />
            <VideoCard   
            title="I can smell an adventure brewing."
            views="12M"
            timestamp="15 Days ago"
            channelImage="https://www.nyip.edu/images/cms/courses/home/banner-dc.jpg"
            channel="LeadInspiration"
            image="https://tse2.mm.bing.net/th?id=OIP.XG1646_h0k-lTME8sUDi2gHaFO&pid=Api&P=0&w=272&h=193"
            />
            <VideoCard   
            title="Explore with an open mind and wide-open eyes."
            views="17M"
            timestamp="22 hour ago"
            channelImage="https://media.travel-wise.com/wp-content/uploads/2017/02/Adventure-travel-comp.jpg"
            channel="Vlogup"
            image="https://vloggergear.com/wp-content/uploads/2017/03/travel.jpg"
            />
            <VideoCard   
            title="Exploration and adventure are my two favourite words."
            views="100k"
            timestamp="8 hour ago"
            channelImage="https://tse4.mm.bing.net/th?id=OIP.3CqzL8AwK-GccbGzBWM_gQHaFj&pid=Api&P=0&w=258&h=195"
            channel="Eliteway"
            image="https://i.ytimg.com/vi/uFLi7zGKH1M/maxresdefault.jpg"
            />
            <VideoCard   
            title="Let's Build a YouTube Clone with REACT JS for Beginners"
            views="22M"
            timestamp="4 hour ago"
            channelImage="http://static-1.ivoox.com/canales/2/9/9/3/4511564063992_XXL.jpg"
            channel="Clever Programmer"
            image="https://i.ytimg.com/vi/J-x5eHcEdgg/mqdefault.jpg"
            />
            </div>
            
        </div>
    )
}

export default RecommendedVideos