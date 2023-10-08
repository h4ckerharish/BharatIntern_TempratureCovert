document.addEventListener('DOMContentLoaded', function () {
    // Hide all conversion fields and results initially
    hideAllConversions();
});
function hideAllConversions() {
    const conversions = document.querySelectorAll('.conversion');
    conversions.forEach(conversion => {
        conversion.style.display = 'none';
    });
}
function selectConversionType() {
    const conversionType = document.getElementById('conversionType').value;
    const conversions = document.querySelectorAll('.conversion');

    conversions.forEach(conversion => {
        conversion.style.display = 'none';
    });
    document.getElementById(conversionType).style.display = 'block';
}

function convertTemperature() {
    const conversionType = document.getElementById('conversionType').value;
    const celsiusToFahrenheit = document.getElementById('celsiusToFahrenheit');
    const fahrenheitToCelsius = document.getElementById('fahrenheitToCelsius');
    const celsiusToKelvin = document.getElementById('celsiusToKelvin');
    const kelvinToCelsius = document.getElementById('kelvinToCelsius');

    if (conversionType === 'celsiusToFahrenheit') {
        const celsius = parseFloat(document.getElementById('celsius').value);
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else if (conversionType === 'fahrenheitToCelsius') {
        const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsiusResult').value = celsius.toFixed(2);
    } else if (conversionType === 'celsiusToKelvin') {
        const celsius = parseFloat(document.getElementById('celsiusInput2').value);
        const kelvin = celsius + 273.15;
        document.getElementById('kelvinResult').value = kelvin.toFixed(2);
    } else if (conversionType === 'kelvinToCelsius') {
        const kelvin = parseFloat(document.getElementById('kelvinInput').value);
        const celsius = kelvin - 273.15;
        document.getElementById('celsiusResult2').value = celsius.toFixed(2);
    }
}

function clearFields() {
    const conversions = document.querySelectorAll('.conversion input[type="text"]');
    conversions.forEach(input => {
        input.value = '';
    });
}
