import React from 'react';
import InstrumentDisplay from './sub_components/InstrumentDisplay';

// Import MIDI image
import noModulationCello from '../assets/results/main_melody-string_cello_no_modulation.png';
import generatedCello from '../assets/results/main_melody-string_cello_generated.png';

import noModulationFlute from '../assets/results/sub_melody-flute-no_modulation.png';
import generatedFlute from '../assets/results/sub_melody-flute_generated.png';

import noModulationHorn from '../assets/results/sub_melody-horn_no_modulation.png';
import generatedHorn from '../assets/results/sub_melody-horn_generated.png';

// Import Audio
import noModulationCelloAudio from '../assets/results/audio/main_melody-string_cello_no_modulation.wav';
import generatedCelloAudio from '../assets/results/audio/main_melody-string_cello_generated.wav';

import noModulationFluteAudio from '../assets/results/audio/sub_melody-flute_no_modulation.wav';
import generatedFluteAudio from '../assets/results/audio/sub_melody-flute_generated.wav';

import noModulationHornAudio from '../assets/results/audio/sub_melody-horn_no_modulation.wav';
import generatedHornAudio from '../assets/results/audio/sub_melody-horn_generated.wav';

// Import Spectrogram
import noModulationCelloSpectrogram from '../assets/results/spectrograms/main_melody-string_cello-no_modulation.png';
import generatedCelloSpectrogram from '../assets/results/spectrograms/main_melody-string_cello-generated.png';

import noModulationFluteSpectrogram from '../assets/results/spectrograms/sub_melody-flute-no_modulation.png';
import generatedFluteSpectrogram from '../assets/results/spectrograms/sub_melody-flute-generated.png';

import noModulationHornSpectrogram from '../assets/results/spectrograms/sub_melody-horn-no_modulation.png';
import generatedHornSpectrogram from '../assets/results/spectrograms/sub_melody-horn-generated.png';

const Results = () => {
  return (
    <div id="Results" className='results-section'>
      <h1>Results</h1>
      <div className='results-text'>
      <p> The tables below compare the differences between no modulation and generated samples through MIDI, Mel-Spectrogram, and audio file. </p>
      </div>
      <div className='comparison-container'>
        <InstrumentDisplay
          instrumentName="Cello"
          noModulationImg={noModulationCello}
          noModulationSpectrogram={noModulationCelloSpectrogram}
          generatedImg={generatedCello}
          generatedSpectrogram={generatedCelloSpectrogram}
          noModulationAudio={noModulationCelloAudio}
          generatedAudio={generatedCelloAudio}
        />
      </div>
      <div>
        <InstrumentDisplay
          instrumentName="Flute"
          noModulationImg={noModulationFlute}
          noModulationSpectrogram={noModulationFluteSpectrogram}
          generatedImg={generatedFlute}
          generatedSpectrogram={generatedFluteSpectrogram}
          noModulationAudio={noModulationFluteAudio}
          generatedAudio={generatedFluteAudio}
        />
      </div>
      <div>
        <InstrumentDisplay
          instrumentName="Horn"
          noModulationImg={noModulationHorn}
          noModulationSpectrogram={noModulationHornSpectrogram}
          generatedImg={generatedHorn}
          generatedSpectrogram={generatedHornSpectrogram}
          noModulationAudio={noModulationHornAudio}
          generatedAudio={generatedHornAudio}
        />
      </div>
    </div>
  );
}

export default Results;
