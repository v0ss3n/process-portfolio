---
title: "Cryptography research"
date: 2019-11-07T10:31:30+02:00
tags: ["concept", "textiles", "cryptography"]
categories: ["blog", "textilelab"]
layout: post
---

# Cryptography
Cryptography or cryptology (from Ancient Greek: κρυπτός, romanized: kryptós "hidden, secret"; and γράφειν graphein, "to write", or -λογία -logia, "study", respectively) is the practice and study of techniques for secure communication in the presence of third parties called adversaries.

Cryptography is a method of protecting information and communications through the use of codes so that only those for whom the information is intended can read and process it. The pre-fix "crypt" means "hidden" or "vault" and the suffix "graphy" stands for "writing."

Cryptography prior to the modern age was effectively synonymous with encryption, the conversion of information from a readable state to apparent nonsense. The originator of an encrypted message shares the decoding technique only with intended recipients to preclude access from adversaries.

In cryptography, plaintext usually means unencrypted information pending input into cryptographic algorithms, usually encryption algorithms. Cleartext usually refers to data that is transmitted or stored unencrypted ('in the clear').

## [Adversary](https://en.wikipedia.org/wiki/Adversary_(cryptography))
In cryptography, an adversary (rarely opponent, enemy) is a malicious entity whose aim is to prevent the users of the cryptosystem from achieving their goal (primarily privacy, integrity, and availability of data). An adversary's efforts might take the form of attempting to discover secret data, corrupting some of the data in the system, spoofing the identity of a message sender or receiver, or forcing system downtime.

Actual adversaries, as opposed to idealized ones, are referred to as attackers. The former term predominates in the cryptographic and the latter in the computer security literature. Eve, Mallory, Oscar and Trudy are all adversarial characters widely used in both types of texts.

This notion of an adversary helps both intuitive and formal reasoning about cryptosystems by casting security analysis of cryptosystems as a 'game' between the users and a centrally co-ordinated enemy. The notion of security of a cryptosystem is meaningful only with respect to particular attacks (usually presumed to be carried out by particular sorts of adversaries).

There are several types of adversaries depending on what capabilities or intentions they are presumed to have. Adversaries may be computationally bounded or unbounded (i.e. in terms of time and storage resources), eavesdropping or Byzantine (i.e. passively listening on or actively corrupting data in the channel), static or adaptive (i.e. having fixed or changing ), mobile or non-mobile (e.g. in the context of network security) and so on. In actual security practice, the attacks assigned to such adversaries are often seen, so such notional analysis is not merely theoretical.

## [Characters](https://en.m.wikipedia.org/wiki/Alice_and_Bob)
Alice and Bob are fictional characters commonly used as placeholder names in cryptology, as well as science and engineering literature. The Alice and Bob characters were invented by Ron Rivest, Adi Shamir, and Leonard Adleman in their 1978 paper "A method for obtaining digital signatures and public-key cryptosystems." Subsequently, they have become common archetypes in many scientific and engineering fields, such as quantum cryptography, game theory and physics. As the use of Alice and Bob became more widespread, additional characters were added, each with a particular meaning. These characters do not have to refer to humans; they refer to generic agents which might be different computers or even different programs running on a single computer.

--------

## Types
## Monoalphabetic Substitution Ciphers
[The steps are](https://resources.infosecinstitute.com/role-of-cryptography/)

1. If you know the language of the plaintext hidden by the ciphertext, obtain a page-length sample of any text written in that language.
2. Count the occurrence of all letters in the sample text and record the results in a table.
3. Count the occurrence of all cipher alphabet characters in the ciphertext.
4. Start with the most frequently occurring letter in the plaintext and substitute it for the most common character in the ciphertext. Do this for the second most common character, the third, etc.

![](https://mk0resourcesinfm536w.kinstacdn.com/wp-content/uploads/061112_1445_Chapter7The1.jpg)

## Nomenclator
A nomenclator combines a substitution cipher with a small code set.

![](https://mk0resourcesinfm536w.kinstacdn.com/wp-content/uploads/061112_1445_Chapter7The7.jpg)

## [Steganography](https://en.wikipedia.org/wiki/Steganography)
Steganography is the practice of concealing a file, message, image, or video within another file, message, image, or video. The word steganography combines the Greek words steganos (στεγᾰνός), meaning "covered or concealed", and graphe (γραφή) meaning "writing".

![](https://upload.wikimedia.org/wikipedia/en/9/9c/Steganography.png)

## [Visual Cryptography](https://en.wikipedia.org/wiki/Visual_cryptography)
Visual cryptography is a cryptographic technique which allows visual information (pictures, text, etc.) to be encrypted in such a way that the decrypted information appears as a visual image.

One of the best-known techniques has been credited to Moni Naor and Adi Shamir, who developed it in 1994.[1] They demonstrated a visual secret sharing scheme, where an image was broken up into n shares so that only someone with all n shares could decrypt the image, while any n − 1 shares revealed no information about the original image. Each share was printed on a separate transparency, and decryption was performed by overlaying the shares. When all n shares were overlaid, the original image would appear. There are several generalizations of the basic scheme including k-out-of-n visual cryptography.

![](https://upload.wikimedia.org/wikipedia/commons/0/0e/Visual_crypto_animation_demo.gif)

## [Grille](https://en.wikipedia.org/wiki/Grille_(cryptography))
In the history of cryptography, a grille cipher was a technique for encrypting a plaintext by writing it onto a sheet of paper through a pierced sheet (of paper or cardboard or similar). The earliest known description is due to the polymath Girolamo Cardano in 1550. His proposal was for a rectangular stencil allowing single letters, syllables, or words to be written, then later read, through its various apertures. The written fragments of the plaintext could be further disguised by filling the gaps between the fragments with anodyne words or letters. This variant is also an example of steganography, as are many of the grille ciphers.

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.folger.edu%2Fsites%2Fdefault%2Ffiles%2FChristmasGrille.jpg&f=1&nofb=1)

https://home.bt.com/news/science-news/can-you-spot-these-hidden-images-in-magic-eye-illusions-11364107993380

## The Code book
>The urge to discover secrets is deeply ingrained in human nature; even the least curious mind is roused by the promise of sharing knowledge withheld from others. Some are fortunate enough to find a job which consists in the solution of mysteries, but most of us are driven to sublimate this urge by the solving of artificial puzzles devised for our entertainment. Detective stories or crossword puzzles cater for the majority; the solution of secret codes may be the pursuit of a few.
>>John Chadwick (The Decipherment of Linear B)

> Codebreakers are linguistic alchemists, a mystical tribe attempting to conjure sensible words out of meaningless symbols.

> The science of secrecy is largely a secret science.

> Cryptography itself can be divided into two branches, known as transposition and substitution. In transposition each letter retains its identity but changes its position, whereas in substitution each letter changes its identity but retains its position.

## Other references/methods of hiding images

### Op art
![](https://upload.wikimedia.org/wikipedia/en/1/1b/Riley%2C_Movement_in_Squares.jpg)

### Lenticular lenses
![](http://goochel-trucs.nl/contents/media/l_3-d%20boekenleggers.jpg)
- <https://www.youtube.com/watch?v=hsBtHPfMcx8>
- <https://www.wikihow.com/Make-Lenticular-Prints-With-Photoshop>