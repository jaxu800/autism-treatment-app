import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonBackButton, IonButtons } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import  { HorizontalBar, Bar } from 'react-chartjs-2';
import './TreatmentPage.css';


interface treatmentDetailsProps extends RouteComponentProps<{
  temp: string;
}> {}

const TreatmentPage: React.FC<treatmentDetailsProps> = ({match, history}) => {
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
      text: `${match.params.temp} Symptom Benefits`
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
      text: `${match.params.temp} Adverse Effects`
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 15
        }
      }]
    }
  };
  const generalData = {
    labels: ['Overall Benefit', 'Overall Adverse', ],  
    datasets: [
      {
        label: 'Rating',
        backgroundColor: repeatedArray,
        borderColor: repeatedArray,
        borderWidth: 2,
        data: [1.8, 0.1]
      }
    ]
  };
  const generalOptions = {
    title: {
      display: true,
      fontSize: 15,
      text: `${match.params.temp} Overviews`
    },
    maintainAspectRatio: false,

  };
  return (
    <IonPage>
      <IonHeader>
	    <IonToolbar className="new-background-color" style={{height: '36px'}}>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle style={{color: '#E7EFF6', fontSize: 12}}>Autism Treatments</IonTitle>
        </IonToolbar>
      </IonHeader>
	  <IonHeader>
        <IonToolbar className="new-background-color">
          <IonTitle style={{color: '#E7EFF6', textAlign: "center", fontSize: 30}}>{match.params.temp}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="new-background-color-2">
        <>
		  <div className="container">
			<Bar data={generalData} options={generalOptions}></Bar>
          </div>
          <div className="container">
			<HorizontalBar data={symptomsData} options={symptomsOptions}></HorizontalBar>
          </div>  
          <div className="container">
			<HorizontalBar data={adverseData} options={adverseOptions}></HorizontalBar>
          </div>
        </>
      </IonContent>
    </IonPage>
  );
};

export default TreatmentPage;
