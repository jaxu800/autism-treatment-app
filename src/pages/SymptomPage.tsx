import {
  IonContent, IonHeader,
  IonPage, IonTitle,
  IonToolbar, IonItem,
  IonLabel, IonButtons,
  IonBackButton, IonItemGroup,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import Chart, { Bar } from "react-chartjs-2";
import "./SymptomContainer.css";
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

  return (
    <IonPage>
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
          <IonTitle
            style={{
              padding: "8px",
              color: "var(--light-blue-1)",
              textAlign: "left",
              fontSize: 22,
              height: "65px",
            }}
          >
            Symptom Details
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="new-background-color-2">
        <>
          <div className="starDiv" style={{ padding: "5px" }}>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              {match.params.temp}
            </h1>
            <div className="graphExpander">
              <Bar data={treatmentsRating} options={treatmentOptions}></Bar>
            </div>
          </div>

          <IonTitle style={{ padding: "10px", fontSize: "16" }}>
            Top Rated Treatments
          </IonTitle>

          <IonItemGroup>
            {treatments.map((elem) => {
              return (
                <IonItem
                  className="new-background-color-3"
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
        </>
      </IonContent>
    </IonPage>
  );
};

export default SymptomPage;
