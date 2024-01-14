window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
    // Extract gyroscope data
    const alpha = event.alpha || 0; // Z-axis rotation
    const beta = event.beta || 0;   // X-axis rotation
    const gamma = event.gamma || 0; // Y-axis rotation

    // Display gyroscope data
    const gyroscopeData = document.getElementById('gyroscope-data');
    gyroscopeData.innerHTML = `
        <p>Alpha (Z-axis): ${alpha.toFixed(2)}</p>
        <p>Beta (X-axis): ${beta.toFixed(2)}</p>
        <p>Gamma (Y-axis): ${gamma.toFixed(2)}</p>
    `;
}
