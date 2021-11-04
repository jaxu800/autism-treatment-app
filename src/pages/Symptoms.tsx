import { IonListHeader, IonRadioGroup, IonRadio, IonPopover, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonMenu, IonSelect, IonSelectOption, IonList, IonLabel, IonItem } from '@ionic/react';
import React, { useState } from 'react';
import SymptomList from '../components/SymptomList';
import './Tab3.css';
import {ellipsisVertical} from 'ionicons/icons';

const Symptoms: React.FC = () => {
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  const [treatType, setTreatType] = useState<string>('all');
  const [sort, setSort] = useState<string>('overall');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color">
<<<<<<< HEAD
	        <IonTitle style={{padding: '2px', color: 'var(--light-blue-1)', textAlign: "center", fontSize: 24, height: '65px'}}>Symptoms</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonMenu side="start" menuId="first">
        <IonHeader>
          <IonToolbar className="new-background-color">
            <IonTitle>Filter Options</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
=======
          <IonButtons  slot="start">
	          <IonBackButton defaultHref="/home" style={{height: 'var(--min-height)', width: 'var(--min-width)', color: 'var(--light-blue-1)', display: 'block'}} />
          </IonButtons>
	        <IonTitle style={{padding: '22px', color: 'var(--light-blue-2)', textAlign: "left", fontSize: 24, height: '65px'}}>Symptoms</IonTitle>
          <IonPopover
            event={popoverState.event}
            isOpen={popoverState.showPopover}
            onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
          >
>>>>>>> 62651568fabb4d1f502ec1978784578a4ee8b175
            <IonItem>
              <IonLabel style={{fontWeight: 'bold'}}>Treatment Types</IonLabel>
              <IonSelect value={treatType} onIonChange={e => setTreatType(e.detail.value)}>
                <IonSelectOption value="all">All</IonSelectOption>
                <IonSelectOption value="psych">Psych and Seizeure</IonSelectOption>
                <IonSelectOption value="nutraceutical">Nutraceuticals</IonSelectOption>
                <IonSelectOption value="diet">Diets</IonSelectOption>
                <IonSelectOption value="therapies">Therapies</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel style={{fontWeight: 'bold'}}>Sort By:</IonLabel>
              <IonSelect value={sort} onIonChange={e => setSort(e.detail.value)}>
                <IonSelectOption value="overall">Best Overall</IonSelectOption>
                <IonSelectOption value="net">Net Benefit</IonSelectOption>
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
            <IonTitle size="large">Treatments for Symptoms</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SymptomList />
      </IonContent>
    </IonPage>
  );
};

export default Symptoms;