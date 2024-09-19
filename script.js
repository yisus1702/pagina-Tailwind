function luhnAlgoritmo(num) {
    let arr = (num + '').split('').reverse().map(x => parseInt(x));
    let ultimoNumero = arr.splice(0, 1)[0];
    let sum = arr.reduce(
        (acc, val, i) =>i % 2 === 0 ? acc + (val * 2 > 9 ? val * 2 - 9 : val * 2) : acc + val, 0);
    sum += ultimoNumero;
    return sum % 10 === 0;
}

function validateCard(event) {
    event.preventDefault();

    const cardName = document.getElementById('card-name').value;
    const firstName = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const cardNumber = document.getElementById('card-number').value.replace(/\s+/g, '');
    const month = document.getElementById('month').value;
    const year = document.getElementById('date').value;
    const cvc = document.getElementById('cvc').value;
    const result = document.getElementById('result');
    const tresDigitos = parseInt(cardNumber.substring(0, 3), 10);

    if (cardName && firstName && surname && cardNumber && month && year) {
        if (luhnAlgoritmo(cardNumber)) {
            if (cardNumber.length === 16 && (tresDigitos >= 500 && tresDigitos <= 590)) {
                if (cvc && cvc.length === 3 && !isNaN(cvc)) {
                    result.textContent = 'Valid Credit Card Number. Tarjeta de crédito válida.';
                    result.className = 'mt-4 text-center text-green-600';
                } else {
                    result.textContent = 'Numero de tarjeta valido (No es tarjeta de credito)';
                    result.className = 'mt-4 text-center text-yellow-600';
                }
            } else {
                result.textContent = 'Informacion de tarjeta invalida';
                result.className = 'mt-4 text-center text-red-600';
            }
        } else {
            result.textContent = 'No es una tarjeta de credito';
            result.className = 'mt-4 text-center text-red-600';
        }
    } else {
        result.textContent = 'Please fill in all required fields';
        result.className = 'mt-4 text-center text-red-600';
    }
}