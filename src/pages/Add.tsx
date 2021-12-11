import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import './Add.css';

const Add: React.FC = () => {
  return (
    <IonPage>
      {/*Back button and Header*/}
      <IonHeader>
        <IonToolbar className="new-background-color">
		  <IonButtons  slot="start">
			<IonBackButton  style={{height: 'var(--min-height)', width: 'var(--min-width)', color: 'var(--light-blue-1)', display: 'block'}} />
          </IonButtons>
		  <IonTitle style={{padding: '0px', color: 'var(--light-blue-1)', textAlign: "left", fontSize: 18, height: '65px'}}>Additional Information</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      {/*Text can be inputted in this area*/}
      <IonContent fullscreen className="new-background-color-2">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Additional Information</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Add;