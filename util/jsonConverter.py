import json
import csv

data_table = {}

with open('nutritionData.csv', mode='r') as data_file:
    csv_reader = csv.reader(data_file, delimiter=',')
    line_number = 0
    symptoms =  []
    adverse = []
    general = []
    data_table = {
        "treatments": {},
        "treatmentSymptoms": {},
        "treatmentAdverse": {}
    }
    tempTreatments = {}
    tempSymptoms = {}
    tempAdverse = {}
    for row in csv_reader:
        if line_number > 0:
            if(line_number == 1):
                for i in range(1,5):
                    general.append(row[i])
                for i in range(5, 29):
                    symptoms.append(row[i])
                for i in range(30, 55):
                    adverse.append(row[i])
            else:
                tempTreatments = {}
                tempTreatments[f"{row[0]}"] = {}
                for i in range(1,5):
                    tempTreatments[f"{row[0]}"][f"{general[i-1]}"] = row[i]
                tempSymptoms = {}
                tempSymptoms[f"{row[0]}"] = {}
                for i in range(5, 29):
                    tempSymptoms[f"{row[0]}"][f"{symptoms[i-5]}"] = row[i]
                tempAdverse = {}
                tempAdverse[f"{row[0]}"] = {}
                for i in range(30, 55):
                    tempAdverse[f"{row[0]}"][f"{adverse[i-30]}"] = row[i]
        line_number += 1
        data_table["treatments"].update(tempTreatments)
        data_table["treatmentSymptoms"].update(tempSymptoms)
        data_table["treatmentAdverse"].update(tempAdverse)

json_data = json.dumps(data_table, indent=4)
with open('nutritionData.json', 'w') as outfile:
    outfile.write(json_data)
    outfile.close()