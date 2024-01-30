import React from 'react';

const InstrumentDisplay = ({ 
  instrumentName, 
  groundTruthImg, 
  noModulationImg, 
  generatedImg, 
  groundTruthAudio, 
  noModulationAudio, 
  generatedAudio 
}) => {
  return (
    <div className="instrument-display">
      <div className="instrument-name">{instrumentName}</div>
      <div className="instrument-content">
        <div className="column">
          <div className="label">Ground Truth</div>
          <img src={groundTruthImg} alt="Ground Truth" className="image" />
          <audio controls src={groundTruthAudio} className="audio-player">Your browser does not support the audio element.</audio>
        </div>
        <div className="column">
          <div className="label">No Modulation</div>
          <img src={noModulationImg} alt="No Modulation" className="image" />
          <audio controls src={noModulationAudio} className="audio-player">Your browser does not support the audio element.</audio>
        </div>
        <div className="column">
          <div className="label">Generated</div>
          <img src={generatedImg} alt="Generated" className="image" />
          <audio controls src={generatedAudio} className="audio-player">Your browser does not support the audio element.</audio>
        </div>
      </div>
    </div>
  );
};

export default InstrumentDisplay;
