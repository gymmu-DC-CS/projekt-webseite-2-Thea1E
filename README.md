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
Als nächstes habe ich die Fragen und die Punkte der jeweiligen Antworten programmiert. Daüfr habe ich diese zwei Codeabschnitte kombiniert und angepasst. Meine Quizfragen habe ich selber erfunden und habe geschaut, dass jeder Charakter insgesamt 8 Punkte erreichen könnte, damit das Quiz ungefähr fair ist. Allerdings ist das sehr schweirig und auch wenn jeder Charakter nur maximal 8 Punkte erzielen kann, ist die Wahrscheinlichkeit ein gewisses Meerschweinchen zu bekommen leider nicht bei allen gleich hoch, weil es sehr schweirig ist ein quiz, das mit ihren Eigenschaften übereinstimmt, zu erfinden. ALlerdings habe ich das quiz später ausprobiert und festgestellt, dass wenn man die Eigenschaften von z.B. Columbus hat, man auch wirklich auf Columbus kommt - daher funktioniert das Quiz und man kann herausfinden, welches Meerschweinchen man ist, auch wenn das Quiz nicht perfekt ist.:
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
Danach habe ich diesen Abschnitt zum Definieren der aktuellen Frage in meinen eigenen Worte aufgeschrieben: 

let currentQuestion = 0;

Der nächste Abschnitt, den ChatGPT mir gegeben hat war sehr kompliziert. Nachdem ich ihn dann verstanden haben konnte ich den Code an meine Webseite anpassen. Das war der Originalcode:
function showQuestion() {


  const quiz = document.getElementById("quiz");


  quiz.innerHTML = "";

  let q = questions[currentQuestion];

  let questionEl = document.createElement("h2");
  questionEl.textContent = q.question;


  quiz.appendChild(questionEl);

  q.answers.forEach(answer => {


    let btn = document.createElement("button");
    btn.textContent = answer.text;


    btn.onclick = () => {

     
      for (let type in answer.points) {
        scores[type] += answer.points[type];
      }

      
      currentQuestion++;

      
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };

    
    quiz.appendChild(btn);
  });
}

Beim verstehen dieses Codes ist mir aufgefallen, dass ich die Funktion ResultatAnzeigen noch nicht definiert hatte und habe deswegen dann mit der Hilfe dieses Codes das gemacht.
function showResult() {

  quiz.innerHTML = ""; 

  let bestType = "";
  let bestScore = 0;

  for (let type in scores) {
    if (scores[type] > bestScore) {
      bestScore = scores[type];
      bestType = type;
    }
  }

  let resultText = document.createElement("h2");

  resultText.textContent = "Du bist: " + bestType;

  quiz.appendChild(resultText);
}

 Ich musste in diesem Code dann nur noch die Definiton der Varaibel quiz hinzufügen, weil die sonst jeweils nur innerhalb anderer Definitionen definiert wurde und deswegen für diese Funktion noch nicht definiert war. Ich habe quiz genau gleich definiert wie für die Funktio FrageAnzeigen, in dem ich diese Zeile hinzugefügt habe: 
  const quiz = document.getElementById("quiz");
Dabei habe ich jeweils immer die Id auf "quizjs" umgeändert, weil das meine Id im HTML war.

Als nächstes habe ich einen Code geschrieben für den Fall eines Gleichstands. Dafür hat mir ChatGPT diesen Codeabschnitt vorgeschlagen, die wichtigen Teilde davon, habe ich dann in meinen Codeblock zu der Funktion ReusltatAnzeigen hinzugefügt.
function ResultatAnzeigen(){
    const quiz = document.getElementById("quizjs");
    quiz.innerHTML = ""; 

    let bestType = [];
    let bestScore = -1; 

    for (let type in scores){
        if (scores[type] > bestScore){
            bestScore = scores[type];
            bestType = [type];
        }
        else if (scores[type] === bestScore){
            bestType.push(type);
        }
    }

    let resultText = document.createElement("h3");

    if(bestType.length === 1){
        resultText.textContent = "Du bist: " + bestType[0];
    } else {
        resultText.textContent = "Du bist entweder: " + bestType.join(" oder ");
    }

    quiz.appendChild(resultText);
}

Am Schluss habe ich dann noch einen Button erstellt um das Quiz zurückzuseetzen, damit man ihn auch mehrmals machen kann ohne die Seite jedes mal neu laden zu müssen. Dafür habe ich mich an diesem Code von ChatGPT orientiert:

function resetQuiz() {
  currentQuestion = 0;


  for (let type in scores) {
    scores[type] = 0;
  }

  showQuestion();
}


const resetBtn = document.createElement("button");

resetBtn.textContent = "Nochmal machen";

resetBtn.onclick = () => {
  resetQuiz();
};

quiz.appendChild(resetBtn);



CSS:

Fürs CSS habe ich zuerst die Verlinkung mit dem HTML gemacht. Ich habe die Codezeile dafür im Internet gefunden.
 <link rel="stylesheet" href="stylesheet.css">
 Webseite: https://www.ionos.de/digitalguide/websites/webdesign/css-in-html-einbinden/

Für das CSS im ganzen habe ich viel mit meinen Notizen von den Lektionen, die wir in der Schule zu KhanAcademy geschaut haben, gearbeitet und auch mit der folgenden Webseite: 
https://www.w3schools.com/css/default.asp

Um die Buttons programmieren zu können, musste ich im javascript einige classes erstellen, dabei hat mir diese Codezeil von ChatGpt geholfen:
resetBtn.classList.add("reset-btn");

Um den Buttons und den Fragen ein besseres Layout geben zu können, musste ich auch noch diesen Abschnitt hinzufügen. Da ich auf der w3schools webseite leider nichts dazu gefunden habe, habe ich auhc hier ChatGPT gefragt, der mir idesen Codeabschnitt wiedergab:
#quizjs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

Als nächstes musste ich die Position des "Zurücksetzen"-buttons ändern, weil dieser immer zwischen dem Titel und dem Quiz und nicht unter dem Quiz auftauchte. Ich habe ChatGPT gefragt woran das liegt und wei man das korrigiert und er hat mir erklärt, dass an der Position des reset-btn im Java Script lag. Dieser musste ich nämlich direkt im Abschnitt zum FrageAnzeigen und auch im ResultatAnzegien reinschreiben. Nach diesen Verbesserungen hat das Layout dann gestummen.

Für das Layout des Abschnitts Rassen habe ich dann mit der Hilfe von ChatGPT für jede Rasse einen <div>-container erstellt, damit das Bild und der Text jeder Rasse schön nebeneinander ist. Dabei musste in diesem <div>-container jeweils das Bild un ein weiter <div>-container für den Text eingefügt werden. Ich habe für die Erstellung der <div>-containers mit diesm Code von ChatGPT gearbeitet:
<div class="race">
    <img src="bild.jpg">
    <div class="text">
        <h3>Glatthaar</h3>
        <p>Beschreibung...</p>
    </div>
</div>
Ins CSS musste dann jeweils ein Code für den Container (als Ganzes), das Bild und den Titel eingefügt werden. Hier habe wiederum auch wieder mit von ChatGPT geschriebenen Code gearbeitet:
.race img {
    width: 180px;
    height: 130px;
    object-fit: cover;   /* verhindert Verzerrung */
    border-radius: 10px;
}

.race img {
    width: 180px;
    height: 130px;
    object-fit: cover;   /* verhindert Verzerrung */
    border-radius: 10px;
}
--> Ich habe für beide Codeabschnitte border-raidus weggelassen, weil ich keine runden Ecken haben wollte.

.race h3 {
    margin: 0;
}
