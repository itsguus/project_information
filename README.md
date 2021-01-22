# Project Information
Live on [this link](https://corona-criminaliteit.nl/).

## Opdracht
Werk een interactieve visual story uit over het Coronavirus. De story heeft een focus op visual storytelling en komt vanuit een creatieve unieke invalshoek waarmee we betrokkenheid bij de kijker genereren. De data die we gebruiken is van het CBS.

## main
Ik heb de static site generator [Jekyll](https://jekyllrb.com/) gebruikt om te coderen. 

## Data
Alle data die ik heb gebruikt komt van de politie.. 

### **Dataset:** [Geregistreerde misdrijven en aangiften; soort misdrijf, gemeente](https://data.politie.nl/?dl=434E4#/Politie/nl/dataset/47013NED/table)

De barcharts die zijn gemaakt zijn HTML elementen, met een height van 100%, en een max-height die met Liquid berekend wordt. 

## Installatie
Navigaar naar de gewenste directory. Zet de volgende code in je terminal.
```
git clone https://github.com/itsguus/project-information

cd project-information

npm install

jekyll serve
```
De site staat nu lokaal op 127.0.0.1:4000
