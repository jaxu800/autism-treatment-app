import { IonItem, IonLabel, IonItemGroup, IonRouterOutlet  } from '@ionic/react';

const TreatmentList: React.FC = (props) => {
    var treatments = ["Treatment 1", "Treatment 2", "Treatment 3", "Treatment 4"];
    return ( 
      <IonItemGroup>
        {
          treatments.map(elem => {
            return(
              <IonItem className="new-background-color-1" button href={"treatments/" + elem} onClick={() => {}} detail>
                <IonLabel>
                  {elem}
                </IonLabel>
              </IonItem>
            )
        })
      }
      </IonItemGroup>
    );
  };
  
  export default TreatmentList;
