import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonBackButton, IonButtons } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import  { HorizontalBar, Bar } from 'react-chartjs-2';
// @ts-ignore
import StarRatings from 'react-star-ratings';
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
  var overallData = [1.8, 0.1];
  var rating = (overallData[0] - overallData[1]) * 2;
  if(rating < 0) {
    rating = 0;
  }
  var analysis = "Good";
  const symptomsData = {
    labels: ['Aggression', 'Anxiety', 'Attention', 'Cognition', 'Communication','Constipation', 'Depression', 'Diarrhea', 'Falling Asleep', 'General', 'Health', 'Hyperactivity', 'Irritability', 'Lethargy', 'OCD', 'Reflux', 'Seizures', 'Self-Injury', 'Sensory', 'Skin Problem', 'Social', 'Staying Asleep', 'Stimming', 'Tics'],
    datasets: [
      {
        label: '% Who Benefit',
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
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true, 
          labelString: '% Who Benefit'
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
        label: '% With Adverse Effects',
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
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true, 
          labelString: '% With Adverse Effects'
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
        data: overallData
      }
    ]
  };
  const generalOptions = {
    title: {
      display: true,
      fontSize: 15,
      text: `Benefit vs. Adverse`
    },
    legend: {
      display: false
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
          <IonButtons  slot="start">
			<IonBackButton  style={{height: 'var(--min-height)', width: 'var(--min-width)', color: 'var(--light-blue-1)', display: 'block'}} />
          </IonButtons>
		  <IonTitle style={{padding: '0px', color: 'var(--light-blue-1)', textAlign: "left", fontSize: 22, height: '65px'}}>Treatment Details</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="new-background-color-2">
        <>
          <div className="starDiv" style={{padding: '5px'}}>
			<h1 style={{color: 'black', fontWeight: 'bold', fontFamily: 'sans-serif'}}>{match.params.temp}</h1>
			<p style={{fontFamily: 'sans-serif'}}>Overall Rating: <strong>{analysis}</strong></p>
			<StarRatings className="starRating" rating={rating} numberOfStars={5} starDimension="20px" starRatedColor="gold"/>
			<p style={{fontFamily: 'sans-serif'}}><strong>{rating}</strong> out of 5</p>  
			<p style={{fontFamily: 'sans-serif'}}>Rated by: 150 people</p>
          </div>
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
