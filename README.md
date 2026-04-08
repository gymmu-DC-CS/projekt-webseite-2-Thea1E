Planung:
Ziele:
Ich möchte...
- eine Webseite über Meerschweinchen programmieren.
- Abschnitte zu den Themen: Allgemeine Informationen, Nahrung, Haltung, Verhalten, Rassen und meine eigenen Meerschweinchen einbauen.
- Bilder benutzen, vor allem um die verscheidenen rassen vorzustellen und vielleicht auch im Abschnitt zu meinen eigenen Meerschweinchen 
- mit javascript einen "Welches Meerschweinchen ich?" - Test schreiben, in dem man Fragen über sich beantworten muss und dann einem gesagt wird welche meiner Meerschweinchen man ist (ich werde nicht jedes meiner Meerschwienchen einbauen, sondern nur eine kleine )




Quellen:
Informationen (reine Fakten der Webseite):
https://www.meerschweinchen-ratgeber.de/
Selbstgeschriebener Text für die Webseit von ChatGpt auf Rechtschreibung, Grammatik und Verständlichkeit korrigieren lassen.

Programmieren:
Prompt an Chatgpt um die Idee des Meerschweinchentest realistisch zu überprüfen:
"Kann man mit javascript einen Persönlichkeitstest programmieren, wenn ja, ist es einfach für Anfänger?"
--> Er antwortete mir, dass es eine sehr gute Idee war und gut möglich wäre.


JavaScript:
- Promt Chatgpt: "Erkläre mir Schritt für Schritt, wie man einen Art Personlichkeitstest mit Javascript programmiert. Der Test sollte aus mehreren Fragen bestehen und mehrere Lösungen haben."
Ich habe mehrmals nachgefagt um auch noch abzuklären, wie man es programmiertm um mehrere Resultate möglich sind und wie die Punkteverteilung genau funktioniert. 

Der erste Teil war für ins html: 
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Persönlichkeitstest</title>
</head>
<body>

  <h1>Persönlichkeitstest</h1>

  <div id="quiz"></div>
  <button id="nextBtn">Nächste Frage</button>

  <h2 id="result"></h2>

  <script src="script.js"></script>
</body>
</html>
Er hat mir das vogeshlagen, bis und mit dem <body>, stand alles sowieso schon in meinem html und ich konnte es daher auslassen. Ich habe dann die headings angpasst (z.B. aus h1 h2 gemacht) und auch herausgefunden, das der Button (der er mir vorgeschlagen hat zu programmieren) gebraucht wird um auf zur nächsten Frage weiterzuklicken, da ich aber wollte, das es automatisch weitergeht, habe ich den im html weggelassen und musste dafür später ein Teil im javascript umänderen (Chatgpt hat mir dafür auch den Code gegeben).
Als nächstes habe ich die Fragen und die Punkte der jeweiligen Antworten programmiert. Daüfr habe ich diese zwei Codeabschnitte kombiniert und angepasst:
const questions = [
  {
    question: "Was machst du am liebsten?",
    answers: [
      { text: "Mit Freunden ausgehen", type: "extro" },
      { text: "Alleine lesen", type: "intro" }
    ]
  },
  {
    question: "Wie verbringst du dein Wochenende?",
    answers: [
      { text: "Party!", type: "extro" },
      { text: "Zu Hause entspannen", type: "intro" }
    ]
  }
];

answers: [
  {
    text: "Ja",
    points: { typ2: 2, typ4: 1 }
  },
  {
    text: "Nein",
    points: { typ6: 2, typ7: 1 }
  }
]

Um die Punkte zu speichern hat Chatgpt mir diesen Code vorgeschlagen:
let scores = {
  extro: 0,
  intro: 0
};
Ich habe den Code angepasst indem ich meine mehrere Typen reingeschreiben habe anstatt sein Beipiel mit extro und intro.
