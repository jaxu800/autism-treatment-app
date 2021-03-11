import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import TreatmentContainer from '../components/TreatmentContainer';

const TreatmentPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Treatment X</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Treatment X</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TreatmentContainer />
      </IonContent>
    </IonPage>
  );
};

export default TreatmentPage;