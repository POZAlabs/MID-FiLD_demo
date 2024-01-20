import React from 'react';
import s71 from '../../assets/audio/midfild_demo_0071.wav';
import s54 from '../../assets/audio/midfild_demo_0054.wav';
import s26 from '../../assets/audio/midfild_demo_0026.wav';
import s06 from '../../assets/audio/midfild_demo_0006.wav';
import s82 from '../../assets/audio/midfild_demo_0082.wav';

const musicData = [
  { instrument: 'Violin', trackRole: 'Sub-Melody', mood: 'Romantic', minCC: 58, maxCC: 125, audioFile: s71 },
  { instrument: 'Cello', trackRole: 'Main Melody', mood: 'Romantic', minCC: 14, maxCC: 116, audioFile: s54 },
  { instrument: 'Flute', trackRole: 'Sub-Melody', mood: 'Relaxing', minCC: 42, maxCC: 56, audioFile: s26 },
  { instrument: 'Bassoon', trackRole: 'Main Melody', mood: 'Dreamy', minCC: 50, maxCC: 100, audioFile: s06 },
  { instrument: 'Trumpet', trackRole: 'Main Melody', mood: 'Inspiring', minCC: 63, maxCC: 99, audioFile: s82 },
];

const MusicTable = () => {
  return (
    <table className='music-table'>
      <thead>
        <tr>
          <th>Instrument</th>
          <th>Track Role</th>
          <th>Mood</th>
          <th>Min CC#1</th>
          <th>Max CC#1</th>
        </tr>
      </thead>
      <tbody>
        {musicData.map((item, index) => (
          <React.Fragment key={index}>
            <tr>
              <td>{item.instrument}</td>
              <td>{item.trackRole}</td>
              <td>{item.mood}</td>
              <td>{item.minCC}</td>
              <td>{item.maxCC}</td>
            </tr>
            <tr>
              <td colSpan="5" className='wav-file'>
                <audio controls>
                  <source src={item.audioFile} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default MusicTable;
