import sonicBed from '../public/SonicBed.jpg';
import sonicMad from '../public/SonicMad.jpg';
import sonicSmiles from '../public/SonicSmiles.jpg';
import alarmClock from '../public/AlarmClock.jpg';
import sonicToSchool from '../public/SonicToSchool.png';
import tailsHi from '../public/TailsHi.png';
import sonicFood from '../public/SonicFood.png';
import amySad from '../public/AmySad.jpg';
import sonicFlower from '../public/SonicFlower.png';
import tailsAmy from '../public/TailsAmy.png';
import amySmile from '../public/AmySmile.jpg';
import tailsBook from '../public/TailsBook.png';
import tailSonicRun from '../public/TailSonicRun.jpg';
import tailSonicHappy from '../public/TailSonicHappy.png';
import healthyFruit from '../public/HealthyFruit.jpg';
import someCandy from '../public/SomeCandy.png';
import sonicSick from '../public/SonicSick.jpg';

export const storyPages = {
    1: {image: sonicBed, text:"Sonic sleeps.", choices: [{text: ">", number: 2}]},

    2: {image: alarmClock, text: "Sonic gets up.", choices: [
      {text: "Sonic gets mad", number: "1a"}, {text: "Sonic smiles", number: "1b"}
    ]},



    "1a": {image: sonicMad, text: "Sonic is mad.", choices: [
      {text: "Sonic calms down.", number: "1b"}, {text: "Sonic stays mad.", number: "2a-b"}
    ]},

    "1b": {image: sonicSmiles, text: "Sonic starts his day.", choices: [
      {text: "Sonic eats food.", number: "2b-a"}, {text: "Sonic runs to school.", number: "3b"}
    ]},
    "2b-a": {image: sonicFood, text: "Sonic eats food.", prompt: "What does Sonic eat?", choices: [
      {text: "Sonic eats fruit.", number: "2b-a-a"}, {text: "Sonic eats candy.", number: "2b-a-b"}
    ]},
    "2b-a-a": {image: healthyFruit, text: "Sonic eats fruit.", prompt: "Now Sonic is ready to go to school.", choices: [
      {text: ">", number: "3b"}
    ]},
    "2b-a-b": {image: someCandy, text: "Sonic eats candy.", prompt: "Sonic's belly hurts.", choices: [
      {text: ">", number: "3c"}
    ]},

    "3b": {image: sonicToSchool, text: "Sonic runs to school.", prompt: "What does Sonic see?", choices: [
      {text: "Amy looks sad.", number: "3b-a"}, {text: "Tails says hi.", number: "3b-b"}
    ]},

    "3c": {image: sonicSick, text: "Sonic feels sick.", choices: [
      {text: ">", number: "final"}
    ]},

    "3b-a": {image: amySad, text: "Amy is sad.", prompt: "What does Sonic do?", choices: [
      {text: "Sonic is kind to Amy.", number: "3b-a-a"}, {text: "Sonic does not know what to do.", number: "3b-a-b"}
    ]},
    "3b-a-a": {image: sonicFlower, text: "Sonic gives Amy a flower.", prompt: "See how Amy feels.", choices: [
      {text: ">", number: "4a"}
    ]},
    "3b-a-b": {image: tailsAmy, text: "Tails says nice things to Amy.", prompt: "See how Amy feels.", choices: [
      {text: ">", number: "4a"}
    ]},

    "3b-b": {image: tailsHi, text: "Tails says hi.", prompt: "What do Tails and Sonic do?", choices: [
      {text: "They read a book.", number: "3b-b-a"}, {text: "They run.", number: "3b-b-b"}
    ]},
    "3b-b-a": {image: tailsBook, text: "Sonic and Tails read a book.", prompt: "See how they feel.", choices: [
      {text: ">", number: "5b"}
    ]},
    "3b-b-b": {image: tailSonicRun, text: "Sonic and Tails go for a run.", prompt: "See how they feel.", choices: [
      {text: ">", number: "5b"}
    ]},

    "4a": {image: amySmile, text: "Amy feels well.", prompt: "Sonic is glad Amy feels well.", choices: [
      {text: ">", number: "5a"}
    ]},
    "5a": {image: sonicSmiles, text: "Sonic smiles.", prompt: "Sonic has had a good day.", choices: [
      {text: ">", number: "final"}
    ]},
    "5b": {image: tailSonicHappy, text: "They feel well.", prompt: "Sonic has had a good day.", choices: [
      {text: ">", number: "final"}
    ]},



    "final": {image: sonicBed, text: "Sonic goes to sleep.", prompt: "The end.", choices: false}

  }