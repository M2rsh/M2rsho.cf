import './index.css';
import { Twemoji } from 'react-emoji-render';

function Home() {
  document.title = "Home - M2rsho.cf"
  return (
    <div className="Home">
        <Twemoji svg text="☠️" options={{ className: "Home-logo"}}/>

        <iframe src="https://discord.com/widget?id=885976189049651200&theme=dark"
                width="350"
                height="500" 
                allowtransparency="true" 
                frameborder="0" 
                title="discord"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
    </div>
  );
}

export default Home;
