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
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const hands = ["high card", "two pair", "three of a kind", "straight", "flush", "full house", "four of a kind", "straight flush", "royal flush"];

// order doesn't matter
const suits = ["h", "s", "d", "c"];

const poker = (c1, c2, c3, c4, c5) => {
    let best = {
        name: hands[0],
        score: 0
    }; // start with nothing

    let hand = [c1, c2, c3, c4, c5];
    let handValues = hand.map(card => card.slice(-1));
    let handSuits = hand.map(card => card.slice(0, -1));

    console.log("handValues", handValues)
    console.log("handSuits", handSuits)

    // determine all possible combinations
    // forEach combination, calculate score
    // if new score > current score then update best

    return best.name;
}

let c1 = "10s";
let c2 = "kd";
let c3 = "3d";
let c4 = "jd";
let c5 = "9h";

poker(c1, c2, c3, c4, c5)
