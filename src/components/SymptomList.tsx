import { IonItem, IonLabel, IonItemGroup } from '@ionic/react';
import React, { useState, useEffect } from 'react';

const SymptomList: React.FC = () => {

    const[data,setData] = useState([{}])

    useEffect(() => {
        fetch('/symptomsList').then((response) => {
            if (response.ok){
              return response.json()
            }
          }).then(
            (data) => {
              setData(data)
            }
          )
    },[])

    var symptomss = Object.keys(data);
    return (
        <IonItemGroup>
        {
            symptomss.map(elem => {
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