import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import SymptomContainer from '../components/SymptomContainer';
import { RouteComponentProps } from 'react-router';


interface symptomsDetailsProps extends RouteComponentProps<{
  temp: string;
}> {}

const SymptomPage: React.FC<symptomsDetailsProps> = ({match, history}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonTitle style={{color: '#E7EFF6', textAlign: "center", fontSize: 30, height: '65px'}}>Symptom: {match.params.temp}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="new-background-color-2">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Symptom: {match.params.temp}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SymptomContainer />
      </IonContent>
    </IonPage>
  );
};

export default SymptomPage;