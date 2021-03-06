import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButtons, IonBackButton } from '@ionic/react';
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
          <IonButtons  slot="start">
			<IonBackButton  style={{height: 'var(--min-height)', width: 'var(--min-width)', color: 'var(--light-blue-1)', display: 'block'}} />
          </IonButtons>
		  <IonTitle style={{padding: '8px', color: 'var(--light-blue-1)', textAlign: "left", fontSize: 30, height: '65px'}}>Symptom {match.params.temp}</IonTitle>
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