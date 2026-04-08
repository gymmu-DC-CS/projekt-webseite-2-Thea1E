const fragen = [
    {frage: "Hast du schnell Angst?",
        antwort: [
            {text: "Ja", 
                points: {Oakley: 2, Poppy: 1}},
            {text: "Nein",
                points:{}}
        ]
    },
    {frage: "Bist du eine sture Person?",
        antwort: [
            {text: "Ja",
                points: {Lily: 1, Holly: 1, Mopsy: 1, Phoebe: 1}},
            {text: "Nein",
                points:{}}
        ]
    },
    {frage: "In der eigenen Welt sein",
        antwort: [
            {text: "Ja",
                points: {Lily: 1, Mopsy: 2, Oakley:1, Phoebe: 1}},
            {text: "Nein",
                points: {}}
        ]
     },
     {frage: "Bist du leicht bestechbar?",
        antwort: [
            {text: "Ja",
                points: {Holly: 1, Emma: 1, Ella: 1, Lily: 1, Columbus: 1, Phoebe: 1, Poppy: 1}},
            {text: "Nein",
                points: {Oakley: 1, Hazel: 1}}
        ]
     },
     {frage: "Hast du lange Haare?",
        antwort: [
            {text: "Ja",
                points: {Oakley: 1, Mopsy: 1, Phoebe: 1}},
            {text: "Nein",
                points: {Ella: 1, Emma: 1, Lily: 1, Columbus: 1, Holly: 1, Hazel:1, Poppy: 1}}
            ]
     },
     {frage: "Hast du ein gutes Orientierungsgefühl?",
        antwort: [
            {text: "Ja",
                points: {Hazel: 3, Ella: 2, Holly: 1, Emma: 1}},
            {text: "Nein",
                points: {Oakley: 1, Mopsy: 1, Phoebe: 1}}
        ]
     },
     {frage: "Bist du eine selbstsichere Person?",
        antwort: [
            {text: "Ja",
                points: {Columbus: 1, Holly: 1}},
            {text: "Nein",
                points: {}}
        ]
     },
     {frage: "Sind deine Emotionen anhand deiner Gesichtsausdrücke gut erkennbar?",
        antwort: [
            {text: "Ja",
                points: {Holly: 1}},
            {text: "Nein",
                points: {}}
        ]
     },
     {frage: "Welches dieser Gemüsesorten magst du am meisten?",
        antwort: [
            {text: "Karotten",
                points: {Poppy: 1}},
            {text: "Fenchel",
                    points: {Lily: 1}},
            {text: "Gurke",
                        points: {Emma: 1, Ella: 1, Phoebe: 1}}
        ]
     },
     {frage: "Was machst du, wenn du ein Problem hast?",
        antwort: [
            {text: "Ich verstecke mich, damit keiner merkt, dass ich ein Problem habe.",
                points: {Oakley: 1, Lily: 1}},
            {text: "Ich hole mir bei einem Freund / einer Freundin Hilfe.",
                points: {Emma: 1, Poppy:1}},
            {text:"Ich ignoriere das Problem und hoffe, dass es verschwindet.",
                points: {Mopsy: 1, Phoebe: 1}},
            {text: "Ich gebe nicht auf und probiere so viele male das Problem zu lösen, bis es funktioniert.",
                points: {Holly: 1, Columbus: 1}},
            {text: "Ich löse es innerhalb 5 Sekunden sowieso.",
                points: {Ella: 1, Hazel: 1}}
        ]
     },
     {frage: "Bist du eine sportliche Person?",
        antwort: [
            {text: "Ja",
                points: {Hazel: 2, Ella: 2, Holly: 1}},
            {text: "Ich bin davon überzeugt, aber es stimmt wahrscheinlich nicht.",
                points: {Poppy: 1, Columbus: 1, Lily: 1, Mopsy: 1}},
            {text: "Nein",
                points: {}}
        ]
     },
     {frage: "Was machst du, wenn es jemandem in deinem Umfeld nicht so gut geht?",
        antwort: [
            {text: "Ich gehe zu Ihnen und bleibe stets an ihrer Seite, damit sie wiessen das ich für sie da bin.",
                points: {Emma: 3, Columbus: 2, Poppy: 1}},
            {text: "Ich lasse sie in Ruhe, damit sie etwas Zeit für sich haben können.",
                points: {Phoebe: 1}},
            {text: "Ich merke wahrscheinlich gar nicht erst, dass es ihnen schlecht geht.",
                points: {Mopsy: 1, Oakley: 1}}
        ]
     }
];


let scores = {
    Columbus: 0,
    Ella: 0,
    Emma: 0,
    Hazel: 0,
    Holly: 0,
    Lily: 0,
    Mopsy: 0,
    Oakley: 0,
    Phoebe: 0,
    Poppy: 0
};