import { useState } from 'react';

export default function IntroVideo() {
  const [playing, setPlaying] = useState(false);
  return <section className="hp-listen hp-section hp-sheet" id="gratis-introduktion" aria-labelledby="listen-title">
    <div><p className="hp-eyebrow">OM DU ÄR NYFIKEN</p><h2 id="listen-title">En stund att<br/>landa i dig själv.</h2>
      <p>Lyssna på min röst och få en försmak av hur jag arbetar. I den här kostnadsfria guidningen får du föreställa dig en inre plats av lugn och trygghet.</p>
      <p className="hp-listen-meta">20 minuter · Frivillig introduktion</p>
      <p>Du behöver inte uppleva något särskilt. Och du behöver inte lyssna innan du tar kontakt.</p>
      <details className="hp-reading-details"><summary>Innan du lyssnar <span aria-hidden="true">+</span></summary><p>Sitt eller ligg bekvämt på en lugn plats där du kan vara ostörd. Lyssna när du kan ägna dig åt guidningen fullt ut, aldrig medan du kör eller gör något som kräver din uppmärksamhet.</p><p>Det finns i dagsläget inget manus eller textalternativ till videon.</p></details>
    </div>
    <div className="hp-video">{playing ? <iframe src="https://www.youtube-nocookie.com/embed/FYSi_FQKrp8?autoplay=1" title="Introduktion till hypnos med Johannes Stenmarck, 20 minuter" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : <button className="hp-video-start" onClick={() => setPlaying(true)}><span className="hp-play" aria-hidden="true">▶</span><span>Öppna introduktionen<span>20 minuter · Spelas via YouTube</span></span></button>}</div>
  </section>;
}
