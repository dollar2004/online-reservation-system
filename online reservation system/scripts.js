// Example: Handling the reservation form submission
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const trainNumber = document.getElementById('trainNumber').value;
    
    // Fetch train name based on train number (this should be implemented with a real API or data source)
    // For now, we'll just set a placeholder value
    document.getElementById('trainName').value = 'Train Name for ' + trainNumber;
    
    // Perform the actual reservation submission (e.g., send data to the server)
    console.log('Reservation submitted');
});

document.getElementById('cancellationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get PNR number
    const pnrNumber = document.getElementById('pnrNumber').value;
    
    // Fetch reservation details based on PNR number (this should be implemented with a real API or data source)
    // Display reservation information and show confirm button
    document.getElementById('cancellationInfo').style.display = 'block';
    document.getElementById('confirmCancellation').style.display = 'block';
    console.log('Cancellation requested for PNR:', pnrNumber);
});
