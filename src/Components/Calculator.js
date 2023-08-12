import { useState } from "react";

export const Calculator = () => {

    const [result, setResult] = useState(0);
    const [a, setA] = useState('');
    const [b, setB] = useState('');

    function validateExpression(user_input) {
        const numRegex = /^[-+]?\d+(\.\d+)?$/;
        return numRegex.test(user_input);
    }

    const validateInput = (ip1, ip2) => {

        document.getElementById('success').innerText = '';

        const errorAlert = document.getElementById('error');
        const resultAlert = document.getElementById('error-message');
        const correctAlert = document.getElementById('result');

        if (ip1 === '' || ip2 === '') {
            errorAlert.innerText = 'Error!'
            resultAlert.innerText = 'Invalid input'
            correctAlert.style.display = 'none';
            resultAlert.style.display = 'block';
            return false;
        }
        else if (!validateExpression(ip1) || !validateExpression(ip2)) {
            errorAlert.innerText = 'Error!'
            resultAlert.innerText = 'Invalid input'
            correctAlert.style.display = 'none';
            resultAlert.style.display = 'block';
            return false;
        } else if (Number(ip1) < 0 || Number(ip2) < 0) {
            alert('Invalid Number');
            return true;
        }
        return true;
    }

    const handler = (event) => {
        console.log(event.target.innerText);
        let operator = event.target.innerText;

        if (!validateInput(a, b)) {
            return;
        }

        if (operator === "+") {
            let sum = Number(a) + Number(b);
            setResult(sum);
            console.log(result);
        } else if (operator === '-') {
            let difference = Number(a) - Number(b);
            setResult(difference);
            console.log(result);
        } else if (operator === '*') {
            let product = Number(a) * Number(b);
            setResult(product);
            console.log(result);
        } else if (operator === '/') {
            let quotient = Number(a) / Number(b);
            setResult(quotient);
            console.log(result);
        }

        document.getElementById('error').innerText = '';
        document.getElementById('success').innerText = 'Success!';
        document.getElementById('result').style.display = 'block';
        document.getElementById('error-message').style.display = 'none';
    }

    return (
        <div className='container'>
            <div className='calculator'>
                <header>
                    <h1 className='title' style={{ textAlign: 'center' }}>React Calculator</h1>
                </header>
                <form>
                    <input type='text' placeholder='Num 1' onChange={(event) => {
                        setA(event.target.value);
                    }} />
                    <br />
                    <input type='text' placeholder='Num 2' onChange={(event) => {
                        setB(event.target.value);
                    }} />
                </form>

                <div className='button-group'>
                    <button className='span-one' onClick={handler}>+</button>
                    <button className='span-one' onClick={handler}>-</button>
                    <button className='span-one' onClick={handler}>*</button>
                    <button className='span-one' onClick={handler}>/</button>
                </div>

                <div className='message'>
                    <p className='error red' id='error' />
                    <p className='success blue' id='success' />
                    <p className='error-message' id='error-message' />
                </div>
                <div className='result' id='result'> Result - {result} </div>
            </div>
        </div>
    )
}