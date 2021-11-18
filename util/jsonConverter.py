import json
import csv

data_table = {}

with open('fullData.csv', mode='r') as data_file:
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
                for i in range(1,6):
                    general.append(row[i])
                for i in range(6, 30):
                    symptoms.append(row[i])
                for i in range(31, 56):
                    adverse.append(row[i])
            else:
                #Because Firebase does not allow keys with '/' in them, we have to replace them with either a blank (in the case when its and/or), or "or", when it's just two equivalent items
                treatmentName = row[0]
                foundSlash = treatmentName.find("/")
                if(foundSlash != -1):
                    treatmentName = treatmentName.replace("/", " or ")
                tempTreatments = {}
                tempTreatments[f"{treatmentName}"] = {}
                for i in range(1,6):
                    tempTreatments[f"{treatmentName}"][f"{general[i-1]}"] = row[i]
                tempSymptoms = {}
                tempSymptoms[f"{treatmentName}"] = {}
                for i in range(6, 30):
                    columnName = symptoms[i-6]
                    indexOfSlash = columnName.find("/")
                    if(indexOfSlash != -1):
                        if(columnName[indexOfSlash + 1] == 'o' and columnName[indexOfSlash + 2] == 'r'):
                            columnName = columnName.replace("/", " ")
                        else:
                            columnName = columnName.replace("/", " or ")
                    tempSymptoms[f"{treatmentName}"][f"{columnName}"] = row[i]
                tempAdverse = {}
                tempAdverse[f"{treatmentName}"] = {}
                for i in range(31, 56):
                    columnName = adverse[i-31]
                    indexOfSlash = columnName.find("/")
                    if(indexOfSlash != -1):
                        if(columnName[indexOfSlash + 1] == 'o' and columnName[indexOfSlash + 2] == 'r'):
                            columnName = columnName.replace("/", " ")
                        else:
                            columnName = columnName.replace("/", " or ")
                    tempAdverse[f"{treatmentName}"][f"{columnName}"] = row[i]
        line_number += 1
        data_table["treatments"].update(tempTreatments)
        data_table["treatmentSymptoms"].update(tempSymptoms)
        data_table["treatmentAdverse"].update(tempAdverse)

json_data = json.dumps(data_table, indent=4)
with open('fullData.json', 'w') as outfile:
    outfile.write(json_data)
    outfile.close()