import { IonItem, IonLabel, IonItemGroup, IonRouterOutlet  } from '@ionic/react';

const TreatmentList: React.FC = (props) => {
    var treatments = ["treatment1", "treatment2", "treatment3", "treatment4"];
    return ( 
        <IonItemGroup>
            {
                treatments.map(elem => {
                    return(
                        <IonItem button href={"treatments/" + elem} onClick={() => {}} detail>
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
