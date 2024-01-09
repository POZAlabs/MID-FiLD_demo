import React from 'react';
import bassoon from '../assets/audio/bassoon.mp3';

const musicData = [
  { instrument: 'Bassoon', trackRole: 'Main Melody', mood: 'Dreamy', minCC: 50, maxCC: 100, mp3File: 'bassoon.mp3' },
  { instrument: 'Flute', trackRole: 'Sub Melody', mood: 'Relaxing', minCC: 42, maxCC: 56, mp3File: 'flute.mp3' },
  { instrument: 'Sax', trackRole: 'Main Melody', mood: 'Groovy', minCC: 72, maxCC: 114, mp3File: 'sax.mp3' },
  { instrument: 'String Double Bass', trackRole: 'Bass', mood: 'Sad', minCC: 0, maxCC: 85, mp3File: 'double-bass.mp3' },
  { instrument: 'Trumpet', trackRole: 'Main Melody', mood: 'Inspiring', minCC: 63, maxCC: 99, mp3File: 'trumpet.mp3' },
];

const MusicTable = () => {
  return (
    <table>
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
                  <source src={`../assets/audio/${item.mp3File}`} type="audio/mpeg" />
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
