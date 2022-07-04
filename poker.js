// from email (there are other hands in addition to these of these): royal flush, straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, pair, and high card.

// royal flush:  five cards of sequential value, all of the same suit, with A being highest value
// straight flush:  five cards of sequential value, all of the same suit
// four of a kind: four cards of one value and one card of another value
// full house: contains three cards of one value and two cards of another value
// flush: five cards all of the same suit, not all of sequential value
// straight: five cards of sequential value, not all of the same suit
// three of a kind: three cards of one value and two cards of two other value
// two pair: two cards of one value, two cards of another value and one card of a third value
// high card: a hand that does not fall into any other category

// assume 5 cards are always passed in
// cards are 2-3 character strings with first 1-2 char being the value, the last character being the suit always in lower case
// assume all cards passed in are always valid

// these are in order from lowest to highest rank
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
const HANDS = ["high card", "two pair", "three of a kind", "straight", "flush", "full house", "four of a kind", "straight flush", "royal flush"];

// order doesn't matter
const SUITS = ["h", "s", "d", "c"];

const poker = (c1, c2, c3, c4, c5) => {
    let hand = [c1, c2, c3, c4, c5];
    let handValues = hand.map(card => card.slice(0, -1));
    let handSuits = hand.map(card => card.slice(-1));
    // console.log("handSuits", handSuits)

    // VALUES
    handValues.sort((a, b) => VALUES.indexOf(a) - VALUES.indexOf(b));
    console.log("handValues", handValues)
    // determine if sequential
    // ALL sequential = straight

    let isStraight = false;

    handValues.forEach((val, i) => {
        console.log("val i", val, i)
    })

    // SUITS
    let isFlush = handSuits.every(hs => hs === handSuits[0]);
    console.log("isFlush", isFlush)
}

let c1 = "10d";
let c2 = "kd";
let c3 = "3s";
let c4 = "jh";
let c5 = "9d";

poker(c1, c2, c3, c4, c5);
