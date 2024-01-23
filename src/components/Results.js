import React from 'react';
import InstrumentDisplay from './sub_components/InstrumentDisplay';

// Import MIDI image
import groundTruthCello from '../assets/results/main_melody-string_cello_ground_truth.png';
import noModulationCello from '../assets/results/main_melody-string_cello_no_modulation.png';
import generatedCello from '../assets/results/main_melody-string_cello_generated.png';

import groundTruthFlute from '../assets/results/sub_melody-flute-ground_truth.png';
import noModulationFlute from '../assets/results/sub_melody-flute-no_modulation.png';
import generatedFlute from '../assets/results/sub_melody-flute_generated.png';

import groundTruthHorn from '../assets/results/sub_melody-horn_ground_truth.png';
import noModulationHorn from '../assets/results/sub_melody-horn_no_modulation.png';
import generatedHorn from '../assets/results/sub_melody-horn_generated.png';

// Import Audio
import groundTruthCelloAudio from '../assets/results/audio/main_melody-string_cello_ground_truth.wav';
import noModulationCelloAudio from '../assets/results/audio/main_melody-string_cello_no_modulation.wav';
import generatedCelloAudio from '../assets/results/audio/main_melody-string_cello_generated.wav';

import groundTruthFluteAudio from '../assets/results/audio/sub_melody-flute_ground_truth.wav';
import noModulationFluteAudio from '../assets/results/audio/sub_melody-flute_no_modulation.wav';
import generatedFluteAudio from '../assets/results/audio/sub_melody-flute_generated.wav';

import groundTruthHornAudio from '../assets/results/audio/sub_melody-horn_ground_truth.wav';
import noModulationHornAudio from '../assets/results/audio/sub_melody-horn_no_modulation.wav';
import generatedHornAudio from '../assets/results/audio/sub_melody-horn_generated.wav';

// Import Spectrogram
import groundTruthCelloSpectrogram from '../assets/results/spectrograms/main_melody-string_cello-ground_truth.png';
import noModulationCelloSpectrogram from '../assets/results/spectrograms/main_melody-string_cello-no_modulation.png';
import generatedCelloSpectrogram from '../assets/results/spectrograms/main_melody-string_cello-generated.png';

import groundTruthFluteSpectrogram from '../assets/results/spectrograms/sub_melody-flute-ground_truth.png';
import noModulationFluteSpectrogram from '../assets/results/spectrograms/sub_melody-flute-no_modulation.png';
import generatedFluteSpectrogram from '../assets/results/spectrograms/sub_melody-flute-generated.png';

import groundTruthHornSpectrogram from '../assets/results/spectrograms/sub_melody-horn-ground_truth.png';
import noModulationHornSpectrogram from '../assets/results/spectrograms/sub_melody-horn-no_modulation.png';
import generatedHornSpectrogram from '../assets/results/spectrograms/sub_melody-horn-generated.png';

const Results = () => {
  return (
    <div id="Results" className='results-section'>
      <h1>Results</h1>
      <div className='results-text'>
      <p> The tables below compare the differences between ground truth, no modulation, and generated samples through MIDI and audio file. </p>
      </div>
      <div className='comparison-container'>
        <InstrumentDisplay
          instrumentName="Cello"
          groundTruthImg={groundTruthCello}
          noModulationImg={noModulationCello}
          generatedImg={generatedCello}
          groundTruthAudio={groundTruthCelloAudio}
          noModulationAudio={noModulationCelloAudio}
          generatedAudio={generatedCelloAudio}
        />
      </div>
      <div>
        <InstrumentDisplay
          instrumentName="Flute"
          groundTruthImg={groundTruthFlute}
          noModulationImg={noModulationFlute}
          generatedImg={generatedFlute}
          groundTruthAudio={groundTruthFluteAudio}
          noModulationAudio={noModulationFluteAudio}
          generatedAudio={generatedFluteAudio}
        />
      </div>
      <div>
        <InstrumentDisplay
          instrumentName="Horn"
          groundTruthImg={groundTruthHorn}
          noModulationImg={noModulationHorn}
          generatedImg={generatedHorn}
          groundTruthAudio={groundTruthHornAudio}
          noModulationAudio={noModulationHornAudio}
          generatedAudio={generatedHornAudio}
        />
      </div>
      <h2>Mel-Spectrogram Comparison</h2>
      <div className='results-text'>
        <p> We further show differences between ground truth, no modulation, and generated samples through mel-spectrogram below. </p>
      </div>
      <div className='spectrogram-container'>
        <div className="spectrogram-row">
          <div className="instrument-title">Cello</div>
          <div className="spectrogram-set">
            <div className="label">Ground Truth</div>
            <img src={groundTruthCelloSpectrogram} alt="Cello Ground Truth Spectrogram" />
          </div>
          <div className="spectrogram-set">
            <div className="label">No Modulation</div>
            <img src={noModulationCelloSpectrogram} alt="Cello No Modulation Spectrogram" />
          </div>
          <div className="spectrogram-set">
            <div className="label">Generated</div>
            <img src={generatedCelloSpectrogram} alt="Cello Generated Spectrogram" />
          </div>
        </div>
        <div className="spectrogram-row">
          <div className="instrument-title">Flute</div>
          <div className="spectrogram-set">
            <div className="label">Ground Truth</div>
            <img src={groundTruthFluteSpectrogram} alt="Flute Ground Truth Spectrogram" />
          </div>
          <div className="spectrogram-set">
            <div className="label">No Modulation</div>
            <img src={noModulationFluteSpectrogram} alt="Flute No Modulation Spectrogram" />
          </div>
          <div className="spectrogram-set">
            <div className="label">Generated</div>
            <img src={generatedFluteSpectrogram} alt="Flute Generated Spectrogram" />
          </div>
        </div>
        <div className="spectrogram-row">
          <div className="instrument-title">Horn</div>
          <div className="spectrogram-set">
            <div className="label">Ground Truth</div>
            <img src={groundTruthHornSpectrogram} alt="Horn Ground Truth Spectrogram" />
          </div>
          <div className="spectrogram-set">
            <div className="label">No Modulation</div>
            <img src={noModulationHornSpectrogram} alt="Horn No Modulation Spectrogram" />
          </div>
          <div className="spectrogram-set">
            <div className="label">Generated</div>
            <img src={generatedHornSpectrogram} alt="Horn Generated Spectrogram" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
