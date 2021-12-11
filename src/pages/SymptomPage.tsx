import {
  IonContent, IonHeader,
  IonPage, IonTitle,
  IonToolbar, IonItem,
  IonLabel, IonButtons,
  IonBackButton, IonItemGroup,
  IonPopover,IonIcon,
  IonButton
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import Chart, { Bar } from "react-chartjs-2";
import "./SymptomContainer.css";
import {ellipsisVertical} from 'ionicons/icons';
import React, { useEffect, useState, MouseEvent } from 'react';
import { getDatabase, ref, onValue, get, child, } from 'firebase/database'

interface symptomsDetailsProps
  extends RouteComponentProps<{
    temp: string;
  }> {}

const SymptomPage: React.FC<symptomsDetailsProps> = ({ match, history }) => {
  const[treatmentss,setTreatments] = useState({})
  

  const loadData = () => {
    var dbref = ref(getDatabase())
    get(child(dbref, `symptoms/${match.params.temp}`)).then((snapshot) => {
      var temp:Object = 0;
      if (snapshot.exists()){
        temp = snapshot.toJSON()!
        var sortableArray = Object.entries(temp);
        var sortedArray = sortableArray.sort(([, b], [, a]) => a - b);
        var sortedObject = Object.fromEntries(sortedArray); 
        temp = sortedObject
        console.log(sortedObject)
      } else {
        console.log("No data available");
      }
      setTreatments(temp)
    }).catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    loadData()
  }, []);

  var treatments = Object.keys(treatmentss);

  const handleMouseEvent = (e: MouseEvent<HTMLElement>) => {

  }

  const repeatedArray = [].concat(
    ...Array(20).fill([
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
    ])
  );

  const treatmentsRating = {
    labels: treatments,
    datasets: [
      {
        label: "Overall Net Benefit Rating",
        backgroundColor: repeatedArray,
        borderColor: repeatedArray,
        borderWidth: 2,
        data: Object.values(treatmentss),
      },
    ],
  };

  const treatmentOptions = {
    title: {
      display: true,
      fontSize: 15,
      text: `Top Rated Treatments`,
    },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display:false,
          overflow:true,
          scaleLabel: {
            display: false,
          },
          ticks: {
            min: 0,
            max: 1,
            callback: function (value: any) {
              return value;
            },
          },
        },
      ],
      yAxes: [
        {
          overflow: true,
          display: true,
            ticks: {
                suggestedMin: 0,
                beginAtZero: true 
            },
        },
      ],
    },
  };

  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  const [treatType, setTreatType] = useState<string>('diet');
  const [sort, setSort] = useState<string>('overall');

  return (
    <IonPage>
      {/*Back button, Header, and About tab*/}
      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonButtons slot="start">
            <IonBackButton
              defaultHref="/symptoms"
              style={{
                height: "var(--min-height)",
                width: "var(--min-width)",
                color: "var(--light-blue-1)",
                display: "block",
              }}
            />
          </IonButtons>
	        <IonTitle style={{padding: '0px', color: 'var(--light-blue-1)', textAlign: "center", fontSize: 20, height: '65px'}}>Symptom Details</IonTitle>
          {/*Info button on right side of Header: when clicked, reveals the text shown below*/}
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
      
      {/*Symptoms info*/}
      <IonContent fullscreen className="new-background-color-2">
        <>
        {/*Graph of sorted top treatments for the chosen symptom*/}
        <div className="starDiv" style={{padding: '5px'}}>
			    <h1 style={{color: 'black', fontWeight: 'bold', fontFamily: 'sans-serif'}}>{match.params.temp}</h1>
          <div className="container">
            <Bar data={treatmentsRating} options={treatmentOptions} ></Bar>
          </div>

          <IonTitle style={{ padding: "10px", fontSize: "16" }}>
            Top Rated Treatments
          </IonTitle>

          {/*List clickable treatments to navigate to Treatment info page*/}
          <IonItemGroup>
            {treatments.map((elem) => {
              return (
                <IonItem
                  className="new-background-color-2"
                  button
                  href={"treatments/" + elem}
                  onClick={() => {}}
                  detail
                >
                  <IonLabel>{elem}</IonLabel>
                </IonItem>
              );
            })}
          </IonItemGroup>
        </div></>
      </IonContent>
    </IonPage>
  );
};

export default SymptomPage;
