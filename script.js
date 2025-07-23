const levels = [
  {
    title: "Level 1: The Spark of Curiosity",
    description: "Learn about voltage, current, and resistance. Simulate tasting a battery and measuring tongue resistance!"
  },
  {
    title: "Level 2: Switch It Up",
    description: "Explore SPST and SPDT switches. Solve logic puzzles using virtual switches."
  },
  {
    title: "Level 3: Relay Rumble",
    description: "Understand how relays work and build a relay-controlled LED circuit."
  },
  {
    title: "Level 4: Capacitor Countdown",
    description: "Discover time constants and RC circuits. Simulate capacitor charging and discharging."
  },
  {
    title: "Level 5: Transistor Trials",
    description: "Learn how transistors amplify current. Control LEDs with potentiometers."
  },
  {
    title: "Level 6: Oscillator Odyssey",
    description: "Build a flashing LED circuit and convert it into a sound generator."
  },
  {
    title: "Level 7: The Alarm Architect",
    description: "Design a basic intrusion alarm using relays and 555 timers."
  },
  {
    title: "Level 8: Arduino Awakening",
    description: "Learn basic Arduino programming. Blink LEDs, read sensors, and simulate dice."
  }
];

function startGame() {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("level-select").classList.remove("hidden");
  loadLevelList();
}

function goBack() {
  document.getElementById("level-select").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");
}

function goBackToLevels() {
  document.getElementById("game-content").classList.add("hidden");
  document.getElementById("level-select").classList.remove("hidden");
}

function loadLevelList() {
  const list = document.getElementById("level-list");
  list.innerHTML = "";
  levels.forEach((level, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = level.title;
    btn.onclick = () => loadLevel(index);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function loadLevel(index) {
  const level = levels[index];
  document.getElementById("level-title").innerText = level.title;
  document.getElementById("level-description").innerText = level.description;
  document.getElementById("simulation-placeholder").innerText = "[Simulation Placeholder for " + level.title + "]";
  document.getElementById("level-select").classList.add("hidden");
  document.getElementById("game-content").classList.remove("hidden");
}
