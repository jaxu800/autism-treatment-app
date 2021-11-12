import { IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar, 
        IonItem, 
        IonLabel, 
        IonButtons, 
        IonBackButton, 
        IonItemGroup } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import  { HorizontalBar, Bar } from 'react-chartjs-2';
import './SymptomContainer.css';

import './Tab3.css';

interface symptomsDetailsProps extends RouteComponentProps<{
  temp: string;
}> {}

const SymptomPage: React.FC<symptomsDetailsProps> = ({match, history}) => {
  var treatments = ["5-HTP", "Biotin", "Blend of Amino Acids", "Calcium", "Carntine", "Chromium", "CoQ10", "Cod Liver Oil", "DMG", "Glutamine", "Iron", "Iodine", "Melatonin", "Omega 3", "Potassium", "Taurine", "Vitamin D", "Zinc"];

  const repeatedArray = [].concat(...Array(20).fill([
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
  ],));

  const treatementsRating = {
    labels: ['Melatonin', '5-HTP', 'Tryptophan', 'Valerian Root','Melatonin', '5-HTP', 'Tryptophan', 'Valerian Root',],
    datasets: [
      {
        label: 'Overall Net Benefit Rating',
        backgroundColor: repeatedArray,
        borderColor: repeatedArray,
        borderWidth: 2,
        data: [0.63, 0.46, 0.32, 0.24,0.63, 0.46, 0.32, 0.24]
      }
    ]
  };

  const treatmentOptions = {
    title: {
      display: true,
      fontSize: 15,
      text: `Top Treatments for ${match.params.temp}`,
    },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: false, 
        },
        ticks: {
          min: 0,
          max: 1,
          callback: function(value:any) {
            return value
          }
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Overall Net Benefit Rating'
        }
      }]
    }
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonButtons slot="start">
	          <IonBackButton defaultHref="/symptoms" style={{height: 'var(--min-height)', width: 'var(--min-width)', color: 'var(--light-blue-1)', display: 'block'}} />
          </IonButtons>
	        <IonTitle style={{padding: '8px', color: 'var(--light-blue-1)', textAlign: "left", fontSize: 22, height: '65px'}}>Symptom Details</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="new-background-color-2">
        <>
        <div className="starDiv" style={{padding: '5px'}}>
			    <h1 style={{color: 'black', fontWeight: 'bold', fontFamily: 'sans-serif'}}>{match.params.temp}</h1>
          <div className="container">
            <Bar data={treatementsRating} options={treatmentOptions} ></Bar>
          </div>
        </div>

          <IonTitle style={{padding: '10px', fontSize: 18, fontWeight: 'bold'}}>
            Recomended Treatments
          </IonTitle>

          <IonItemGroup>
          {
          treatments.map(elem => {
            return(
              <IonItem className="new-background-color-2" button href={"treatments/" + elem} onClick={() => {}} detail>
                <IonLabel>
                  {elem}
                </IonLabel>
              </IonItem>
            )
          })
          }
          </IonItemGroup>
        </>
      </IonContent>
    </IonPage>
  );
};

export default SymptomPage;