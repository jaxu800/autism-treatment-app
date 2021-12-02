import { IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar, 
        IonItem, 
        IonLabel,
        IonPopover,
        IonText,
        IonButton,
        IonIcon,
        IonButtons, 
        IonBackButton, 
        IonItemGroup } from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import  { HorizontalBar, Bar } from 'react-chartjs-2';
import {ellipsisVertical} from 'ionicons/icons';
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
        label: 'Overall/Net Benefit Rating',
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
          labelString: 'Overall/Net Benefit Rating'
        }
      }]
    }
  };

  
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  const [treatType, setTreatType] = useState<string>('diet');
  const [sort, setSort] = useState<string>('overall');
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonButtons slot="start">
	          <IonBackButton defaultHref="/symptoms" style={{height: 'var(--min-height)', width: 'var(--min-width)', color: 'var(--light-blue-1)', display: 'block'}} />
          </IonButtons>
	        <IonTitle style={{padding: '0px', color: 'var(--light-blue-1)', textAlign: "center", fontSize: 21, height: '65px'}}>Symptom Details</IonTitle>
          <IonPopover
            event={popoverState.event}
            isOpen={popoverState.showPopover}
            onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
          >
            <IonItem>
              <IonContent>
                <IonTitle style={{textAlign: 'center', height: '50px', fontSize: 30}}>About</IonTitle>
                <p style={{fontFamily: 'var(--font-family-base)'}}>
                  This page displays treatment ratings for this symptom, 
                  with the most effective treatments having the highest scores. You have the option to 
                  sort these treatments by Overall Benefit (ignoring adverse effects) 
                  or by Net Benefit (factoring in adverse effects). 
                  To learn more about each treatment, click on the name of the treatment in the list below.
                </p>
              </IonContent>
            </IonItem>
          </IonPopover>
          <IonButton slot="end" color="light-blue-1" fill="clear" onClick={
            (e: any) => {
              e.persist();
              setShowPopover({ showPopover: true, event: e})
            }
          }>
            <IonIcon slot="icon-only" icon={ellipsisVertical} style={{color: '#e7eff6'}} />
          </IonButton>
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