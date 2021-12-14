# autism-treatment-app
ASU Capstone Autism Treatment Application

This app contains several different pages of information on different treatment options for autism. In this README, you will find an outline
of what pages contain what information, what issues remain to be resolved, and a general overview of how things work. Each of the team-edited
pages will contain comments describing the functions of each page in more depth.

Most of our work is within the /src folder. In /src/pages, you can find the various navigable pages of the app. When the app originally opens,
it starts at the /src/pages/Home page. From there, you can navigate to /src/pages/Treatments (which utilizes /src/pages/TreatmentsList),
/src/pages/Symptoms (utilizing /src/components/SymptomsList), /src/pages/Assessments, /src/pages/About, and /src/pages/AnrcGuide. When choosing
a treatment from the Treatments page, this will navigate to /src/pages/TreatmentPage, and choosing a symptom from /src/pages/Symptoms will direct
you to /src/pages/SymptomPage.

Some potential future implementations:
- improvements to the back button that appears on some pages
- filter button to change the sorting of treatments on the Symptoms page
