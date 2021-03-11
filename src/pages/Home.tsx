import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import './Tab1.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Autism Treatments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem href="/anrc">
            <IonLabel>ANRC Guidelines for Nutritional Support</IonLabel>
          </IonItem>
          <IonItem href="/assmt">
            <IonLabel>Symptom Assessments</IonLabel>
          </IonItem>
          <IonItem href="/add">
            <IonLabel>Additional Information</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
