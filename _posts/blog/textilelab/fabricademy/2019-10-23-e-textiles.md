---
title: "Fabricademy: e-textiles"
date: 2019-10-23T14:53:46+02:00
tags: ["lecture", "e-textiles", "electronics"]
toc: true
categories: ["blog", "textilelab", "fabricademy"]
layout: post
---

# e-Textiles
_Liza Stark_

During this week students will be introduced to an overview of the field of electronic textiles, example works in the field as well as materials and technical developments that have made these projects possible. We will go into details on different techniques for making soft/flexible/fabric circuits.

<https://class.textile-academy.org/classes/week05/>

## Workshop notes
- Static energy: 2 objects with different electric charges > is limited in space (for example balloon and hair)
- Dynamic energy: electrons move continuously > a physical path => a current

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvhmsscience.weebly.com%2Fuploads%2F1%2F2%2F7%2F6%2F12762866%2Fatom-1_orig.jpg&f=1&nofb=1)

- 1 Ampère = 6.241 * 10^18 electrons per second = 1 Coulomb per second (1 mA = 0.001 A)
- Power supply gives push to the electrons to move
- Capacity to move charge is Voltage (V) > check voltage and + and - with multimeter (or lick the battery to see if it's charged)
- You measure the difference in energy between two points

Best practice: 
- red probe = + (V)
- black probe = - (COM)

Measuring voltages and resistance using a multimeter:

![]({{ site.baseurl }}/images/fabricademy/e-textiles.jpg)

An LED has a cathode (-) and an anode (+). The short leg is the negative side, the long leg the positive. The optimal voltage for an LED is 3V (otherwise a risk of burning the LED), so when using a battery with a higher voltage you need to make use of resistors.
- When using a 9V battery, you need a resistor of 470 Ohm.
- When using a 5V battery, you need a resistor of 220 Ohm.
- When using a 3V battery, you don't need a resistor.

Lighting up an LED with a battery:

![]({{ site.baseurl }}/images/fabricademy/e-textiles-2.jpg)

A breadboard is used for quick prototyping. You use jumper wires to connect the components. Use the + and - strips for power supply (this is a convention, it's clearer). Connecting a battery to a breadboard:

![]({{ site.baseurl }}/images/fabricademy/e-textiles-3.jpg)

Arduino is an open source microcontroller that can be used to execute code. For example, to blink an LED:

<div class="row-2--video">
    <div class="video">
        <video width="480" height="300" controls>
            <source src="{{ site.baseurl }}/images/fabricademy/blink1.mp4" type="video/mp4">
        </video>
    </div>
    <div class="video">
        <video width="480" height="300" controls>
            <source src="{{ site.baseurl }}/images/fabricademy/blink2.mp4" type="video/mp4">
        </video>
    </div>
</div>

A sensor is a device, module, machine, or subsystem whose purpose is to detect events or changes in its environment and send the information to other electronics, frequently a computer processor. 

Digital sensors:
- on/off
- high/low voltage
- I/O
- GND/VCC (voltage change)

Analog sensors: 
all values between min. and max.; GND-VCC

Any switch can be used as a digital sensor (open/closed):
- Push (momentary)
- Toggle
- Tilt
- Stroke

An LDR (light dependent resistor; or photoresistor) is an analog sensor that decreases resistance with respect to receiving luminosity on the component's sensitive surface. The resistance of an LDR decreases with increasing light intensity.

I used the following code (based on the built-in Blink example code) to let the LED blink when a button (push switch) is pressed:

{% highlight cpp %}
int digital_sensor_pin = 7;     // where the sensor is connected
int digital_sensor_value = 0;
int led_pin = 3; // where the LED is connected

void setup() {
  pinMode(digital_sensor_pin, INPUT);
  Serial.begin(9600);
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(led_pin, OUTPUT);
}

void loop() {
  digital_sensor_value = digitalRead(digital_sensor_pin);
  if(digital_sensor_value == HIGH){
      digitalWrite(led_pin, HIGH);    
  } else {
      digitalWrite(led_pin, HIGH);   // turn the LED on (HIGH is the voltage level)
      delay(500);                       // wait for a second
      digitalWrite(led_pin, LOW);    // turn the LED off by making the voltage LOW
      delay(500);                       // wait for a second    
  }  
}
{% endhighlight %}

For more examples and tutorials check out [kobakant](https://www.kobakant.at/DIY/).

## Digital sensor
I made a soft digital sensor that I integrated into an [experimental design tool]({{ site.baseurl }}\fablab\2019\10\14\first-experimental-design-tool-test.html).

Testing conductive yarn and conductive fabric with an LED:

![]({{ site.baseurl }}/images/fabricademy/soft-digital-sensor.jpg)

Final soft digital sensor, an on/off slide switch for an LED attached to a marker:

<video width="480" height="300" controls>
    <source src="{{ site.baseurl }}/images/fabricademy/soft-digital-sensor.mp4" type="video/mp4">
</video>