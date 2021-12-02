import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonBackButton, IonButtons, useIonViewWillEnter } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import  { HorizontalBar, Bar } from 'react-chartjs-2';
import { getDatabase, ref, onValue, get, child, } from 'firebase/database'
import React, { useState, useEffect} from 'react';
// @ts-ignore
import StarRatings from 'react-star-ratings';
import './TreatmentPage.css';

interface treatmentDetailsProps extends RouteComponentProps<{
  temp: string;
}> {}

const TreatmentPage: React.FC<treatmentDetailsProps> = ({match, history}) => {
  
  const initArray: number[] = [];
  const [overallData, setOverallData] = useState(initArray);
  const [generalData, setGeneralData] = useState({});
  const [symptomsData, setSymptomsData] = useState({});
  const [adverseData, setAdverseData] = useState({});
  const [rating, setRating] = useState(0);
  const [numSurveyed, setNumSurveyed] = useState(0);
  const [treatmentType, setTreatmentType] = useState("");
  const [analysis, setAnalysis] = useState("");
  const loadData = () => {
    var overallDataTemp:number[] = [];
    var dbref = ref(getDatabase())
    get(child(dbref, `treatments/${match.params.temp}`)).then((snapshot) => {
      var temp:any[] = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          temp.push(childSnapshot.val())
        })
        overallDataTemp.push(Number(temp[2]));
        overallDataTemp.push(Number(temp[1]));
        setNumSurveyed(Number(temp[4]))
        setTreatmentType(String(temp[0]))
        setOverallData(overallDataTemp);
        setGeneralData({
          labels: ['Overall Benefit', 'Overall Adverse', ],  
          datasets: [
            {
              label: 'Rating',
              backgroundColor: repeatedArray,
              borderColor: repeatedArray,
              borderWidth: 2,
              data: overallDataTemp
            }
          ]
        });
        var tempRating:number = Number(((overallDataTemp[0] - overallDataTemp[1]) * 2).toFixed(1));
        //console.log(tempRating + "Ok");
        if(tempRating < 0) {
          setRating(0);
        }
        else if (tempRating > 5) {
          setRating(5);
        }
        else {
          setRating(tempRating);
        }
    
        if(tempRating >=0 && tempRating <= 1) {
          setAnalysis("Poor");
        }
        else if(tempRating > 1 && tempRating <= 2) {
          setAnalysis("Fair");
        }
        else if(tempRating > 2 && tempRating <=3) {
          setAnalysis("Good");
        }
        else if(tempRating > 3 && tempRating <=4) {
          setAnalysis("Very Good");
        }
        else if(tempRating > 4 && tempRating <=5) {
          setAnalysis("Excellent");
        }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    get(child(dbref, `treatmentSymptoms/${match.params.temp}`)).then((snapshot) => {
      var treatmentSymptomList:number[]  = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          var symptomVal = childSnapshot.val();
          treatmentSymptomList.push(parseInt(symptomVal))
        });
      } else {
        console.log("No data available");
      }
      setSymptomsData({
        labels: ['Aggression', 'Anxiety', 'Attention', 'Cognition', 'Communication','Constipation', 'Depression', 'Diarrhea', 'Falling Asleep', 'General', 'Health', 'Hyperactivity', 'Irritability', 'Lethargy', 'OCD', 'Reflux', 'Seizures', 'Self-Injury', 'Sensory', 'Skin Problem', 'Social', 'Staying Asleep', 'Stimming', 'Tics'],
        datasets: [
          {
            label: '% Who Benefit',
            backgroundColor: repeatedArray,
            borderColor: repeatedArray,
            borderWidth: 2,
            data: treatmentSymptomList
          }
        ]
      });
    }).catch((error) => {
      console.error(error);
    });

    get(child(dbref, `treatmentAdverse/${match.params.temp}`)).then((snapshot) => {
      var treatmentAdverseList:number[]  = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          var symptomVal = childSnapshot.val();
          treatmentAdverseList.push(parseInt(symptomVal))
        });
      } else {
        console.log("No data available");
      }
      setAdverseData({
        labels: ['Aggression', 'Anxiety', 'Behavior', 'Bladder', 'Cognition', 'Depression', 'Dizziness', 'Dry mouth', 'Fatigue', 'Gastrointestinal', 'General', 'Headache', 'Hyperactivity', 'Irritability', 'Liver & Kidney', 'Loss of appetite', 'Nausea', 'Rash', 'Seizures', 'Self-injury', 'Sleep', 'Stimming', 'Tics', 'Weight gain', 'Weight loss'],  
        datasets: [
          {
            label: '% With Adverse Effects',
            backgroundColor: repeatedArray,
            borderColor: repeatedArray,
            borderWidth: 2,
            data: treatmentAdverseList
          }
        ]
      });
    }).catch((error) => {
      console.error(error);
    });
  };

  const repeatedArray = [].concat(...Array(20).fill([
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 99, 132, 0.2)',
  ],));

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

  useEffect(() => {
    loadData()
  }, []);

  return (
    <IonPage>
	    <IonHeader>
        <IonToolbar className="new-background-color">
          <IonButtons  slot="start">
			      <IonBackButton defaultHref="/treatments" style={{height: 'var(--min-height)', width: 'var(--min-width)', color: 'var(--light-blue-1)', display: 'block'}} />
          </IonButtons>
		      <IonTitle style={{padding: '0px', color: 'var(--light-blue-1)', textAlign: "left", fontSize: 22, height: '65px'}}>Treatment Details</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="new-background-color-2">
        <>
          <div className="starDiv" style={{padding: '5px'}}>
			      <h1 style={{color: 'black', fontWeight: 'bold', fontFamily: 'sans-serif'}}>{match.params.temp}</h1>
            <p style={{fontFamily: 'sans-serif'}}>{treatmentType}</p>
			      <p style={{fontFamily: 'sans-serif'}}>Overall Rating: <strong>{analysis}</strong></p>
            <StarRatings className="starRating" rating={rating} numberOfStars={5} starDimension="20px" starRatedColor="gold"/>
			      <p style={{fontFamily: 'sans-serif'}}><strong>{rating}</strong> out of 5</p>
            <p style={{fontFamily: 'sans-serif'}}>Rated by: {numSurveyed} people</p>  
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
