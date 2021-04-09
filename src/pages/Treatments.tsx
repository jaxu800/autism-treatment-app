import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TreatmentList from '../components/TreatmentList';
import './Tab2.css';

const Treatments: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color" style={{height: '36px'}}>
          <IonTitle style={{color: '#E7EFF6', fontSize: 12}}>Autism Treatments</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonTitle style={{color: '#E7EFF6', textAlign: "center", fontSize: 24}}>Treatment Options</IonTitle>
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
