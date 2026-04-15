Planung:
Ziele:
Ich möchte...
- eine Webseite über Meerschweinchen programmieren.
- Abschnitte zu den Themen: Allgemeine Informationen, Nahrung, Haltung, Verhalten, Rassen und meine eigenen Meerschweinchen einbauen.
- Bilder benutzen, vor allem um die verschiedenen Rassen vorzustellen.
- mit javascript einen "Welches Meerschweinchen bin ich?" - Test schreiben, in dem man Fragen über sich beantworten muss und dann einem gesagt wird, welcher meiner Meerschweinchen man ist (ich werde nicht jedes meiner Meerschwienchen einbauen, sondern nur eine Auswahl )




Quellen:
Informationen:
https://www.meerschweinchen-ratgeber.de/
https://www.tierchenwelt.de/nagetiere/1039-meerschweinchen.html#:~:text=Table_title:%20Steckbrief%20Meerschweinchen%20Table_content:%20header:%20%7C%20Gr%C3%B6%C3%9Fe,Feinde%20%7C%2020%2D35%20cm:%20W%C3%B6lfe%2C%20Schlangen%20%7C 

Selbstgeschriebener Text für die Webseite wurde von ChatGPT auf Rechtschreibung, Grammatik und Verständlichkeit korrigiert

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
Er hat mir das vorgeschlagen, bis und mit dem <body>, stand alles sowieso schon in meinem html und ich konnte es daher auslassen. Ich habe dann die Headings angepasst (z.B. aus h1 h2 gemacht) und auch herausgefunden, dass der Button (den er mir vorgeschlagen hat zu programmieren) gebraucht wird um zur nächsten Frage weiterzuklicken, da ich aber wollte, das es automatisch weitergeht, habe ich den im html weggelassen und musste dafür später ein Teil im javascript umänderen (Chatgpt hat mir dafür auch den Code gegeben).
Als nächstes habe ich die Fragen und die Punkte der jeweiligen Antworten programmiert. Dafür habe ich diese zwei Codeabschnitte kombiniert und angepasst. Meine Quizfragen habe ich selber erfunden und habe geschaut, dass jeder Charakter insgesamt 8 Punkte erreichen könnte, damit das Quiz ungefähr fair ist. Allerdings ist das sehr schweirig und auch wenn jeder Charakter nur maximal 8 Punkte erzielen kann, ist die Wahrscheinlichkeit ein gewisses Meerschweinchen zu bekommen leider nicht bei allen gleich hoch, weil es sehr schweirig ist ein Quiz, das mit ihren Eigenschaften übereinstimmt, zu erfinden. Allerdings habe ich das Quiz später ausprobiert und festgestellt, dass wenn man die Eigenschaften von z.B. Columbus hat, man auch wirklich auf Columbus kommt - daher funktioniert das Quiz und man kann herausfinden, welches Meerschweinchen man ist, auch wenn das Quiz nicht perfekt ist.

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

Ich habe den Code angepasst indem ich meine mehreren Type reingeschreiben habe anstatt sein Beipiel mit extro- und introvertiert.
Danach habe ich diesen Abschnitt zum Definieren der aktuellen Frage in meinen eigenen Worte aufgeschrieben: 

let currentQuestion = 0;

Der nächste Abschnitt, den ChatGPT mir gegeben hat war sehr kompliziert. Nachdem ich ihn dann verstanden habe konnte ich den Code an meine Webseite anpassen (ich habe dabei vor allem Namen von Funktionen etc. umgeändert, damit sie besser passen).
Das war der Originalcode:

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

Beim Verstehen dieses Codes ist mir aufgefallen, dass ich die Funktion ResultatAnzeigen noch nicht definiert hatte und habe deswegen dann mit der Hilfe dieses Codes (auch von ChatGPT) das gemacht:

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

 Ich musste in diesem Code dann nur noch die Definiton der Variabel "quiz" hinzufügen, weil die sonst jeweils nur innerhalb anderer Definitionen definiert wurde und deswegen für diese Funktion noch nicht definiert war. Ich habe "quiz" genau gleich definiert wie für die Funktion FrageAnzeigen, in dem ich diese Zeile hinzugefügt habe: 

  const quiz = document.getElementById("quiz");

Dabei habe ich jeweils immer die Id auf "quizjs" umgeändert, weil das meine Id im HTML war.

Als nächstes habe ich einen Code geschrieben für den Fall eines Gleichstands. Dafür hat mir ChatGPT diesen Codeabschnitt vorgeschlagen, die wichtigen Teile davon, habe ich dann in meinen Codeblock zu der Funktion ReusltatAnzeigen hinzugefügt.

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


Am Schluss habe ich dann noch einen Button erstellt, um das Quiz zurückzuseetzen, damit man ihn auch mehrmals machen kann ohne die Seite jedes mal neu laden zu müssen. Dafür habe ich mich an diesem Code von ChatGPT orientiert:

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

Für das CSS im Ganzen habe ich viel mit meinen Notizen von den Lektionen, die wir in der Schule zu KhanAcademy gemacht haben, gearbeitet und auch mit der folgenden Webseite: 
https://www.w3schools.com/css/default.asp


Um die Buttons programmieren zu können, musste ich im javascript einige classes erstellen, dabei hat mir diese Codezeil von ChatGpt geholfen:

resetBtn.classList.add("reset-btn");

Um den Buttons und den Fragen ein besseres Layout geben zu können, musste ich auch noch diesen Abschnitt hinzufügen. Da ich auf der w3schools Webseite leider nichts dazu gefunden habe, habe ich auch hier ChatGPT gefragt, der mir diesen Codeabschnitt wiedergab:

#quizjs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

Als nächstes musste ich die Position des "Zurücksetzen"-buttons ändern, weil dieser immer zwischen dem Titel und dem Quiz und nicht unter dem Quiz auftauchte. Ich habe ChatGPT gefragt woran das liegt und wie man das korrigiert und er hat mir erklärt, dass es an der Position des reset-btn im Java Script lag. Dieser musste ich nämlich direkt im Abschnitt zum FrageAnzeigen und auch im ResultatAnzegien reinschreiben. Nach diesen Verbesserungen hat das Layout dann gestummen.

Für das Layout des Abschnitts Rassen habe ich dann mit der Hilfe von ChatGPT für jede Rasse einen <div>-container erstellt, damit das Bild und der Text jeder Rasse schön nebeneinander ist. Dabei musste in diesem <div>-container jeweils das Bild un ein weiterer <div>-container für den Text eingefügt werden. Ich habe für die Erstellung der <div>-containers mit diesm Code von ChatGPT gearbeitet:

<div class="race">
    <img src="bild.jpg">
    <div class="text">
        <h3>Glatthaar</h3>
        <p>Beschreibung...</p>
    </div>
</div>


Ins CSS musste dann jeweils ein Code für den Container (als Ganzes), das Bild und den Titel eingefügt werden. Hier habe ich wiederum auch wieder mit von ChatGPT geschriebenen Code gearbeitet:

.race {
    display: flex;        
    gap: 20px;           
    background: #f5f5f5;  
    padding: 15px;        
    margin: 15px 0;       
    border-radius: 12px;  
}

.race img {
    width: 180px;
    height: 130px;
    object-fit: cover;   
    border-radius: 10px;
}
--> Ich habe für beide Codeabschnitte border-raidus weggelassen, weil ich keine runden Ecken haben wollte. Ich habe auch den Code zum background nicht mitgeschrieben, weil ich den in der Farbe der Webseite haben wollte.

.race h3 {
    margin: 0;
}
