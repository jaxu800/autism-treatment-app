import { IonItem, IonLabel, IonItemGroup  } from '@ionic/react';
import { getDatabase, ref, get, child } from 'firebase/database'
import React, { useState, useEffect, Component } from 'react';

// This file gathers all treatments from the database and lists them in the Treatments page
const TreatmentList: React.FC<{selectedValue:string}> = ({selectedValue}) => {
    
    //console.log("beginning")
    const initArray: string[] = [];
    const [treatments, setTreatments] = useState(initArray);
    //console.log("treatments have been unset")
    const [nutra, setNutra] = useState(initArray);
    const [psych, setPsych] = useState(initArray);
    const [diet, setDiet] = useState(initArray);

    const loadData = (tempS:string) => {
      const dbRef = ref(getDatabase());
      var treatmentList:string[]  = [];
      get(child(dbRef, `treatments`)).then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            var key = childSnapshot.key;
            treatmentList.push(String(childSnapshot.key));
          });
          var nutraTemp:string[] = [];
          var psychTemp:string[] = [];
          var dietTemp:string[] = [];
          for(const treatmentName of treatmentList) {
            const dbRef = ref(getDatabase());
            get(child(dbRef, `treatments/${treatmentName}`)).then((snapshot) => {
              var temp:any[] = [];
              if (snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                  temp.push(childSnapshot.val())
                });
                if(temp[0] == "Nutritional Supplement") {
                  nutraTemp.push(treatmentName)
                }
                else if(temp[0] == "Psych or Seizure Medication") {
                  psychTemp.push(treatmentName);
                }
                else if(temp[0] == "Diet") {
                  dietTemp.push(treatmentName);
                }
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            });
          }
          setNutra(nutraTemp);
          setPsych(psychTemp);
          setDiet(dietTemp);
          var finalList:string[] = [];
          if(tempS == '') {
            finalList = treatmentList;
          }
          else if(tempS == "psych") {
            finalList = psych;
          }
          else if(tempS == "nutra") {
            finalList = nutra;
          }
          else if(tempS == "diet") {
            finalList = diet;
          }
          setTreatments(finalList);
          //console.log("when its set")
          //console.log(treatments)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    useEffect(() => {
      //console.log("useEffect before")
      loadData(selectedValue);
      //console.log("useEffect after")
    }, [selectedValue]);
    
    //console.log("before return")
    //console.log(treatments)
    //console.log("right before return")

    
    return ( 
      <IonItemGroup>
        {
          treatments.map(elem => {
            return(
              <IonItem className="new-background-color-2" button href={"treatments/" + elem} onClick={() => {}} detail>
                <IonLabel style={{color: 'black'}}>
                  {elem}
                </IonLabel>
              </IonItem>
            )
          })
        }
      </IonItemGroup>
    );
  };
  
  export default TreatmentList;
