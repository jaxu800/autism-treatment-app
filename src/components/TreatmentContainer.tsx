import './TreatmentContainer.css';
import  { HorizontalBar, Bar } from 'react-chartjs-2';
import { IonItem, IonContent, IonList } from '@ionic/react';

const TreatmentContainer: React.FC = (props) => {
  const repeatedArray = [].concat(...Array(20).fill([
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 99, 132, 0.2)',
  ],));
  const symptomsData = {
    labels: ['Aggression or Agitation', 'Anxiety', 'Attention', 'Cognition (ability to think)', 'Constipation', 'Depression', 'Diarrhea', 'Eczema or Skin Problem', 'General benefit, no one particular symptom', 'Health (fewer illnesses and or less severe illnesses)', 'Hyperactivity', 'Irritability', 'Language or Communication', 'Lethargy (easily tired)', 'OCD', 'Reflux or Vomiting', 'Seizures', 'Self-Injury', 'Sensory Sensitivity', 'Sleep (falling asleep)', 'Sleep (staying asleep)', 'Social Interaction and Understanding', 'Stimming or Perseveration or Desire for Sameness', 'Tics or Abnormal movements'],
    datasets: [
      {
        label: 'Percent Benefit',
        backgroundColor: repeatedArray,
        borderColor: repeatedArray,
        borderWidth: 2,
        data: [9, 11, 2, 2, 0, 4, 0, 0, 27, 2, 0, 7, 2, 2, 2, 0, 0, 0, 0, 36, 27, 2, 2, 0]
      }
    ]
  };
  const symptomsOptions = {
    title: {
      display: true,
      fontSize: 15,
      text: '5-HTP Symptom Benefits'
    },
    maintainAspectRatio: false,
  };
  const adverseData = {
    labels: ['Aggression or Agitation', 'Anxiety', 'Bedwetting or Bladder Control', 'Behavior problems', 'Decreased cognition (difficulty thinking or remembering)', 'Depression', 'Dizziness or Unsteadiness', 'Dry mouth', 'Fatigue or Drowsiness', 'Gastrointestinal problems', 'General worsening, no one specific symptom', 'Headache or Migraine', 'Hyperactivity', 'Irritability', 'Liver or Kidney problem', 'Loss of appetite', 'Nausesa', 'Rash', 'Seizures', 'Self-injury', 'Sleep Problems', 'Stimming or Perseveration or Desire for Sameness', 'Tics or Abnormal movements', 'Weight gain', 'Weight loss'],  
    datasets: [
      {
        label: 'Percent Adverse',
        backgroundColor: repeatedArray,
        borderColor: repeatedArray,
        borderWidth: 2,
        data: [4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  };
  const adverseOptions = {
    title: {
      display: true,
      fontSize: 15,
      text: '5-HTP Adverse Effects'
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        ticks: {
          maxRotation: 80,
          autoskip: false,
          minRotation: 80
          
        }
      }]
    }
  };

  return (
    <>
    <div className="container">
      <HorizontalBar data={symptomsData} options={symptomsOptions}></HorizontalBar>
    </div>  
    <div className="container2">
      <HorizontalBar data={adverseData} options={adverseOptions}></HorizontalBar>
    </div>
    </>
  );
};

export default TreatmentContainer;
