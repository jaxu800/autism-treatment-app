import { IonContent, IonHeader, 
  IonPage, IonTitle, 
  IonToolbar, IonList, 
  IonCardHeader, IonCard, 
  IonCardContent, IonCardSubtitle, 
  IonCardTitle, IonIcon,
} from '@ionic/react';
import './Tab1.css';
import { book, medkit, home } from 'ionicons/icons';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonTitle style={{color: '#E7EFF6', textAlign: "center", fontSize: 24, height: '65px'}}>Autism Treatments</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="new-background-color-2">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList style={{backgroundColor: '#E7EFF6'}}>
          <IonCard href="/treatments" style={{backgroundColor: '#ADCBE3'}}>
            <img style={{opacity: 0.5}} src="https://s3-us-west-2.amazonaws.com/seniornews/wp-content/uploads/2017/07/doctor-advice-730x400.jpg"></img>
            <IonCardHeader>
              <IonCardTitle>Treatment Ratings</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{color: '#303030'}}>
              Check ratings for different treatments
            </IonCardContent>
          </IonCard>

          <IonCard href="/symptoms" style={{backgroundColor: '#ADCBE3'}}>
            <img style={{opacity: 0.5}} src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></img>
            <IonCardHeader>
              <IonCardTitle>Top Treatments</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{color: '#303030'}}>
              Check the top treatments for different symptoms.
            </IonCardContent>
          </IonCard>

          <IonCard href="/anrc" style={{backgroundColor: '#ADCBE3'}}>
          <img style={{opacity: 0.5}} src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG51dHJpdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"></img>
            <IonCardHeader>
              <IonCardTitle> ANRC Guidelines </IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{color: '#303030'}}>
              Read about the nutritional guidelines from the Autism Nutritional Research Center.
            </IonCardContent>
          </IonCard>

          <IonCard href="/assmt" style={{backgroundColor: '#ADCBE3'}}>
            <img style={{opacity: 0.5}} src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></img>
            <IonCardHeader>
              <IonCardTitle style={{fontSize: 19}}>Symptom Assessments</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{color: '#303030'}}>
			  Find some different autism symptom assessments here.
            </IonCardContent>
          </IonCard>

          <IonCard href="/add" style={{backgroundColor: '#ADCBE3'}}>
            <img style={{opacity: 0.5}} src="https://cdn.jwa.org/sites/default/files/mediaobjects/raising_hand.jpg"></img>
            <IonCardHeader>
              <IonCardTitle>Additional Information</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{color: '#303030'}}>
              For additional information tap here
            </IonCardContent>
          </IonCard>
            
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;


