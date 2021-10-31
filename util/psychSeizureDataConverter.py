import pandas as pd

df = pd.read_csv('psychSeizureData.csv', encoding='ANSI', low_memory=False)
medList = []
medCategory = []
medSubCategory = []
definingDF = df.iloc[:,66:128]
definingDF.dropna(how='all', axis=1, inplace=True, thresh=20)
N = 9 #Word Number of the Med in the Column String
for columnName in definingDF.columns:
    medName = columnName.split('?')[0]
    medName = medName.split(' ')[N-1: len(medName)]
    medName = ' '.join(medName)
    medList.append(medName)
    medCategory.append("Psych or Seizure Medication")
    medSubCategory.append("Psych or Seizure Medication")
finalDataF = pd.DataFrame(medList, columns=['treatment'])
finalDataF['category'] = medCategory
finalDataF['sub category'] = medSubCategory
overallBenefit = []
for column in definingDF:
    overallBenefit.append(pd.to_numeric(definingDF[column], errors='coerce').mean(skipna=True))
   

overallBenefit = [round(num, 1) for num in overallBenefit]
finalDataF['overall benefit'] = overallBenefit

adverseDF = df.iloc[:,1741:1803]
adverseDF.dropna(how='all', axis=1, inplace=True, thresh=20)
overallAdverse = []
for column in adverseDF:
    overallAdverse.append(pd.to_numeric(adverseDF[column], errors='coerce').mean(skipna=True))
overallAdverse = [round(num, 1) for num in overallAdverse]
finalDataF['overall adverse'] = overallAdverse
#print(finalDataF)

symptomDFFirst = df.iloc[:,129:153]
symptomList = []
for columnName in symptomDFFirst.columns:
    symptomName = columnName.split(':')[0]
    if symptomName == "Sleep (falling asleep)":
        symptomName = "Falling Asleep"
    elif symptomName == "Sleep (staying asleep)":
        symptomName = "Staying Asleep"
    else:
        symptomName = symptomName.split(' ')[0]
    if symptomName[-1] == '/':
        symptomName = symptomName.rstrip(symptomName[-1])
    if symptomName == "Language":
        symptomName = "Communication"
    if symptomName == "Eczema":
        symptomName = "Skin problem"
    symptomList.append(symptomName)
symptomList.sort()
#print(symptomList)
numAnsweredPerTreat = definingDF.count().values.tolist()
numAnsweredPerTreatDict = dict(zip(medList, numAnsweredPerTreat))

symptomDFFull = df.iloc[:,129:1740]

for symptomName in symptomList:
    symptomPercentages = []
    for treatmentName in medList:
        symptomDFName = symptomDFFull.filter(regex="(?i)"+symptomName)
        symptomDFFiltered = symptomDFName.filter(regex=treatmentName)
        percentageBenefit = int(round((symptomDFFiltered.count()[0] / numAnsweredPerTreatDict[treatmentName])*100))
        percentageBenefit = str(percentageBenefit) + "%"
        symptomPercentages.append(percentageBenefit)
    finalDataF[symptomName] = symptomPercentages

#Add blank column to separate symptom benefits + symptom adverse
finalDataF[''] = ""
#print(finalDataF)
    
symptomAdverseDFFirst = df.iloc[:,1804:1829]
symptomAdverseList = []
for columnName in symptomAdverseDFFirst.columns:
    symptomName = columnName.split(':')[0]
    if "/" in symptomName:
        symptomName = symptomName.split('/')[0]
    if symptomName not in ["Weight gain", "Weight loss", "Loss of appetite", "Dry mouth"]:
        symptomName = symptomName.split(" ")[0]
    if symptomName == "Liver":
        symptomName = "Liver & Kidney"
    if symptomName == "Bedwetting":
        symptomName = "Bladder"
    symptomAdverseList.append(symptomName)
    symptomAdverseList.sort()
adverseDFFull = df.iloc[:,1804:3422]
#print(symptomAdverseList)

for symptomName in symptomAdverseList:
    if symptomName == "Liver & Kidney": #Change back the custom formatted & so that it can recognize the regex
        symptomName = "Liver"
    symptomPercentages = []
    for treatmentName in medList:
        symptomDFName = adverseDFFull.filter(regex="(?i)"+symptomName)
        symptomDFFiltered = symptomDFName.filter(regex=treatmentName)
        percentageAdverse = int(round((symptomDFFiltered.count()[0] / numAnsweredPerTreatDict[treatmentName])*100))
        percentageAdverse = str(percentageAdverse) + "%"
        symptomPercentages.append(percentageAdverse)
    finalDataF[symptomName+"A"] = symptomPercentages
#print(finalDataF)
finalDataF.to_csv("psychDataParsed.csv")