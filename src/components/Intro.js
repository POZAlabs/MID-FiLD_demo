import React from 'react';
import presentation_video from '../assets/presentation_video.mp4';
import data from '../assets/data.png';
import paper from '../assets/paper.png';


const Intro = () => {
    return (
      <div id="Intro" className="intro-section">
        <div className='link-container'>
            <a href="https://github.com/POZAlabs/MID-FiLD_code" target="_blank">
               <img src={data} alt="Data" className='data-icon' />
            </a>
            <a href="https://ojs.aaai.org/index.php/AAAI/article/view/27774" target="_blank">
              <img src={paper} alt="Paper" className='paper-icon' />
            </a>
            </div>
          <div className='intro-video'>
            <video controls className='video'> <source src={presentation_video} type="video/mp4" /> </video>
          </div>
          <div>
            <div className="intro-text">
                <p> Expressive dynamics, controlling the loudness of an instrument, is critical in music production. Studies using deep learning to replicate human performances have emphasized its importance, focusing on note-level MIDI velocity and loudness in audio synthesis. However, these methods fall short for most Western instruments, which can vary loudness within a single note. Additionally, expressive dynamics depend on various musical elements like instrument type and mood, not just note properties. </p>
                <p> To address these gaps, we introduce MID-FiLD, a unique dataset with 4,422 MIDI music samples, paired with fine-level expressive dynamics and metadata from professional composers. It uses modulation wheel parameter values in MIDI (CC#1) for nuanced expressive dynamics, offering more sophisticated annotations than existing datasets. MID-FiLD also includes metadata like mood and track role, revealing a strong correlation between dynamics and musical characteristics. </p>
                <p> Our analysis shows the dataset's potential in understanding musical dynamics beyond MIDI limitations. We propose a baseline model for generating fine-level dynamics, demonstrating MID-FiLD's superiority in fidelity and controllability of music generation. This research highlights the significance of comprehensive datasets in creating realistic musical expressions, underscoring the importance of both fine-level dynamics and relevant metadata in the field of music technology.</p>
          </div>
        </div>
      </div>
    );
}

export default Intro;