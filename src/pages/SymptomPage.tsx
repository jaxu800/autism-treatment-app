import {
  IonContent, IonHeader,
  IonPage, IonTitle,
  IonToolbar, IonItem,
  IonLabel, IonButtons,
  IonBackButton, IonItemGroup,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import { Bar } from "react-chartjs-2";
import "./SymptomContainer.css";
import React, { useEffect, useState } from 'react';


interface symptomsDetailsProps
  extends RouteComponentProps<{
    temp: string;
  }> {}

const SymptomPage: React.FC<symptomsDetailsProps> = ({ match, history }) => {
  const[data,setData] = useState([{}])

  useEffect(() => {
      fetch('/symptomsList/symp', {
        method: 'POST',
        body: JSON.stringify({
          content:`${match.params.temp}`
        })
      }).then((response) => {
        if (response.ok){
          return response.json()
        }
      }).then(
        (data) => {
          console.log(data)
          setData(data)
        }
      )
  },[])

  var treatments = Object.keys(data);

  const repeatedArray = [].concat(
    ...Array(20).fill([
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
    ])
  );

  const treatementsRating = {
    labels: treatments,
    datasets: [
      {
        label: "Overall Net Benefit Rating",
        backgroundColor: repeatedArray,
        borderColor: repeatedArray,
        borderWidth: 2,
        data: Object.values(data),
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
            <div className="container">
              <Bar data={treatementsRating} options={treatmentOptions}></Bar>
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
