---
title: "Drumdraad"
date: 2023-06-27T10:20:23+02:00
tags: ["e-textiles", "electronics"]
toc: true
categories: ["blog", "fablab"]
layout: post
---

<https://docs.arduino.cc/built-in-examples/digital/toneMultiple>
<https://forum.arduino.cc/t/attiny-and-tone/430648/4>
<https://stackoverflow.com/questions/50773890/creating-an-oscillating-tone-using-arduino-attiny85-and-a-simple-buzzer>


First without an amplifier, next iteration is with the LM4871.

FabtinyISP programmer:

![](http://fab.cba.mit.edu/classes/863.16/doc/projects/ftsmin/pcb_full.png)

- select USBtinyISP as programmer in the Arduino IDE (port doesn't matter)


Pinout ATTiny85:

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnerdytechy.com%2Fwp-content%2Fuploads%2F2021%2F01%2Fattiny85-guide-pinout.png&f=1&nofb=1&ipt=4cabcdbefb551346e95978a22542fc349fc0d125288978824cd47b6bc4abd56a&ipo=images)

I didn't have space to use pins for serial communication, but if I don't connect the speakers yet, I can use those pins instead. Or at least I tried but then I learned that I couldn't flip the necessary switches because then I caused a short somewhere; I didn't really look into it but I think it's because I designed it with power from the 5V power supply in mind once the system was running. Anyway, this was my attempt with serial:

```
// program the board with all switches facing away from the capacitor

#include"pitches.h"
#include <SoftwareSerial.h>

// These constants won't change:
const int sensorPin1 = A2;  // pin that the sensor 1 is attached to THROUGH A SWITCH
const int sensorPin2 = A3;  // pin that the sensor 2 is attached to

const int speakerPin1 = A2;      // pin that the speaker 1 is attached to
const int speakerPin2 = A0;      // pin that the speaker 2 is attached to THROUGH A SWITCH
const int RX = 4;               // used as serial pin when not connecting to speaker (A2)
const int TX = 5;               // used as serial pin when not connecting to speaker (A0)

SoftwareSerial serial(RX, TX);

const int buttonPin = 0;
int lastButtonState = LOW;  // the previous reading from the input pin

int sensorValue1 = 0;   // the sensor value
int sensorMin1 = 1023;  // minimum sensor value
int sensorMax1 = 0;     // maximum sensor value

int sensorValue2 = 0;   // the sensor value
int sensorMin2 = 1023;  // minimum sensor value
int sensorMax2 = 0;     // maximum sensor value

int buttonState;            // the current reading from the input pin
// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
unsigned long lastDebounceTime = 0;  // the last time the output pin was toggled
unsigned long debounceDelay = 50;    // the debounce time; increase if the output flickers


int notes[] = {
  NOTE_B0,
  NOTE_C1,
  NOTE_CS1,
  NOTE_D1,
  NOTE_DS1,
  NOTE_E1,
  NOTE_F1,
  NOTE_FS1,
  NOTE_G1,
  NOTE_GS1,
  NOTE_A1,
  NOTE_AS1,
  NOTE_B1,
  NOTE_C2,
  NOTE_CS2,
  NOTE_D2,
  NOTE_DS2,
  NOTE_E2,
  NOTE_F2,
  NOTE_FS2,
  NOTE_G2,
  NOTE_GS2,
  NOTE_A2,
  NOTE_AS2,
  NOTE_B2,
  NOTE_C3,
  NOTE_CS3,
  NOTE_D3,
  NOTE_DS3,
  NOTE_E3,
  NOTE_F3,
  NOTE_FS3,
  NOTE_G3,
  NOTE_GS3,
  NOTE_A3,
  NOTE_AS3,
  NOTE_B3,
  NOTE_C4,
  NOTE_CS4,
  NOTE_D4,
  NOTE_DS4,
  NOTE_E4,
  NOTE_F4,
  NOTE_FS4,
  NOTE_G4,
  NOTE_GS4,
  NOTE_A4,
  NOTE_AS4,
  NOTE_B4,
  NOTE_C5,
  NOTE_CS5,
  NOTE_D5,
  NOTE_DS5,
  NOTE_E5,
  NOTE_F5,
  NOTE_FS5,
  NOTE_G5,
  NOTE_GS5,
  NOTE_A5,
  NOTE_AS5,
  NOTE_B5,
  NOTE_C6,
  NOTE_CS6,
  NOTE_D6,
  NOTE_DS6,
  NOTE_E6,
  NOTE_F6,
  NOTE_FS6,
  NOTE_G6,
  NOTE_GS6,
  NOTE_A6,
  NOTE_AS6,
  NOTE_B6,
  NOTE_C7,
  NOTE_CS7,
  NOTE_D7,
  NOTE_DS7,
  NOTE_E7,
  NOTE_F7,
  NOTE_FS7,
  NOTE_G7,
  NOTE_GS7,
  NOTE_A7,
  NOTE_AS7,
  NOTE_B7,
  NOTE_C8,
  NOTE_CS8,
  NOTE_D8,
  NOTE_DS8,
};


void setup() {
  // turn on LED to signal the start of the calibration period:
  serial.begin(9600);
  serial.println("Initializing...");
  //  pinMode(speakerPin1, OUTPUT);
  //  pinMode(speakerPin2, OUTPUT);
  pinMode(RX, INPUT);
  pinMode(TX, OUTPUT);
  pinMode(sensorPin1, INPUT);
  pinMode(sensorPin2, INPUT);
}

void loop() {
  int reading = digitalRead(buttonPin);

  // If the switch changed, due to noise or pressing:
  if (reading != lastButtonState) {
    // reset the debouncing timer
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {

    // if the button state has changed:
    if (reading != buttonState) {
      buttonState = reading;

      // only toggle the LED if the new button state is HIGH
      if (buttonState == LOW) {
        serial.println("start");


        // determine min and max values of both sensors for 5 seconds
        for (int timems = 0; timems < 5000; timems++) {
          sensorValue1 = analogRead(sensorPin1);
          sensorValue2 = analogRead(sensorPin2);

          // record the maximum sensor value
          if (sensorValue1 > sensorMax1) {
            sensorMax1 = sensorValue1;
          }
          // record the maximum sensor value
          if (sensorValue2 > sensorMax2) {
            sensorMax2 = sensorValue2;
          }

          // record the minimum sensor value
          if (sensorValue1 < sensorMin1) {
            sensorMin1 = sensorValue1;
          }
          // record the minimum sensor value
          if (sensorValue2 < sensorMin2) {
            sensorMin2 = sensorValue2;
          }
          delay(1);
        }

        //        serial.print("Results for sensor 1: ");
        //
        //        serial.print(sensorMin1);
        //        serial.print("\t");
        //        serial.println(sensorMax1);
        //
        //        serial.print("Results for sensor 2: ");
        //
        //        serial.print(sensorMin2);
        //        serial.print("\t");
        //        serial.println(sensorMax2);
      }
    }

    sensorValue1 = analogRead(sensorPin1);
    sensorValue2 = analogRead(sensorPin2);

    //    serial.print(sensorValue1);
    //    serial.print("\t");
    //    serial.print(sensorValue2);
    //    serial.print("\t");

    sensorValue1 = constrain(sensorValue1, sensorMin1, sensorMax1);
    sensorValue1 = map(sensorValue1, sensorMin1, sensorMax1, 0, 300);
    //    serial.print("constrained and mapped:");
    //    serial.print("\t");
    //    serial.print(sensorValue1);
    //    serial.print("\t");

    sensorValue2 = constrain(sensorValue2, sensorMin2, sensorMax2);
    sensorValue2 = map(sensorValue2, sensorMin2, sensorMax2, 0, 300);

    //    serial.print(sensorValue2);
    //    serial.print("\t");


    // Filtering the values by dividing by 5 then multiplying by 5
    //
    //    serial.print("filtered:");
    //    serial.print("\t");
    //    sensorValue1 = sensorValue1 / 5;
    //    sensorValue1 = sensorValue1 * 5;
    //    serial.print(sensorValue1);
    //    serial.print("\t");
    //
    //    sensorValue2 = sensorValue2 / 5;
    //    sensorValue2 = sensorValue2 * 5;
    //    serial.println(sensorValue2);
    //



    delay(50);
  }

  // save the reading. Next time through the loop, it'll be the lastButtonState:
  lastButtonState = reading;

}
```




- <https://www.hackster.io/porrey/easy-serial-on-the-attiny-2676e6>