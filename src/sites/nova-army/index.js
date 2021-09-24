import './index.css';
import {DocumentMeta} from "react-document-meta";
//import { Twemoji } from 'react-emoji-render';

const meta = {
    title: 'Samvikshana - New Perspective of Exploration',
    meta: {
      property: {
        'og:title': 'Nova Simp Army',
        'og:url': 'https://m2rsho.cf/nova-army',
        'og:image': "https://m2rsho.cf/assets/UncleSam.jpg",
        'og:description': 'I Want You For Nova Simp Army!',

        'twitter:card': 'summary_large_image',
        'twitter:title': 'Nova Simp Army',
        'twitter:description': 'I Want You For Nova Simp Army!',
        'twitter:image': "https://m2rsho.cf/assets/UncleSam.jpg"
      }
    }
  };

const NovaArmy = () => {
  document.title = "Nova Army - M2rsho.cf"
  return (
    <>
    <DocumentMeta {...meta} />

    <div className="App">
      <header className="App-header">
          <img src="assets/UncleSam.jpg" alt="Uncle Sam" style={{width: "40vw"}}/>
          <br/> <br/>
          <p>Join Nova Simp Army now!</p>
      </header>
    </div>
    </>
  );
}

export default NovaArmy;
