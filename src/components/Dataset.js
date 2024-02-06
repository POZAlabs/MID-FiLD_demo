import React from 'react';
import ccheatmap from '../assets/ccheatmap.png';
import instclass from '../assets/instclass.png';
import moodclass from '../assets/moodclass.png';
import trackcategory from '../assets/trackcategory.png';
import process from '../assets/process.png';
import MusicTable from './sub_components/MusicTable';

const Dataset = () => {
    return (
        <div id="Dataset" className='dataset-section'>
            <h1>Dataset</h1>
            <div className='metadata'>
                <h2>Metadata</h2>
                <div className='metadata-container'>
                    <img src={instclass} alt='instclass' className='instclass-image' />
                    <ul>
                        <li> <b>Instrument:</b> The instrument taxonomy adheres to Western musical norms, featuring 18 types from bowed string, woodwind, or brass categories. This selection highlights the dynamic range achievable through bowing and blowing techniques, transcending basic note-level control.</li>
                    </ul>
                    <img src={trackcategory} alt='trackcategory' className='trackcategory-image' />
                    <ul>
                        <li><b>Track role:</b> Track role, influenced by the ComMU dataset, categorizes musical pieces into six types - main melody, sub-melody, accompaniment, bass, pad, and riff. Each category possesses unique note characteristics, defining its contribution to the overall composition.</li>
                    </ul>
                    <img src={moodclass} alt='moodclass' className='moodclass-image' />
                    <ul>
                        <li><b>Mood:</b> Mood in music, determined by factors like audio key, tempo, and rhythm traits, is organized into 19 distinct groups. This classification captures the emotional essence of each melody, providing a standardized approach to identifying the atmosphere conveyed by the music.</li>
                    </ul>
                    <img src={ccheatmap} alt='ccheatmap' className='ccheatmap-image' />
                    <ul>
                        <li><b>Min&max CC#1 value:</b> For CC#1 values, which represent modulation in MIDI, we include their minimum and maximum as metadata. These values are tokenized and quantized into a simplified 5-bin range, simplifying complexity and enhancing preprocessing through a regularization effect.</li>
                    </ul>
                </div>
            </div>

            <div className='examples'>
                <h2>Example of Dataset</h2>
                <div>
                    <MusicTable />
                </div>
            </div>

            <div className='process'>
                <h2>Overall Process</h2>
                <div className='process-image-container'>
                    <img src={process} alt='process' className='process-image' />
                </div>
            </div>

        </div>
    );
}

export default Dataset;
