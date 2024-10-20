let surveyData = {}; 

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    surveyData.question1 = document.getElementById('question1').value;
    surveyData.question2 = document.getElementById('question2').value;
    surveyData.question3 = document.getElementById('question3').value;

    
    const resultButton = document.getElementById('resultButton');
    resultButton.classList.remove('hidden');

  
    this.reset();
});


document.getElementById('resultButton').addEventListener('click', function() {
    const resultDiv = document.getElementById('result');

    if (resultDiv.classList.contains('hidden')) {
        resultDiv.innerHTML = `
            <h2>Sonuçlar:</h2>
            <p><strong>1. En sevdiğiniz kitap:</strong> ${surveyData.question1}</p>
            <p><strong>2. En beğendiğiniz film:</strong> ${surveyData.question2}</p>
            <p><strong>3. Gelecekte ne yapmak istersiniz:</strong> ${surveyData.question3}</p>
        `;
        resultDiv.classList.remove('hidden'); 
        this.textContent = "Sonuçları Gizle"; 
    } else {
        resultDiv.classList.add('hidden'); 
        this.textContent = "Anket Sonuçları";
    }
});