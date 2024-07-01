// projectsData.js
import ibgroup from '/src/assets/images/ib-group-desktop.webp';
import multilingual from '/src/assets/images/MultilingualSystem.webp';
import cspm from '/src/assets/images/CSPM.webp';
import emotion from '/src/assets/images/Emotion.webp';
import finance from '/src/assets/images/Finance.webp';
import anpr from '/src/assets/images/vehicleTracking.webp';

const projectsData = [
  {
    title: 'Automatic License Plate Detection and Recognition System',
    description: 'Computer Vision / Machine Learning',
    imageSrc: anpr,
    link: 'https://github.com/Amit-Ramrakhyani/License-Plate-Recognition'
  },
  {
    title: 'Multilingual Transcription & Translation System',
    description: 'Natural Language Processing / Machine Learning',
    imageSrc: multilingual,
    link: 'https://github.com/Amit-Ramrakhyani/VerbalLinguists.git'
  },
  {
    title: 'Cloud Security Posture Management',
    description: 'Machine Learning / Data Analysis / Cloud Computing',
    imageSrc: cspm,
    link: 'https://github.com/Amit-Ramrakhyani/Cloud-Security-Posture-Management.git'
  },
  {
    title: 'Emotion Detection System',
    description: 'Computer Vision / Machine Learning',
    imageSrc: emotion,
    link: 'https://github.com/Amit-Ramrakhyani/Emotion-Detection'
  },
  {
    title: 'Personal Finance Monitoring Platform',
    description: 'Data Analysis, Machine Learning, Web Development, App Development',
    imageSrc: finance,
    link: 'https://github.com/Amit-Ramrakhyani/Personal-Finance-Monitoring-System'
  }
];

export default projectsData;