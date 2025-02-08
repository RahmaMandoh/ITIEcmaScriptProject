let questions = [];
let currentIndex = 0;
let QuizQuestions = [];

class QuizQuestion {
  constructor(question, choices, correctAnswer) {
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
  }}

    // Fetch questions from the JSON file
    fetch('../eqs.json')
      .then(response => response.json())
      .then(data => {
        // Shuffle questions
        questions = data.sort(() => Math.random() - 0.5);
        // here to create objects for questions
        questions.forEach(e => {
          let q = new QuizQuestion(e.question,e.choices,e.correctAnswer);
          QuizQuestions.push(q);
        });
          console.log(QuizQuestions);

        buildQuestions();
        startCountdown(3 * 60);
      })
      .catch(error => console.error('Error loading questions:', error));

    // 
    function buildQuestions() {
        const Container = document.querySelector('.question-container')
        const questionElement = questions.map((ele,index)=>{
            const questionHeading = ele.question ;
            const choices = questions[index].choices.map((choice, i) =>
            `<label>
                <input type="radio" name="question${index}" value="${i}">
                ${choice}
            </label>`).join("");
            return `<div class="question hide" id="question${index}"><i class="fa-regular fa-flag myflag" id="${index}flag"></i><h4>${questionHeading}</h4><div class="choices">${choices}</div></div>`;
        }).join("");
         

            Container.innerHTML = questionElement;
            document.getElementById(`question${currentIndex}`).classList.toggle('hide');


      // Enable/disable buttons based on the current index
      document.getElementById('prev').disabled = currentIndex === 0;
      document.getElementById('next').disabled = currentIndex === questions.length - 1;
    }

    // Add event listeners for the buttons
    document.getElementById('prev').addEventListener('click', () => {
        if (currentIndex > 0) {            
          document.getElementById(`${currentIndex}`).classList.toggle('selected-tab');
          document.getElementById(`question${currentIndex}`).classList.toggle('hide');
          
          currentIndex--;
          
          document.getElementById(`question${currentIndex}`).classList.toggle('hide');
          document.getElementById(`${currentIndex}`).classList.toggle('selected-tab');
      }
    });

    document.getElementById('next').addEventListener('click', () => {
        
        if (currentIndex < questions.length - 1) {
            document.getElementById(`${currentIndex}`).classList.remove('selected-tab');
            document.getElementById(`question${currentIndex}`).classList.toggle('hide');
            
            currentIndex++;
            
            document.getElementById(`question${currentIndex}`).classList.toggle('hide');
            document.getElementById(`${currentIndex}`).classList.add('selected-tab');

      }
    });

    function startCountdown(durationInSeconds) {
      const timerSpan = document.querySelector("#exam-time span");
      let remainingTime = durationInSeconds;

      const intervalId = setInterval(() => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        // Update the span with the formatted time
        timerSpan.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        //change the color of it
        if (remainingTime === 30) {
          timerSpan.style.color = "red";
        }

        // If the countdown reaches zero, stop the timer and show an alert
        if (remainingTime === 0) {
          clearInterval(intervalId);
          // alert("Time's up!");
          window.location.replace("../pages/timeout.html");
        }

        remainingTime--;
      }, 1000)
    }

    //navigating from the tabs
    const tabsContainer = document.querySelector(".tabs");
    console.log(tabsContainer);
    
    // Add a click event listener to the parent div
    tabsContainer.addEventListener("click", (event) => {
      // Check if the clicked element is a child with the class "tab"
      
      if (event.target.classList.contains("tab")) {
        const clickedTabId = event.target.id; // Get the id of the clicked tab
        console.log(`Clicked Tab ID: ${clickedTabId}`);

            document.getElementById(`${currentIndex}`).classList.remove('selected-tab');
            document.getElementById(`question${currentIndex}`).classList.toggle('hide');
            
            currentIndex = clickedTabId;
            
            document.getElementById(`question${currentIndex}`).classList.toggle('hide');
            document.getElementById(`${currentIndex}`).classList.add('selected-tab');

      }
    });

    //handling flag
    //<i class="fa-regular fa-flag myflag" id="${index}flag"></i>
    //<i class="fa-solid fa-flag"></i>
    document.querySelector('.question-container').addEventListener('click',function(e){
      if (e.target.tagName === "I" && e.target.classList.contains("fa-flag")) {
        const icon = e.target;
        const iconId = parseInt(e.target.id);
        console.log("icon clicked " + iconId);
        if (icon.classList.contains("fa-regular")) {
          icon.classList.remove("fa-regular");
          icon.classList.add("fa-solid");
          //select the tab
          document.getElementById(`${iconId}`).classList.add('flagged-tab');
          
        }else{
          icon.classList.remove("fa-solid");
          icon.classList.add("fa-regular");
          document.getElementById(`${iconId}`).classList.remove('flagged-tab');

        }
      }
    })
    ///score
    document.getElementById('submit').addEventListener('click', function(){
      console.log('submitted');
      let score = 0;
      
      questions.forEach((e,i) => {
        
        let radio = document.querySelector(`input[name=question${i}]:checked`);
        if(radio){
        let answer = radio.value;

        console.log(answer);
        
          if(answer == e.correctAnswer){
            console.log("true");
            score++;
          }
      }
      
      });
      // alert(`your score is ${score} out of 10`);
      if(score >= 5){
        localStorage.setItem("score", score);
        window.location.replace("../pages/success.html");
      }else{
        window.location.replace("../pages/failure.html");
        localStorage.setItem("score",score);
      }
    })