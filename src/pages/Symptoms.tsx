import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonMenu, IonSelect, IonSelectOption, IonList, IonLabel, IonItem } from '@ionic/react';
import SymptomList from '../components/SymptomList';
import './Tab3.css';
import {star} from 'ionicons/icons';

const Symptoms: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonButtons  slot="start">
	          <IonBackButton defaultHref="/home" style={{height: 'var(--min-height)', width: 'var(--min-width)', color: 'var(--light-blue-1)', display: 'block'}} />
          </IonButtons>
	        <IonTitle style={{padding: '2px', color: 'var(--light-blue-1)', textAlign: "left", fontSize: 24, height: '65px'}}>Symptoms</IonTitle>
          <IonButton slot="end" color="dark-blue-1" fill="clear">
            <IonIcon slot="icon-only" icon={star} color="light-blue-1" />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonMenu side="start" menuId="first">
        <IonHeader>
          <IonToolbar className="new-background-color">
            <IonTitle>Filter Options</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel>Treatment Type</IonLabel>
              <IonSelect value="all">
                <IonSelectOption value="all">All</IonSelectOption>
                <IonSelectOption value="pharmaceuticals">Pharmaceuticals</IonSelectOption>
                <IonSelectOption value="nutraceuticals">Nutraceuticals</IonSelectOption>
                <IonSelectOption value="therapies">Therapies</IonSelectOption>
                <IonSelectOption value="diets">Diets</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Sort By</IonLabel>
              <IonSelect value="overall">
                <IonSelectOption value="overall">Best Overall (include negative effects)</IonSelectOption>
                <IonSelectOption value="benefit">Biggest Benefit (ignore negative effects)</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonContent fullscreen className="new-background-color-2">
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
