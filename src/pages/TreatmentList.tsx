import { IonItem, IonLabel, IonItemGroup  } from '@ionic/react';
import { getDatabase, ref, get, child } from 'firebase/database'
import React, { useState, useEffect } from 'react';

const TreatmentList: React.FC = () => {
    
    const initArray: string[] = []
    const [treatments, setTreatments] = useState(initArray);
    const loadData = () => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `treatments`)).then((snapshot) => {
        var treatmentList:string[]  = [];
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
          var key = childSnapshot.key;
          treatmentList.push(String(childSnapshot.key));
          });
        } else {
          console.log("No data available");
        }
        setTreatments(treatmentList);
      }).catch((error) => {
        console.error(error);
      });
    }

    useEffect(() => {
      loadData()
    }, []);

    //var treatments = ["5-HTP", "Biotin", "Blend of Amino Acids", "Calcium", "Carntine", "Chromium", "CoQ10", "Cod Liver Oil", "DMG", "Glutamine", "Iron", "Iodine", "Melatonin", "Omega 3", "Potassium", "Taurine", "Vitamin D", "Zinc"];
    //getTreatmentList().then(value => { treatments = value });
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
