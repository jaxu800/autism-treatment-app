import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import SymptomContainer from '../components/SymptomContainer';

const SymptomPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonTitle style={{color: '#E7EFF6', textAlign: "center", fontSize: 30, height: '65px'}}>Symptom X</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="new-background-color-2">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Symptom X</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SymptomContainer />
      </IonContent>
    </IonPage>
  );
};

export default SymptomPage;