let questions = [];
let currentIndex = 0;

    // Fetch questions from the JSON file
    fetch('../jsonFileQS.json')
      .then(response => response.json())
      .then(data => {
        // Shuffle questions
        questions = data.sort(() => Math.random() - 0.5);
        buildQuestions();
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
            return `<div class="question hide" id="question${index}"><p>${questionHeading}</p><div class="choices">${choices}</div></div>`;
        }).join("");
         

            Container.innerHTML = questionElement;
            document.getElementById(`question${currentIndex}`).classList.toggle('hide');
        ;


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