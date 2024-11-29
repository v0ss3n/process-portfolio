
What we want:
- Inflating & deflating
- Programmable, adjustable air flow

Wiring for on/off only:
<https://www.instructables.com/How-to-use-the-L293D-Motor-Driver-Arduino-Tutorial/>

Wiring for PWM control (this is the one used now)
<https://circuitdigest.com/microcontroller-projects/interface-l293d-motor-driver-with-arduino>
>ENA, ENBPin1 and Pin9 of the IC are the ENA and ENB pins respectively. Pulling the pins high enables the motor and they start spinning. By pulling the pins low the motor stops rotating. By applying a PWM signal onto these pins we can control the speed of the DC motor.

<https://www.adafruit.com/product/4699> and <https://www.adafruit.com/product/4700> both fine, both on digikey, difference is less litres per minute (1.8L vs 2.5L). I got the one with 2.5 litres per minute.

Valve: <https://www.adafruit.com/product/4663>
Wiring for valve:
<https://learn.adafruit.com/transistors-101/example-uses#electromagnets-solenoids-and-motors-2998941>

- The middle port with the flange is the 'common' connection.
- When powered, the common middle port and the plastic end port closest to it are connected and the metal end port is closed (no air flow in or out).
- When de-powered, the common middle port and the metal end port are connected, and the plastic end port is closed (no air flow in or out).

Helpful forums:
- <https://forum.arduino.cc/t/inflating-deflating-mechanism-with-arduino-uno/1181865/4>
- <https://forums.adafruit.com/viewtopic.php?t=196388>

Code:

```
// L293D as motor driver for the two motors
// Motor A - inflating
const int motorPin1 = 5;     // Pin 14 of L293
const int motorPin2 = 6;     // Pin 10 of L293
const int motorPinEn12 = 3;  // PWM pin

// Motor B - deflating
const int motorPin3 = 10;     // Pin  7 of L293
const int motorPin4 = 9;      // Pin  2 of L293
const int motorPinEn34 = 11;  // PWM pin

// Solenoid valve
// The middle port with the flange is the 'common' connection.
// When powered (HIGH), the common middle port and the plastic end port closest to it are connected and the metal end port is closed (no air flow in or out).
// When de-powered (LOW), the common middle port and the metal end port are connected, and the plastic end port is closed (no air flow in or out).
const int valvePin = 2;

//This will run only one time.
void setup() {
  Serial.begin(9600);
  // Motor A - inflating
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(motorPinEn12, OUTPUT);

  // Motor B - deflating
  pinMode(motorPin3, OUTPUT);
  pinMode(motorPin4, OUTPUT);
  pinMode(motorPinEn34, OUTPUT);

  // Solenoid valve
  pinMode(valvePin, OUTPUT);
}

void loop() {
  digitalWrite(motorPin1, LOW);
  digitalWrite(motorPin2, LOW);
  digitalWrite(motorPin3, LOW);
  digitalWrite(motorPin4, LOW);

  // valvePin HIGH for inflating, LOW for deflating
  Serial.println("INFLATING");
  digitalWrite(valvePin, HIGH);  // HIGH - inflate

  // Pump inflating: motorPin1, motorpin2; Pump deflating: motorpin3, motorpin4

  analogWrite(motorPinEn12, 255);  // set speed to highest setting (0-255)

  digitalWrite(motorPin1, HIGH);
  digitalWrite(motorPin2, LOW);
  delay(5000);  // how long it should inflate in milliseconds

  // Turn off motors
  digitalWrite(motorPin1, LOW);
  digitalWrite(motorPin2, LOW);

  // analogWrite(motorPinEn12, 180); // set speed to lower setting
  // digitalWrite(motorPin1, HIGH);
  // digitalWrite(motorPin2, LOW);
  // delay(3000);
  // Stop inflating
  // digitalWrite(motorPin1, LOW);
  // digitalWrite(motorPin2, LOW);
  // delay(1000);

  // // PWM inflation speed; this also works, can be nice for gradual inflation. In the lower range it's hard to notice any inflation
  // for (int i = 0; i < 255; i++) {
  //   analogWrite(motorPinEn12, i);
  //   digitalWrite(motorPin1, HIGH);
  //   digitalWrite(motorPin2, LOW);
  //   delay(10);
  // }
  // // Gradually Decrease Duty Cycle
  // for (int i = 255; i > 0; i--) {
  //   analogWrite(motorPinEn12, i);
  //   digitalWrite(motorPin1, HIGH);
  //   digitalWrite(motorPin2, LOW);
  //   delay(10);
  // }

  Serial.println("DEFLATING");
  digitalWrite(valvePin, LOW);     // set solenoid to LOW to enable air flow to the deflating pump
  analogWrite(motorPinEn34, 255);  // set speed to highest setting (0-255)

  // Turn on the deflating pump
  digitalWrite(motorPin3, HIGH);
  digitalWrite(motorPin4, LOW);
  delay(2000);

  // And this stops deflating
  digitalWrite(motorPin3, LOW);
  digitalWrite(motorPin4, LOW);

  // Short optional pause between inflating and deflating
  delay(500);
}
```