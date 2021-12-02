import { IonSegment, IonSegmentButton, IonButton, IonIcon, IonPopover, IonSelect, IonSelectOption, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButtons, IonBackButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import TreatmentList from './TreatmentList';
import React, { useState } from 'react';
import {ellipsisVertical} from 'ionicons/icons';
import './Tab2.css';

const Treatments: React.FC<RouteComponentProps> = ({history}) => {

  return (
    <IonPage>
	    <IonHeader>
		    <IonToolbar className="new-background-color">
		      <IonTitle style={{padding: '2px', color: 'var(--light-blue-1)', textAlign: "center", fontSize: 22, height: '65px'}}>Treatment Options</IonTitle>
        </IonToolbar>
	    </IonHeader>
     
	    <IonContent fullscreen className="new-background-color-2">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Treatment Options</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} value="psych">
          <IonSegmentButton value="psych">
            <IonLabel style={{fontSize: 11, color: 'black'}}>Meds</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="nutra">
            <IonLabel style={{fontSize: 11, color: 'black'}}>Supplements</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="diet">
            <IonLabel style={{fontSize: 11, color: 'black'}}>Diets</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <TreatmentList />
      </IonContent>
    </IonPage>
  );
};

export default Treatments;
