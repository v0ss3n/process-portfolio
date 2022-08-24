---
title: "Tactology lab 2022"
date: 2022-03-19T11:31:46+02:00
tags: ["electronics"]
categories: ["blog", "other"]
layout: post
---

# Tactology Lab 2022


## Code for the water pump and the piezo knock sensor

{% highlight cpp %}

// constants won't change
const int RELAY_PIN = A5;  // the Arduino pin, which connects to the IN pin of relay
const int knockSensor = A0; // the piezo is connected to analog pin 0
const int threshold = 100;  // threshold value to decide when the detected sound is a knock or not

// variables

int sensorReading = 0;      // variable to store the value read from the sensor pin



// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin A5 as an output.
  Serial.begin(9600);       // use the serial port
  pinMode(RELAY_PIN, OUTPUT);

}

// the loop function runs over and over again forever
void loop() {
//  pump();
  piezo();
}

void pump() {
  digitalWrite(RELAY_PIN, HIGH); // turn on pump 5 seconds
  delay(6000);
  digitalWrite(RELAY_PIN, LOW);  // turn off pump 5 seconds
  delay(1000);
}

void piezo() {
  sensorReading = analogRead(knockSensor);
  Serial.println(sensorReading);

  // if the sensor reading is greater than the threshold:
  if (sensorReading >= threshold) {

    // send the string "Knock!" back to the computer, followed by newline
    Serial.println("Knock!");
  }
  delay(100);  // delay to avoid overloading the serial port buffer
}

{% endhighlight %}


## Issues
- Buttons & relays return low when pressed and high when released but this can be worked around
- Pumps don't stop pumping after they're already supposed to stop, but only once the water has already gone through the entire tube. It works fine when it can't pump all the water away and it stays stuck in the tube > have to try out what happens when the angle is different

{% highlight cpp %}

// constants won't change
const int BUTTON_PIN1 = A1;
const int BUTTON_PIN2 = A0;
const int BUTTON_PIN3 = A2;

const int RELAY_PIN1 = A3;
const int RELAY_PIN2 = A4;
const int RELAY_PIN3 = A5;  


// the setup function runs once when you press reset or power the board
void setup() {
  Serial.begin(9600);       // use the serial port
  pinMode(RELAY_PIN1, OUTPUT);
  pinMode(RELAY_PIN2, OUTPUT);
  pinMode(RELAY_PIN3, OUTPUT);

  pinMode(BUTTON_PIN1, INPUT_PULLUP);
  pinMode(BUTTON_PIN2, INPUT_PULLUP);
  pinMode(BUTTON_PIN3, INPUT_PULLUP);

}

// the loop function runs over and over again forever
void loop() {
  pump();
}

void pump() {

  uint8_t state1 = digitalRead(BUTTON_PIN1);
  uint8_t state2 = digitalRead(BUTTON_PIN2);
  uint8_t state3 = digitalRead(BUTTON_PIN3);

  Serial.println(digitalRead(RELAY_PIN1));

  //  if(buttonPressed(BUTTON_PIN1)) {
  //    digitalWrite(RELAY_PIN1, HIGH); // turn on pump 5 seconds
  //    Serial.println("Button 1 pressed");
  //  }
  //
  //  if(buttonPressed(BUTTON_PIN3)) {
  //    digitalWrite(RELAY_PIN1, HIGH); // turn on pump 5 seconds
  //    Serial.println("Button 1 pressed");
  //  }
  //
  //  if(buttonPressed(BUTTON_PIN3)) {
  //    digitalWrite(RELAY_PIN1, HIGH); // turn on pump
  //    Serial.println("Button 1 pressed");
  //  }

  if (state1 == HIGH) {
    digitalWrite(RELAY_PIN1, HIGH); // turn OFF pump
  }

  if (state1 == LOW) {
    digitalWrite(RELAY_PIN1, LOW);  // turn ON pump
    Serial.println("Button 1 pressed");
    delay(100);
    digitalWrite(RELAY_PIN1, HIGH); // turn OFF pump
  }

  if (state2 == HIGH) {
    digitalWrite(RELAY_PIN2, HIGH); // turn OFF pump
  }

  if (state2 == LOW) {
    digitalWrite(RELAY_PIN2, LOW);  // turn ON pump
    Serial.println("Button 2 pressed");
    delay(100);
    digitalWrite(RELAY_PIN1, HIGH); // turn OFF pump
  }

  if (state3 == HIGH) {
    digitalWrite(RELAY_PIN3, HIGH); // turn OFF pump
  }

  if (state3 == LOW) {
    digitalWrite(RELAY_PIN3, LOW);  // turn ON pump
    Serial.println("Button 3 pressed");
    delay(100);
    digitalWrite(RELAY_PIN1, HIGH); // turn OFF pump

  }
}
{% endhighlight %}

## Notes 27/03/22
- Performance opbouw als onderdeel van de performance, dus de potten vullen met water en inkt (Michelle), regensensoren verplaatsen op basis van inkt 
- Dweilen en tweaken van regensensoren als onderdeel van de performance
- 5 a 6 regensensoren in glazen kommen/potten, en lampjes bij de regensensoren; geluid naar de octotrack van Pierre; allemaal een herkenbaar geluid; grote trechters in potten voor meer controle 
- potten komen op een plank aan het frame vast met knoppen controller duidelijker zichtbaar, performer dan zichtbaar in controle van de inkt; langere kabels voor meer bewegingsvrijheid, standalone tafel/statief van minimaal 150cm hoog voor de potten, frame is te labiel voor een add-on
- tubes mooie compositie en met visdraad hangen, zorgen dat splitters
- spannend dat inkt wel of niet de bocht gaat halen; geen geel
- microfoon bij inktpotten (richtmicrofoons)
- geluid van het plastic afdekzeil ook versterken met een (contact)microfoon
- pierre: meer controle over het dansen van de stof, meer ventilatoren en ultrasonic values als input voor de soundscape
- kopen michelle: power adapter arduino, ecoline flessen
- michelle: meer variatie in druppels door platte douchekop opzetstuk te 3d printen, 
- kleuren inkt: zwart, blauw, rood/magenta
- allemaal zwarte kleren voor low key onderdeel van de installatie

tijdlijn:
1. Vullen van potten met water
2. Inkt toevoegen aan de potten
3. Eerste kleur (zwart) langzaam besturen, steeds meer inkt doorheen laten lopen
4. Regensensor op basis daarvan plaatsen
    Geluiden tot nu toe alleen van relais'tjes, druppels etc
5. Volgende kleuren en dan regensensoren weer plaatsen
    Wind wel tijdens de tweede en derde kleur al aanzetten
6. Dan soundscape (canvas is ook een instrument!!) 
    Schoonmaken tijdens performance (ritueel)
7. Andere kleuren toevoegen aan de potten tijdens de performance voor variatie
8. Langzaam weer afbouwen 

## Sources
<https://duino4projects.com/how-to-use-a-piezo-element-to-detect-vibration-using-arduino/>