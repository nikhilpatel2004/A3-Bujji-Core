# A3Bujji Core – Multi‑Mode Robotics Framework

> **Assistance • Actuation • Automation**


## 🚀 Overview

**A3Bujji Core** is a modular robotics platform that seamlessly switches between three operational environments based on human involvement:

* **Assistance Mode** – Human‑following & supervised task execution using ultrasonic + IR sensors.
* **Actuation Mode** – Remote tele‑robotic control via Bluetooth and a cross‑platform mobile app.
* **Automation Mode** – AI‑powered autonomy using sensor fusion and onboard decision logic.

The framework includes:

* **Arduino control firmware** (ATmega328P @ 16 MHz)
* **Hardware reference designs** (sensors, actuators, wiring)
* **Bluetooth mobile app** (React Native / Flutter template)
* **Optional Web Dashboard** (Node.js + Express + Vite) for logs, teleop, and OTA config

---

## 📦 Monorepo Structure

```
A3Bujji-Core/
├─ arduino/                # Firmware sketches & libraries
│  ├─ core_firmware/       # Main firmware (modes, sensors, actuators)
│  └─ libs/                # Reusable Arduino libs
├─ apps/
│  ├─ mobile/              # React Native (Expo) app for Bluetooth teleop
│  └─ dashboard/           # Node.js + Vite web dashboard
├─ docs/                   # Diagrams, assets, user guides
└─ tools/                  # Scripts, simulators, CI helpers
```

---

## 🛠️ Hardware

* **MCU:** Arduino UNO / Nano (ATmega328P, 16 MHz)
* **Sensors:** Ultrasonic (HC‑SR04), IR, IMU (MPU‑6050), object‑follow/IR array
* **Actuators:** DC gear motors, L298N driver, optional servos
* **Wireless:** Bluetooth (HC‑05/06 or BLE module)
* **Power:** Li‑ion 2S–3S (4–6 hours typical), BMS recommended

> See **/docs/circuit** for the wiring diagram and BOM (bill of materials).

---

## 🧠 Software Modes

* **Assistance:** Real‑time human tracking, obstacle avoidance, supervised tasks
* **Actuation:** Manual teleop via mobile app, live telemetry & logs
* **Automation:** Autonomous navigation, waypoint following, rule‑based decisions

---

## ⚙️ Quick Start

### 1) Prerequisites

* **Node.js** ≥ 18, **npm** ≥ 9 (or **pnpm**/**yarn**)
* **Arduino IDE** ≥ 2.x (or PlatformIO)
* **Expo CLI** (for mobile) or **Flutter** if you choose Flutter template

### 2) Clone

```bash
git clone https://github.com/<your-org>/A3Bujji-Core.git
cd A3Bujji-Core
```

### 3) Install (Web Dashboard)

```bash
cd apps/dashboard
npm install
# Useful scripts
npm run dev      # Vite dev server
npm run build    # Production build
npm run start    # Serve built app
npm run lint     # Lint
npm run test     # Unit tests (Vitest)
```

**Environment variables** (`apps/dashboard/.env`):

```
VITE_BT_SERVICE_ID=
VITE_API_BASE=http://localhost:4000
```

### 4) Mobile App (React Native via Expo)

```bash
cd apps/mobile
npm install
npx expo start
```

Pair with the robot’s Bluetooth module (default: `A3BujjiCore`, PIN `1234` unless changed).

### 5) Arduino Firmware

* Open **arduino/core\_firmware/core\_firmware.ino** in Arduino IDE
* Install libraries: `ArduinoBLE` (if using BLE), `NewPing`, `MPU6050`
* Select board & port → **Upload**

> Configure mode defaults in `config.h` (e.g., `DEFAULT_MODE=ASSISTANCE`).

---

## 📱 Mobile Controls

* **Connect/Disconnect** Bluetooth
* **Teleop Joystick** / D‑Pad
* **Mode Switch:** Assistance | Actuation | Automation
* **Telemetry:** Distance, IMU, battery, connection status

---

## 🌐 Web Dashboard (Optional)

* Live metrics and logs (WebSocket)
* Mode switching & safety stop
* Firmware config editor (stored in EEPROM)
* Session recorder (CSV export)

Run locally:

```bash
cd apps/dashboard
npm run dev
```

Build & serve:

```bash
npm run build && npm run start
```

---

## 🔌 Wiring Snapshot

```
[HC-SR04] TRIG → D9, ECHO → D8
[IR Array] A0–A3 → IR sensors
[IMU] SDA → A4, SCL → A5 (I2C)
[L298N] IN1–IN4 → D2–D5, ENA/ENB → PWM D3/D6
[BT] TXD → D10 (SoftSerial RX), RXD → D11 (SoftSerial TX)
```

---

## 🧪 Simulation & Testing

* **Unit tests** (dashboard) with **Vitest**
* **Firmware dry‑run** via serial simulator in **tools/**
* **Mock telemetry** for UI development without hardware

---

## 🧩 API (Dashboard ⇄ Robot Bridge)

**HTTP**

```
GET  /api/status         # robot summary
POST /api/mode           # set {mode: assistance|actuation|automation}
POST /api/teleop         # set {vx, vy, omega}
```

**WebSocket**

```
telemetry:{ distance, imu, battery, ts }
```

---

## 🗺️ Roadmap

* [ ] OTA config via BLE characteristics
* [ ] Vision module (ESP32‑CAM / USB camera)
* [ ] Path planning plugin system
* [ ] SLAM integration (optional, off‑board)
* [ ] Multi‑robot fleet dashboard

---

## 🧰 Troubleshooting

* **No Bluetooth pairing** → Check module voltage (3.3V vs 5V), baud rate, and PIN.
* **Sensors unstable** → Add decoupling caps, verify grounds, calibrate IMU.
* **Motors jitter** → Use separate motor supply & common ground; verify ENA/ENB PWM.
* **Slow response** → Reduce serial logging, ensure 115200 baud, disable unused features.

---

## 🤝 Contributing

1. Fork the repo & create a feature branch
2. Run linters/tests (`npm run lint && npm run test`)
3. Open a PR with a clear description & screenshots

> See **CONTRIBUTING.md** and **CODE\_OF\_CONDUCT.md** (add in `/docs`).

---

## 👥 Team

* **Vishal Jaiswal** – Project Manager
* **Nikhil Patel** – Hardware Engineer
* **Shreyansh Dubey** – Software Developer
* **Rahul Singh Lodhi** – Systems Integrator

**Gyan Ganga Institute of Technology and Sciences** — Robotics & Embedded Systems, Sept 2024

---

## 📄 License

MIT © A3Bujji Core Team

---

## 🔗 Links

* **Demo Video:** `docs/demo.mp4`
* **Documentation:** `docs/`
* **Circuit Diagrams:** `docs/circuit/`
* **Prototypes:** `docs/prototypes/`
* **GitHub Issues:** `https://github.com/<your-org>/A3Bujji-Core/issues`

> *A3Bujji Core — Empowering developers with adaptive robotics for the future of assistance, actuation, and automation.*
