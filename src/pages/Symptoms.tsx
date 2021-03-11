import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SymptomList from '../components/SymptomList';
import './Tab3.css';

const Symptoms: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Treatments for Symptoms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
