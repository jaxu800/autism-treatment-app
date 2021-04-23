import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButtons, IonBackButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import TreatmentList from './TreatmentList';
import './Tab2.css';

const Treatments: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <IonPage>
	  <IonHeader>
		<IonToolbar className="new-background-color">
		  <IonButtons  slot="start">
			<IonBackButton  style={{height: 'var(--min-height)', width: 'var(--min-width)', color: 'var(--light-blue-1)', display: 'block'}} />
          </IonButtons>
		  <IonTitle style={{padding: '2px', color: 'var(--light-blue-1)', textAlign: "left", fontSize: 20, height: '65px'}}>Treatment Options</IonTitle>
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
