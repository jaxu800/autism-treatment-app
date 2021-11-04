import './SymptomContainer.css';
import { IonTitle, IonContent, IonItemGroup, IonLabel, IonItem } from '@ionic/react';
import { HorizontalBar, Bar } from 'react-chartjs-2';
import { RouteComponentProps } from 'react-router';


const SymptomContainer: React.FC = () => {
  var treatments = ["5-HTP", "Biotin", "Blend of Amino Acids", "Calcium", "Carntine", "Chromium", "CoQ10", "Cod Liver Oil", "DMG", "Glutamine", "Iron", "Iodine", "Melatonin", "Omega 3", "Potassium", "Taurine", "Vitamin D", "Zinc"];

  const repeatedArray = [].concat(...Array(20).fill([
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
  ],));

  const treatementsRating = {
    labels: ['Melatonin', '5-HTP', 'Tryptophan', 'Valerian Root',],
    datasets: [
      {
        label: 'Overall Net Benefit Rating',
        backgroundColor: repeatedArray,
        borderColor: repeatedArray,
        borderWidth: 2,
        data: [0.63, 0.46, 0.32, 0.24]
      }
    ]
  };

  const treatmentOptions = {
    title: {
      display: true,
      fontSize: 15,
      text: `recommended Treatments`,
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


  return (
    <IonContent className="new-background-color-2">
      <>
        <div className="symptomcontainer">
          <strong>Symptom Page</strong>
          <p>Graph Goes Here</p>
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
  );

};

export default SymptomContainer;