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
    labels: ['Aggression', 'Anxiety', 'Attention', 'Cognition', 'Communication','Constipation', 'Depression', 'Diarrhea', 'Falling Asleep', 'General', 'Health', 'Hyperactivity', 'Irritability', 'Lethargy', 'OCD', 'Reflux', 'Seizures', 'Self-Injury', 'Sensory', 'Skin Problem', 'Social', 'Staying Asleep', 'Stimming', 'Tics'],
    datasets: [
      {
        label: 'Percent Who Benefit',
        backgroundColor: repeatedArray,
        borderColor: repeatedArray,
        borderWidth: 2,
        data: [9, 11, 2, 2, 2, 0, 4, 0, 36, 27, 2, 0, 7, 2, 2, 0, 0, 0, 0, 0, 2, 27, 2, 2, 0]
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
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true, 
          labelString: 'Percent Who Benefit'
        },
        ticks: {
          min: 0,
          max: 60,
          callback: function(value:any) {
            return value + "%"
          }
        }
      }]
    }
  };
  const adverseData = {
    labels: ['Aggression', 'Anxiety', 'Behavior', 'Bladder', 'Cognition', 'Depression', 'Dizziness', 'Dry mouth', 'Fatigue', 'Gastrointestinal', 'General', 'Headache', 'Hyperactivity', 'Irritability', 'Liver & Kidney', 'Loss of appetite', 'Nausesa', 'Rash', 'Seizures', 'Self-injury', 'Sleep', 'Stimming', 'Tics', 'Weight gain', 'Weight loss'],  
    datasets: [
      {
        label: '% Who Have Adverse Effects',
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
        scaleLabel: {
          display: true, 
          labelString: '% Who Have Adverse Effects'
        },
        ticks: {
          min: 0,
          max: 30,
          callback: function(value:any) {
            return value + "%"
          }
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
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 3,
        }
      }]
    }

  };
  return (
    <IonPage>
	  <IonHeader>
        <IonToolbar className="new-background-color">
          <IonTitle style={{color: '#E7EFF6', textAlign: "center", fontSize: 30, height: '65px'}}>{match.params.temp}</IonTitle>
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
