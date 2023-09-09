
				document.addEventListener("DOMContentLoaded", function () {
					const calculateButton = document.getElementById("calculate-btn");
					const resultLabel = document.getElementById("result-label");
					const showTheoryButton = document.getElementById("show-theory-btn");
					const theoryContent = document.getElementById("theory-content");

					calculateButton.addEventListener("click", function () {
						const selectedOption = document.querySelector(".combo-box").value;

						if (selectedOption === "Displacement (m)") {
							const velocity = parseFloat(prompt("Enter velocity (m/s):"));
							const time = parseFloat(prompt("Enter time (s):"));
							const displacement = velocity * time;

							resultLabel.textContent = `Result: Displacement: ${displacement} m`;



						} else if (selectedOption === "Acceleration (m/s^2)") {
							const velocity = parseFloat(prompt("Enter velocity (m/s):"));
							const time = parseFloat(prompt("Enter time (s):"));
							const acceleration = velocity / time;

							resultLabel.textContent = `Result: Acceleration: ${acceleration} m/s^2`;



						} else if (selectedOption === "Force (N)") {
							const velocity = parseFloat(prompt("Enter velocity (m/s):"));
							const time = parseFloat(prompt("Enter time (s):"));
							const mass = parseFloat(prompt("Enter mass (kg):"));
							const acceleration = velocity / time;
							const force = mass * acceleration;

							resultLabel.textContent = `Result: Force: ${force} N`;



						} else if (selectedOption === "Kinetic Energy (J)") {
							const mass = parseFloat(prompt("Enter Mass (kg):"));
							const velocity = parseFloat(prompt("Enter Velocity (m/s):"));
							const kineticEnergy = 0.5 * mass * velocity ** 2;

							resultLabel.textContent = `Result: Kinetic Energy: ${kineticEnergy} J`;



						} else if (selectedOption === "Work (J)") {
							const force = parseFloat(prompt("Enter Force (N):"));
							const displacement = parseFloat(prompt("Enter Displacement (m):"));
							const work = force * displacement;

							resultLabel.textContent = `Result: Work: ${work} J`;



						} else if (selectedOption === "Power (W)") {
							const workDone = parseFloat(prompt("Enter Work done (J):"));
							const time = parseFloat(prompt("Enter Time (s):"));
							const power = workDone / time;

							resultLabel.textContent = `Result: Power: ${power} W`;

						} else if (selectedOption === "Impulse (Ns)") {
							const force = parseFloat(prompt("Enter Force (N):"));
							const time = parseFloat(prompt("Enter Time (s):"));
							const impulse = force * time;

							resultLabel.textContent = `Result: impulse: ${impulse} Ns`;

						} else if (selectedOption === "Density (kg/m^3)") {
							const mass = parseFloat(prompt("Enter Mass (Kg):"));
							const volume = parseFloat(prompt("Enter Volume (m^3):"));
							const density = mass / volume;

							resultLabel.textContent = `Result: density: ${density} Kg/m^3`;

						} else if (selectedOption === "Pressure (Pa)") {
							const force = parseFloat(prompt("Enter Force (N):"));
							const area = parseFloat(prompt("Enter Area (m^2):"));
							const pressure = force / area;

							resultLabel.textContent = `Result: pressure: ${pressure} Pa`;

						} else if (selectedOption === "Angular Velocity (rad/s)") {
							const angle = parseFloat(prompt("Enter Angle (radians):"));
							const time = parseFloat(prompt("Enter time (s):"));
							const AV = angle / time;

							resultLabel.textContent = `Result: Angular Velocity: ${AV} Rad/s`;

						} else if (selectedOption === "Centripetal Acceleration (m/s^2)") {
							const radius = parseFloat(prompt("Enter Radius (m):"));
							const velocity = parseFloat(prompt("Enter Velocity (m/s):"));
							const CA = velocity ** 2 / radius;

							resultLabel.textContent = `Result: Centripetal Acceleration: ${CA} m/s^2`;

						} else if (selectedOption === "Period (s)") {
							const time = parseFloat(prompt("Enter Time (s):"));
							const frequency = 1 / time;
							const period= 1 / frequency;

							resultLabel.textContent = `Result: Period: ${period} s`;

						} else if (selectedOption === "Frequency (Hz)") {
							const time = parseFloat(prompt("Enter Time (s):"));
							const frequency = 1 / time;

							resultLabel.textContent = `Result: Frequency: ${frequency} Hz`;

						} else if (selectedOption === "Gravitational Force (N)") {
							const mass = parseFloat(prompt("Enter Mass (s):"));
							const gf = mass * 9.8;

							resultLabel.textContent = `Result: Gravitational Force: ${gf} N`;

						} else if (selectedOption === "Circular Motion (m/s^2)") {
							const radius = parseFloat(prompt("Enter Radius (m):"));
							const velocity = parseFloat(prompt("Enter Velocity (m/s):"));
							const CA = velocity ** 2 / radius;

							resultLabel.textContent = `Result: Centripetal Acceleration: ${CA} m/s^2`;

						} else if (selectedOption === "Electrical Field (N/C)") {
							const charge = parseFloat(prompt("Enter Charge (C):"));
							const distance = parseFloat(prompt("Enter Distance (m):"));
							const EF = charge / (4 * 3.14159 * distance ** 2);

							resultLabel.textContent = `Result: Electrical Field: ${EF} N/C`;

						} else if (selectedOption === "Electrical Potential (V)") {
							const charge = parseFloat(prompt("Enter Charge (C):"));
							const distance = parseFloat(prompt("Enter Distance (m):"));
							const EP = charge / (4 * 3.14159 * distance);

							resultLabel.textContent = `Result: Electrical Potential: ${EP} V`;

						} else if (selectedOption === "Resistance (Ω)") {
							const voltage = parseFloat(prompt("Enter Voltage (V):"));
							const current = parseFloat(prompt("Enter Current (A):"));
							const Resistance = voltage / current;

							resultLabel.textContent = `Result: Resistance: ${Resistance} V`;

						} else if (selectedOption === "Resistance (Ω)") {
							const voltage = parseFloat(prompt("Enter Voltage (V):"));
							const current = parseFloat(prompt("Enter Current (A):"));
							const Resistance = voltage / current;

							resultLabel.textContent = `Result: Resistance: ${Resistance} V`;
							
						} else {
							resultLabel.textContent = "Result: Calculation not supported.";
						}
					});

					showTheoryButton.addEventListener("click", function () {
						theoryContent.style.display = "block";
					});
				});

					 document.addEventListener("DOMContentLoaded", function () {
					 const theoryContent = document.getElementById("theory-content");
					 const theoryText = document.getElementById("theory-text");
					 const showTheoryButton = document.getElementById("show-theory-btn");
					 const levelBox = document.querySelector(".level-box");

					 const theoryData = {
						 "National 5": "National 5 content...",
						 "Higher": "Higher Theory content...",
						 "Advanced Higher": "Advanced Higher Theory content..."
					 };

					showTheoryButton.addEventListener("click", function () {
						const selectedLevel = levelBox.value;
						const selectedTheory = theoryData[selectedLevel];

						if (selectedTheory) {
							theoryText.innerHTML = selectedTheory;
							theoryContent.style.display = "block";
						} else {
							theoryText.textContent = "No theory content available for the selected level.";
							theoryContent.style.display = "block";
						}
					});
				});
