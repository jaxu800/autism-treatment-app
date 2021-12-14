import { IonItem, IonLabel, IonItemGroup  } from '@ionic/react';
import { getDatabase, ref, get, child } from 'firebase/database'
import React, { useState, useEffect, Component } from 'react';

const TreatmentList: React.FC<{selectedValue:string}> = ({selectedValue}) => {
    
    const initArray: string[] = [];
    const [treatments, setTreatments] = useState(initArray);
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
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    useEffect(() => {
      loadData(selectedValue);
    }, [selectedValue]);
    
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
