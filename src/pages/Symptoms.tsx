import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import SymptomList from '../components/SymptomList';
import './Tab3.css';

const Symptoms: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color">
		  <IonTitle style={{padding: '2px', color: 'var(--light-blue-1)', textAlign: "center", fontSize: 24, height: '65px'}}>Symptoms</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="new-background-color-1">
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
