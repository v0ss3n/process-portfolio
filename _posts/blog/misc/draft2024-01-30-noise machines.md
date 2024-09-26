---
title: "Noise machines"
date: 2022-03-19T11:31:46+02:00
tags: ["electronics"]
toc: true
categories: ["blog", "other"]
layout: post
---

## ESP WROOM 32
Pin-out of the Wroom dev board I'm using:

![](https://lobodarobotica.com/blog/wp-content/uploads/2020/09/ESP32-Pinout.jpg)

## DF Player Mini
Using this tutorial as reference: <https://circuitjournal.com/how-to-use-the-dfplayer-mini-mp3-module-with-an-arduino>
and this one for ESP: <https://www.hackster.io/munir03125344286/df-player-mini-interface-with-esp32-f1efca>
Wiring DF Player Mini:

![](https://circuitjournal.com/img/articles/3_dfpayer_mini/DFPlayerMini_connections_mono.webp?v=19)

And for stereo headphones:

![](https://circuitjournal.com/img/articles/3_dfpayer_mini/DFPlayerMini_connections_stereo_headphones.webp?v=19)

## XIAO RP2040 Noise machine
<https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/>
<https://www.instructables.com/Arduino-Noise-Machine/>
### Code
```
/* Noise machine using three potentiometers connected to analog inputs
and a piezo or small speaker. A pushbutton turns on the noise, the potentiometers
control the pitch using the Arduino tone() function, and two delay
values which control the length of each tone and length between
each tone. The potentiometers give analog values which are changed
using the map() function into larger or smaller ranges to suit your
musical tastes.
This code is in the public domain.
Matt Thomas 05/04/2019
Adapted for XIAO RP2040 and toggle push button by Michelle Vossen 30/01/2024
*/
const int buttonPin = D8;  // Pushbutton pin 2
const int speaker = A3;    // Speaker or piezo in pin 9
int lastButtonState;       // the previous state of button
int currentButtonState;    // the current state of button
int switchState = 0;

int potZero;  // potentiometers
int potOne;
int potTwo;
void setup() {
  Serial.begin(115200);
  pinMode(buttonPin, INPUT);
  pinMode(9, OUTPUT);  // Speaker/piezo output pin
  currentButtonState = digitalRead(buttonPin);
}
void loop() {
  lastButtonState = currentButtonState;         // save the last state
  currentButtonState = digitalRead(buttonPin);  // read new state
  Serial.println(currentButtonState);

  if (lastButtonState == LOW && currentButtonState == HIGH) {
    if (switchState == 0) {
      switchState = 1;
    }

    else {
      switchState = 0;
    }
  }

  if (switchState == 1) {
    potZero = analogRead(A0);  //Variables for reading the analog values
    potOne = analogRead(A1);
    potTwo = analogRead(A2);
    int htz = map(potZero, 0, 4096, 0, 8800);  // Map the analog readings into
    int high = map(potOne, 0, 4096, 0, 100);   // new number ranges and create
    int low = map(potTwo, 0, 4096, 0, 100);    // new variables
    Serial.println("The button is pressed");
    tone(speaker, htz);  // Sound on
    delay(high);         // Length of tone
    noTone(speaker);     // Sound off
    delay(low);          // Time until next tone
  }

  if (switchState == 0) {
    noTone(speaker);  // No tone if the button is released
  }
}
```


## MIDI
![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEj3rAvV4Ljn93ba1WArpDQXhSQA2z_XoBylX22Co8Yabj51GKJjFzil-Dbx70kje6Rgm261io7uiUp8vMolTqBSdaWsDiiWKyHS-jjfALTGQ2wIWhhzkueO0JOWqJb_4pyV4xvug670v2XcMdZNFHs1Ggb20e6zOrToTOY6-unP7wm7QJpyMR9sYIVo_nNi%2Fs16000%2FMIDI%2520Connector%2520Pinout%2520Diagram(In%2C%2520Out%2C%2520Male%2C%2520Female).png&f=1&nofb=1&ipt=63e2cfc565f74b411c55e046da9f4a0abe54a9fd79212ac554171cb2d7cac439&ipo=images)

## Troubleshooting

> ADC2 pins can not be used when WiFi is used. On the other hand, ADC1 pins can be used even when WiFi is enabled.

- THE WIRES FROM MPR121 ON SDA/SCL CANNOT BE SUPER LONG (as in 2 meter is too long)

### ESP32 & Teensy 4.0
Need different resistors for MIDI out when using 3.3V
- <https://www.midi.org/forum/346-3-3v-vs-5v-and-what-resistors-to-use>
> 47 Ohm instead of 220 Ohm

MIDI OUT moet altijd aan MIDI IN


Teensy 4.0
<https://www.pjrc.com/teensy/td_libs_MIDI.html>

![](https://www.pjrc.com/teensy/td_libs_MIDI_sch_t3.png)
Schematic

Features
- 10x analog input (via MIDI to VOLCA)
- 13x digital input (C-C) > would be nice but not enough pins so it's gonna be 10x to match volca
- 1x calibration button
- 1x internal speaker

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bobstudio040.nl%2Fwp-content%2Fuploads%2F2014%2F12%2Fpianotoets.jpg&f=1&nofb=1&ipt=1a7479a93ac75f8367758fb2dcaae27fe10e7f29524496d4dbfe64694f0de463&ipo=images)

### ESP32

```
#include <MIDI.h>


MIDI_CREATE_INSTANCE(HardwareSerial, Serial2, MIDI);  // Initialise MIDI

void setup() {
  // Serial.begin(9600);
  MIDI.begin();
}

void loop() {

  // Monophonic keys - example one
  for (int i = 0; i < 80; i++) {
    MIDI.sendNoteOn(i, 100, 8);  // connect planet control to 1v/oct
    // MIDI.sendControlChange(44, i, 8);
    delay(10);
    MIDI.sendNoteOff(i, 100, 8);
  }

  delay(10);
}

```

## DFPlayer Mini

- .wav file in folder called 'mp3'

Fouten board:
- in board design T8 en T9 verkeerd connect want verkeerd in kicad symbol.
-moet niet UART TX0 en RX0 gebruiken want dan gaat boot mis.

```
#include "Arduino.h"
#include "DFRobotDFPlayerMini.h"

const int touchThreshold = 15;                               // Threshold for the touch sensors; values can vary depending on your set-up. In my case the value when untouched was around 30 and went down to about 0-5 when touched. The longer the wires are to which the touch sensors are connected, the lower the untouched value and the smaller the difference between touched/untouched values.
const int touchPins[] = { T0, T2, T3, T4, T5, T6, T7, T8, T9 };  // Array with all of the used touch pins. T1 is not available.

// const int digitalPins[] = { 19, 18, 5, 17, 16, 21, 22, 23, 5, 6 }; // These were the initially designed digital pins. However, I ended up having to use serial communication on pin 16 and 17.
// const int digitalPins[] = { 19, 18, 5, 21, 22, 23, 5, 6 }; // These are the ones I can actually use. Although I did break another trace on the first board, I think to pin 3 which is GPIO 5.
const int digitalPins[] = { 21, 22, 23, 5, 6 }; // These are the ones on the one on the left side of the board.

const int analogPins[] = {36, 39};

// Speaker pins are swapped with T8 and T9, wrong in board design in KiCad.
const int speakerPin1 = 25;
const int speakerPin2 = 26;


const String tracks[] = { "0001all_all_all_a4.wav",
                          "002all_all_all_ab4.wav",
                          "0003all_all_all_b4.wav",
                          "004all_all_all_bb4.wav",
                          "0005all_all_all_c4.wav",
                          "0006all_all_all_d4.wav",
                          "007all_all_all_db4.wav",
                          "0008all_all_all_e4.wav",
                          "009all_all_all_eb4.wav",
                          "0010all_all_all_f4.wav",
                          "0011all_all_all_g4.wav",
                          "012all_all_all_gb4.wav" };


#if (defined(ARDUINO_AVR_UNO) || defined(ESP8266))  // Using a soft serial port
#include <SoftwareSerial.h>
SoftwareSerial softSerial(/*rx =*/4, /*tx =*/5);
#define FPSerial softSerial
#else
#define FPSerial Serial1
#endif

DFRobotDFPlayerMini myDFPlayer;
void printDetail(uint8_t type, int value);

void setup() {
#if (defined ESP32)
  FPSerial.begin(9600, SERIAL_8N1, /*rx =*/16, /*tx =*/17);
#else
  FPSerial.begin(9600);
#endif

  Serial.begin(115200);

  Serial.println();
  Serial.println(F("DFRobot DFPlayer Mini Demo"));
  Serial.println(F("Initializing DFPlayer ... (May take 3~5 seconds)"));

  if (!myDFPlayer.begin(FPSerial, /*isACK = */ true, /*doReset = */ true)) {  //Use serial to communicate with mp3.
    Serial.println(F("Unable to begin:"));
    Serial.println(F("1.Please recheck the connection!"));
    Serial.println(F("2.Please insert the SD card!"));
  }
  Serial.println(F("DFPlayer Mini online."));

  myDFPlayer.setTimeOut(500);  //Set serial communictaion time out 500ms

  //----Set volume----
  myDFPlayer.volume(30);    //Set volume value (0~30).
  myDFPlayer.volumeUp();    //Volume Up
  myDFPlayer.volumeDown();  //Volume Down

  //----Set different EQ----
  myDFPlayer.EQ(DFPLAYER_EQ_NORMAL);
  //  myDFPlayer.EQ(DFPLAYER_EQ_POP);
  //  myDFPlayer.EQ(DFPLAYER_EQ_ROCK);
  //  myDFPlayer.EQ(DFPLAYER_EQ_JAZZ);
  //  myDFPlayer.EQ(DFPLAYER_EQ_CLASSIC);
  //  myDFPlayer.EQ(DFPLAYER_EQ_BASS);

  //----Set device we use SD as default----
  //  myDFPlayer.outputDevice(DFPLAYER_DEVICE_U_DISK);
  myDFPlayer.outputDevice(DFPLAYER_DEVICE_SD);
  //  myDFPlayer.outputDevice(DFPLAYER_DEVICE_AUX);
  //  myDFPlayer.outputDevice(DFPLAYER_DEVICE_SLEEP);
  //  myDFPlayer.outputDevice(DFPLAYER_DEVICE_FLASH);

  //----Mp3 control----
  //  myDFPlayer.sleep();     //sleep
  //  myDFPlayer.reset();     //Reset the module
  //  myDFPlayer.enableDAC();  //Enable On-chip DAC
  //  myDFPlayer.disableDAC();  //Disable On-chip DAC
  //  myDFPlayer.outputSetting(true, 15); //output setting, enable the output and set the gain to 15

  //----Mp3 play----
  // myDFPlayer.next();  //Play next mp3
  // delay(1000);
  // myDFPlayer.previous();  //Play previous mp3
  // delay(1000);
  // myDFPlayer.play(1);  //Play the first mp3
  // delay(1000);
  // myDFPlayer.loop(1);  //Loop the first mp3
  // delay(1000);
  // myDFPlayer.pause();  //pause the mp3
  // delay(1000);
  // myDFPlayer.start();  //start the mp3 from the pause
  // delay(1000);
  // myDFPlayer.playFolder(15, 4);  //play specific mp3 in SD:/15/004.mp3; Folder Name(1~99); File Name(1~255)
  // delay(1000);
  // myDFPlayer.enableLoopAll();  //loop all mp3 files.
  // delay(1000);
  // myDFPlayer.disableLoopAll();  //stop loop all mp3 files.
  // delay(1000);
  // myDFPlayer.playMp3Folder(4);  //play specific mp3 in SD:/MP3/0004.mp3; File Name(0~65535)
  // delay(1000);
  // myDFPlayer.advertise(3);  //advertise specific mp3 in SD:/ADVERT/0003.mp3; File Name(0~65535)
  // delay(1000);
  // myDFPlayer.stopAdvertise();  //stop advertise
  // delay(1000);
  // myDFPlayer.playLargeFolder(2, 999);  //play specific mp3 in SD:/02/004.mp3; Folder Name(1~10); File Name(1~1000)
  // delay(1000);
  // myDFPlayer.loopFolder(5);  //loop all mp3 files in folder SD:/05.
  // delay(1000);
  // myDFPlayer.randomAll();  //Random play all the mp3.
  // delay(1000);
  // myDFPlayer.enableLoop();  //enable loop.
  // delay(1000);
  // myDFPlayer.disableLoop();  //disable loop.
  // delay(1000);

  //----Read imformation----
  Serial.println(myDFPlayer.readState());                //read mp3 state
  Serial.println(myDFPlayer.readVolume());               //read current volume
  Serial.println(myDFPlayer.readEQ());                   //read EQ setting
  Serial.println(myDFPlayer.readFileCounts());           //read all file counts in SD card
  Serial.println(myDFPlayer.readCurrentFileNumber());    //read current play file number
  Serial.println(myDFPlayer.readFileCountsInFolder(3));  //read file counts in folder SD:/03
}

void loop() {
  static unsigned long timer = millis();

  // if (millis() - timer > 3000) {
  //   timer = millis();
  //   myDFPlayer.next();  //Play next mp3 every 3 second.
  //   Serial.println("playing");
  // }

  if (myDFPlayer.available()) {
    printDetail(myDFPlayer.readType(), myDFPlayer.read());  //Print the detail message from DFPlayer to handle different errors and states.
  }

  // Read and print touch sensor values
  Serial.println("Touch Sensor Values:");
  Serial.println("| Pin | Touched |");
  Serial.println("|-----|---------|");
  for (int i = 0; i < sizeof(touchPins) / sizeof(touchPins[0]); i++) {
    int touchValue = touchRead(touchPins[i]);
    Serial.print("|  ");
    Serial.print(touchPins[i]);
    Serial.print("  |    ");
    Serial.print(touchValue < 15 ? "Yes" : "No");
    Serial.print("  |   ");
    Serial.print(touchValue);
    Serial.println("    |");
  }
  delay(10);

  for (int i = 0; i < sizeof(touchPins) / sizeof(touchPins[0]); i++) {
    if (touchRead(touchPins[i]) < touchThreshold) {
      myDFPlayer.play(i);
      // delay(1000);
    }
  }
}




void printDetail(uint8_t type, int value) {
  switch (type) {
    case TimeOut:
      Serial.println(F("Time Out!"));
      break;
    case WrongStack:
      Serial.println(F("Stack Wrong!"));
      break;
    case DFPlayerCardInserted:
      Serial.println(F("Card Inserted!"));
      break;
    case DFPlayerCardRemoved:
      Serial.println(F("Card Removed!"));
      break;
    case DFPlayerCardOnline:
      Serial.println(F("Card Online!"));
      break;
    case DFPlayerUSBInserted:
      Serial.println("USB Inserted!");
      break;
    case DFPlayerUSBRemoved:
      Serial.println("USB Removed!");
      break;
    case DFPlayerPlayFinished:
      Serial.print(F("Number:"));
      Serial.print(value);
      Serial.println(F(" Play Finished!"));
      break;
    case DFPlayerError:
      Serial.print(F("DFPlayerError:"));
      switch (value) {
        case Busy:
          Serial.println(F("Card not found"));
          break;
        case Sleeping:
          Serial.println(F("Sleeping"));
          break;
        case SerialWrongStack:
          Serial.println(F("Get Wrong Stack"));
          break;
        case CheckSumNotMatch:
          Serial.println(F("Check Sum Not Match"));
          break;
        case FileIndexOut:
          Serial.println(F("File Index Out of Bound"));
          break;
        case FileMismatch:
          Serial.println(F("Cannot Find File"));
          break;
        case Advertise:
          Serial.println(F("In Advertise"));
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
}
```