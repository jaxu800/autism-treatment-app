import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TreatmentList from '../components/TreatmentList';
import './Tab2.css';

const Treatments: React.FC = () => {
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
        {/* //Make Firebase query in Treatments (here), get list of all treatments, send that as an array to props of TreatmentList
        //Also send Array of arrays that has symptoms and adverse  */}
      </IonContent>
    </IonPage>
  );
};

export default Treatments;
