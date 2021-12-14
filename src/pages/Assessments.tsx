import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import './Assessments.css';

const Assessments: React.FC = () => {
  return (
    <IonPage>
      {/*Back button and Header*/}
      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonButtons  slot="start">
			<IonBackButton  style={{height: 'var(--min-height)', width: 'var(--min-width)', color: 'var(--light-blue-1)', display: 'block'}} />
          </IonButtons>
		  <IonTitle style={{padding: '2px', color: 'var(--light-blue-1)', textAlign: "left", fontSize: 29, height: '65px'}}>Assessments</IonTitle>
        </IonToolbar>
      </IonHeader>
    
    {/*Text and links can be inputted in this area*/}
	  <IonContent fullscreen className="new-background-color-2">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Symptom Assessments</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Assessments;