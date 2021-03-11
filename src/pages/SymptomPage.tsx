import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import SymptomContainer from '../components/SymptomContainer';

const SymptomPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Symptom X</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Symptom</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SymptomContainer />
      </IonContent>
    </IonPage>
  );
};

export default SymptomPage;