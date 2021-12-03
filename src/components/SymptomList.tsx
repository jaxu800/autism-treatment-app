import { IonItem, IonLabel, IonItemGroup } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get, child } from 'firebase/database'


const SymptomList: React.FC = () => {

  const initArray: string[] = []
  const [symptoms, setSyptoms] = useState(initArray);
  const loadData = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `symptoms`)).then((snapshot) => {
      var symptomsList:string[]  = [];
      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          symptomsList.push(String(childSnapshot.key));
        });
      } else {
        console.log("No data available");
      }
      setSyptoms(symptomsList);
    }).catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    loadData()
  }, []);

  return (
      <IonItemGroup>
      {
          symptoms.map(elem => {
              return(
                  <IonItem className="new-background-color-2" button href={"symptoms/" + elem} onClick={() => {}} detail>
                      <IonLabel>
                          {elem}
                      </IonLabel>
                  </IonItem>
              )
          })
      }
      </IonItemGroup>
  );
};
  
  export default SymptomList;