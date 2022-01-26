let quote = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    quote:
      "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan",
  },
  {
    quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
  },
  {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    quote:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Nothing is impossible, the word itself says, “I’m possible!”",
    author: "Audrey Hepburn",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  { 
    quote: "If you can dream it, you can achieve it.", 
    author: "Zig Ziglar" },
];

let advice = [
    "clean your shoes",
    "do some ligth exercises",
    "drink some water",
    "talk to that person",
    "do what you avoid, but only do it for 5 minut",
    "read for 20 minutes",
    "take a break",
    "go touch some grass",
    "take a nap",
    "make some notes on have do you feeling now",
    "clean up your space"
];

let tarot = [
    {
        card: "The Fool",
        meaning:  "new beginnings, optimism, trust in life"
    },
    {
        card: "The Magician",
        meaning:  "action, the power to manifest"
    },
    {
        card: "The High Priestess",
        meaning:  "inaction, going within, the mystical"
    },
    {
        card: "The Empress",
        meaning:  "abundance, nurturing, fertility, life in bloom!"
    },
    {
        card: "The Emperor",
        meaning:  "structure, stability, rules and power"
    },
    {
        card: "The Hierophant",
        meaning:  "institutions, tradition, society and its rules"
    },
    {
        card: "The Lovers",
        meaning:  "sexuality, passion, choice, uniting"
    },
    {
        card: "The Chariot ",
        meaning:  "movement, progress, integration"
    },
    {
        card: "Strength",
        meaning:  "courage, subtle power, integration of animal self"
    },
    {
        card: "The Hermit",
        meaning:  "meditation, solitude, consciousness"
    },
    {
        card: "Wheel of Fortune",
        meaning:  "cycles, change, ups and downs"
    },
    {
        card: "Justice ",
        meaning:  "fairness, equality, balance"
    },
    {
        card: "The Hanged Man",
        meaning:  "surrender, new perspective, enlightenment"
    },
    {
        card: "Death",
        meaning:  "the end of something, change, the impermeability of all things"
    },
    {
        card: "Temperance",
        meaning:  "balance, moderation, being sensible"
    },
    {
        card: "The Devil",
        meaning:  "destructive patterns, addiction, giving away your power"
    },
    {
        card: "The Tower",
        meaning:  "collapse of stable structures, release, sudden insight"
    },
    {
        card: "The Star",
        meaning:  "hope, calm, a good omen"
    },
    {
        card: "The Moon",
        meaning:  "mystery, the subconscious, dreams"
    },
    {
        card: "The Sun",
        meaning:  "success, happiness, all will be well"
    },
    {
        card: "Judgment",
        meaning:  "rebirth, a new phase, inner calling"
    },
    {
        card: "The World",
        meaning:  "completion, wholeness, attainment, celebration of life"
    },
];

const date = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Intl.DateTimeFormat('en-US', options).format(date);

const randomiser = arr => {
    return Math.floor(Math.random() * arr.length)
}

const message = () => {
    let quoteOfTheDay = quote[randomiser(quote)];
    let adviceOfTheDay = advice[randomiser(advice)];
    let cardOfTheDay = tarot[randomiser(tarot)];
    return `Hello beautiful sunshine, today is ${today}. \nRemember how once ${quoteOfTheDay.author} said \n"${quoteOfTheDay.quote}" \nwhich practically means what you should ${adviceOfTheDay}.\nSpirit sends you a ${cardOfTheDay.card} card, which calls you to bring your attention to ${cardOfTheDay.meaning}.\nBye now`
}

console.log(message());
