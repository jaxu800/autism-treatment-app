import { IonItem, IonLabel, IonItemGroup  } from '@ionic/react';
import React, { useState, useEffect} from 'react';

const TreatmentList: React.FC = () => {
  const[data,setData] = useState([{}])

  useEffect(() => {
      fetch('/treatementsList').then((response) => {
          if (response.ok){
            return response.json()
          }
        }).then(
          (data) => {
            setData(data)
            console.log(data)
          }
        )
  },[])

    var treatments = Object.keys(data);
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
