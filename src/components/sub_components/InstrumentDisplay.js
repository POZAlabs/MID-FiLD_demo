import React from 'react';

const InstrumentDisplay = ({ 
  instrumentName, 
  noModulationImg,
  noModulationSpectrogram, 
  generatedImg,
  generatedSpectrogram, 
  noModulationAudio, 
  generatedAudio 
}) => {
  return (
    <div className="instrument-display">
      <div className="instrument-name">{instrumentName}</div>
      <div className="instrument-content">
        <div className="column">
          <div className="label">No Modulation</div>
          <img src={noModulationImg} alt="No Modulation" className="image" />
          <img src={noModulationSpectrogram} alt="No Modulation Spectrogram" className="spectrogram" />
          <audio controls src={noModulationAudio} className="audio-player">Your browser does not support the audio element.</audio>
        </div>
        <div className="column">
          <div className="label">Generated</div>
          <img src={generatedImg} alt="Generated" className="image" />
          <img src={generatedSpectrogram} alt="Generated Spectrogram" className="spectrogram" />
          <audio controls src={generatedAudio} className="audio-player">Your browser does not support the audio element.</audio>
        </div>
      </div>
    </div>
  );
};

export default InstrumentDisplay;
