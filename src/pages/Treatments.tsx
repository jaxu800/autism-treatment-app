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
<<<<<<< HEAD
        {/* //Make Firebase query in Treatments (here), get list of all treatments, send that as an array to props of TreatmentList
        //Also send Array of arrays that has symptoms and adverse  */}
=======

>>>>>>> 7f570af7be1e2b9d046d5c895ca22e25b3269c70
      </IonContent>
    </IonPage>
  );
};

export default Treatments;
