import { IonButton, IonIcon, IonPopover, IonSelect, IonSelectOption, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButtons, IonBackButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import TreatmentList from './TreatmentList';
import React, { useState } from 'react';
import {ellipsisVertical} from 'ionicons/icons';
import './Tab2.css';

const Treatments: React.FC<RouteComponentProps> = ({history}) => {
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  const [treatType, setTreatType] = useState<string>('diet');
  const [sort, setSort] = useState<string>('overall');

  return (
    <IonPage>
	    <IonHeader>
		    <IonToolbar className="new-background-color">
		      <IonTitle style={{padding: '2px', color: 'var(--light-blue-1)', textAlign: "right", fontSize: 22, height: '65px'}}>Treatment Options</IonTitle>
          <IonPopover
            event={popoverState.event}
            isOpen={popoverState.showPopover}
            onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
          >
            <IonItem>
              <IonLabel style={{fontWeight: 'bold'}}>Treatment Types</IonLabel>
              <IonSelect multiple value={treatType} onIonChange={e => setTreatType(e.detail.value)}>
                <IonSelectOption value="psych">Psych and Seizure</IonSelectOption>
                <IonSelectOption value="nutraceutical">Nutraceuticals</IonSelectOption>
                <IonSelectOption value="diet">Diets</IonSelectOption>
                <IonSelectOption value="therapies">Therapies</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonPopover>
          <IonButton slot="end" color="light-blue-1" fill="clear" onClick={
            (e: any) => {
              e.persist();
              setShowPopover({ showPopover: true, event: e})
            }
          }>
            <IonIcon slot="icon-only" icon={ellipsisVertical} style={{color: '#e7eff6'}} />
          </IonButton>
        </IonToolbar>
	    </IonHeader>
     
	    <IonContent fullscreen className="new-background-color-2">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Treatment Options</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TreatmentList />
      </IonContent>
    </IonPage>
  );
};

export default Treatments;
