import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import TreatmentList from './TreatmentList';
import './Tab2.css';

const Treatments: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonTitle style={{color: '#E7EFF6', textAlign: "center", fontSize: 24, height: '65px'}}>Treatment Options</IonTitle>
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
