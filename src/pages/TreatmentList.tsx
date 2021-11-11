import { IonItem, IonLabel, IonItemGroup } from '@ionic/react';
import { getDatabase, ref, onValue } from 'firebase/database'

function getTreatmentList() {
  var treatmentList:string[] = []
  const database = getDatabase()
  const dbRef = ref(database, 'treatments');
  onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      var key = childSnapshot.key;
      treatmentList.push(String(childSnapshot.key));
    })
  });
  return treatmentList;
}

const TreatmentList: React.FC = () => {
    
    //var treatments = ["5-HTP", "Biotin", "Blend of Amino Acids", "Calcium", "Carntine", "Chromium", "CoQ10", "Cod Liver Oil", "DMG", "Glutamine", "Iron", "Iodine", "Melatonin", "Omega 3", "Potassium", "Taurine", "Vitamin D", "Zinc"];
    var treatments = getTreatmentList();
    return ( 
      <IonItemGroup>
        {
          treatments.map(elem => {
            return(
              <IonItem className="new-background-color-2" button href={"treatments/" + elem} onClick={() => {}} detail>
                <IonLabel style={{color: 'black'}}>
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
