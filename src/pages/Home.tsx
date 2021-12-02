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
          <IonTitle style={{color: 'var(--light-blue-1)', textAlign: "center", fontSize: 24, height: '65px'}}>Autism Treatments</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="new-background-color-2">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList style={{backgroundColor: 'var(--light-blue-1)'}}>
          <IonCard href="/treatments" style={{backgroundColor: 'white'}}>
            {/*<img src="https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710152_1280.jpg"></img>*/}
            <img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80"></img>
            <IonCardHeader>
              <IonCardTitle style={{textAlign: 'center', fontSize: 17, color: 'black', fontWeight: 'bold'}}>Treatment Types</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{color: 'var(--dark-gray)'}}>
              View information on various psychiatric medications, nutritional supplements, diets, and therapies
            </IonCardContent>
          </IonCard>

          <IonCard href="/symptoms" style={{backgroundColor: 'white'}}>
            <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGlsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
            <IonCardHeader>
              <IonCardTitle style={{textAlign: 'center', fontSize: 17, color: 'black', fontWeight: 'bold'}}>Symptom Search</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{color: 'var(--dark-gray)'}}>
              Find the top treatments for different symptoms here
            </IonCardContent>
          </IonCard>

          <IonCard href="/anrc" style={{backgroundColor: 'white'}}>
          <img src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG51dHJpdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"></img>
            <IonCardHeader>
              <IonCardTitle style={{textAlign: 'center', fontSize: 17, color: 'black', fontWeight: 'bold'}}> ANRC Guidelines </IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{color: 'var(--dark-gray)'}}>
              Read about the nutritional guidelines from the Autism Nutrition Research Center
            </IonCardContent>
          </IonCard>

          <IonCard href="/assmt" style={{backgroundColor: 'white'}}>
            <img src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></img>
            <IonCardHeader>
              <IonCardTitle style={{textAlign: 'center', fontSize: 17, color: 'black', fontWeight: 'bold'}}>Symptom Questionnaires</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{color: 'var(--dark-gray)'}}>
			  Find some different autism symptom assessments here
            </IonCardContent>
          </IonCard>

          <IonCard href="/add" style={{backgroundColor: 'white'}}>
            <img src="https://cdn.pixabay.com/photo/2018/06/12/15/08/question-mark-3470783__480.jpg"></img>
            <IonCardHeader>
              <IonCardTitle style={{textAlign: 'center', fontSize: 17, color: 'black', fontWeight: 'bold'}}>Additional Information</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{color: 'var(--dark-gray)'}}>
              For additional information tap here
            </IonCardContent>
          </IonCard>
            
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;


