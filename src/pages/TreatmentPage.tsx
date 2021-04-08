import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonBackButton, IonButtons } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import TreatmentContainer from '../components/TreatmentContainer';
import './Tab2.css';


interface treatmentDetailsProps extends RouteComponentProps<{
  temp: string;
}> {}

const TreatmentPage: React.FC<treatmentDetailsProps> = ({match, history}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{match.params.temp}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Treatment</IonTitle>
          </IonToolbar>

        </IonHeader>
        <div className="treatmentcontainer">
          <strong>Treatment Page</strong>
          <p>Graph Goes Here</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TreatmentPage;