
document.getElementById('kgrForm').addEventListener('submit', function(event){
    event.preventDefault();
    
    const allintitle = parseInt(document.getElementById('allintitle').value);
    const volume = parseInt(document.getElementById('volume').value);
    const kgrScore = allintitle / volume;

    document.getElementById('result').innerText = `KGR Score: ${kgrScore.toFixed(2)}`;
});
