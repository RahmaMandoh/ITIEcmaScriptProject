let questions = [];
let currentIndex = 0;

    // Fetch questions from the JSON file
    fetch('../jsonFileQS.json')
      .then(response => response.json())
      .then(data => {
        // Shuffle questions
        questions = data.sort(() => Math.random() - 0.5);
        displayQuestion();
      })
      .catch(error => console.error('Error loading questions:', error));

    // Display the current question
    function displayQuestion() {
      const questionElement = document.getElementById('question');
      const choicesContainer = document.querySelector('.choices');
      questionElement.textContent = questions[currentIndex]?.question || 'No questions available.';
      // new emplementaion  
        // const questionData = questions[currentIndex]?.question || 'No questions available.';
        const choicesHTML = questions[currentIndex].choices.map((choice, i) =>
            `<label>
                <input type="radio" name="choice" value="${i}">
                ${choice}
            </label>`).join("");

            choicesContainer.innerHTML = `${choicesHTML}`;
            // questionElement.innerHTML = `
            // <div class="question">${questionData.question}</div>
            // <div class="choices">${choicesHTML}</div>`
        ;


      // Enable/disable buttons based on the current index
      document.getElementById('prev').disabled = currentIndex === 0;
      document.getElementById('next').disabled = currentIndex === questions.length - 1;
    }

    // Add event listeners for the buttons
    document.getElementById('prev').addEventListener('click', () => {
        if (currentIndex > 0) {            
          document.getElementById(`${currentIndex}`).classList.toggle('selected-tab');
        currentIndex--;
        displayQuestion();
        document.getElementById(`${currentIndex}`).classList.toggle('selected-tab');
      }
    });

    document.getElementById('next').addEventListener('click', () => {
        
        if (currentIndex < questions.length - 1) {
            document.getElementById(`${currentIndex}`).classList.remove('selected-tab');
        currentIndex++;
        displayQuestion();
        document.getElementById(`${currentIndex}`).classList.add('selected-tab');

      }
    });