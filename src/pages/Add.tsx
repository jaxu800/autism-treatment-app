import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Add.css';

const Add: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color" style={{height: '36px'}}>
          <IonTitle style={{color: '#E7EFF6', fontSize: 12}}>Autism Treatments</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonTitle style={{color: '#E7EFF6', textAlign: "center", fontSize: 24}}>Additional Information</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="new-background-color-2">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Additional Information</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Add;