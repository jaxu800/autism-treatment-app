import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import './AnrcGuide.css';

const AnrcGuide: React.FC = () => {
  return (
    <IonPage>
      {/*Back button and Header*/}
      <IonHeader>
        <IonToolbar className="new-background-color">
          <IonButtons  slot="start">
			<IonBackButton  style={{height: 'var(--min-height)', width: 'var(--min-width)', color: 'var(--light-blue-1)', display: 'block'}} />
          </IonButtons>
		  <IonTitle style={{padding: '0px', color: 'var(--light-blue-1)', textAlign: "left", fontSize: 22, height: '65px'}}>ANRC Guidelines</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      {/*Text can be inputted in this area*/}
      <IonContent fullscreen className="new-background-color-2">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ANRC Guidelines</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default AnrcGuide;