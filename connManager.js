// Wait for the page to load
document.addEventListener('DOMContentLoaded', (event) => {
  
  // Find the connect button
  let connectButton = document.getElementById("btnConnectUSB");

  if (connectButton) {
    connectButton.addEventListener("click", function() {
      // Prompt user to select a serial port
      Espruino.Core.Serial.requestPort(function(port) {
        console.log("Connecting to " + port.device);

        // Open the selected port
        Espruino.Core.Serial.open(port, function(connectionInfo) {
          // Connected!
          console.log("Connected!");
          connectButton.textContent = "Connected";
          connectButton.disabled = true;

          // Set up a listener for disconnection
          Espruino.Core.Serial.on('close', function() {
            console.log("Disconnected.");
            connectButton.textContent = "Connect via USB";
            connectButton.disabled = false;
          });

          // Set up a listener for data received *from* the device
          Espruino.Core.Serial.on('data', function(data) {
            console.log("Received: " + data);
          });

        }, function() {
          // Failed to connect
          console.log("Failed to connect.");
        });
      }, function() {
        // User cancelled port selection
        console.log("Port selection cancelled.");
      });
    });
  }
});