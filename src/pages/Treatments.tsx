import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import TreatmentList from './TreatmentList';
import './Tab2.css';

const Treatments: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Treatments + Ratings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Treatments + Ratings</IonTitle>
          </IonToolbar>
        </IonHeader>

        <TreatmentList />

      </IonContent>
    </IonPage>
  );
};

export default Treatments;
