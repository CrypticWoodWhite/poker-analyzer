// from email (there are other hands in addition to these of these): royal flush, straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, pair, and high card.

// royal flush:  five cards of sequential value, all of the same suit, with A being highest value
// straight flush:  five cards of sequential value, all of the same suit
// four of a kind: four cards of one value and one card of another value
// full house: contains three cards of one value and two cards of another value
// flush: five cards all of the same suit, not all of sequential value
// straight: five cards of sequential value, not all of the same suit
// three of a kind: three cards of one value and two cards of two other values
// two pair: two cards of one value, two cards of another value and one card of a third value
// high card: a hand that does not fall into any other category

// assume 5 cards are always passed in
// cards are 2-3 character strings with first 1-2 char being the value, the last character being the suit always in lower case
// assume all cards passed in are always valid

// these are in order from lowest to highest rank
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a"];
const HANDS = [
    "high card", // 0
    "two pair", // 1
    "three of a kind", // 2
    "straight", // 3
    "flush", // 4
    "full house", // 5
    "four of a kind", // 6
    "straight flush", // 7
    "royal flush" // 8
];

// order doesn't matter
const SUITS = ["h", "s", "d", "c"];

const poker = (c1, c2, c3, c4, c5) => {
    let bestHand = HANDS[0];
    let currentHand = HANDS[0];

    let hand = [c1, c2, c3, c4, c5];
    let handValues = hand.map(card => card.slice(0, -1));
    let handSuits = hand.map(card => card.slice(-1));

    // VALUES
    handValues.sort((a, b) => VALUES.indexOf(a) - VALUES.indexOf(b));
    const valsByGroup = handValues.reduce((acc, curr, i) => {
        acc[curr] = acc[curr] + 1 || 1
        return acc;
    }, {});
    let groups = Object.keys(valsByGroup);
    let groupCounts = Object.values(valsByGroup);

    if (groups.length === 3) {
        groupCounts.forEach(gc => {
            if (gc === 3) {
                // three of a kind
                currentHand = HANDS[2];
                if (HANDS.indexOf(currentHand) > HANDS.indexOf(bestHand)) {
                    bestHand = currentHand;
                }        
            }
        })
    }

    if (groups.length === 2) {
        if (groupCounts[0] === 2 || groupCounts[0] === 3) {
            // full house
            currentHand = HANDS[5];
        } else {
            // four of a kind
            currentHand = HANDS[6];
        }
        if (HANDS.indexOf(currentHand) > HANDS.indexOf(bestHand)) {
            bestHand = currentHand;
        }
    }
    if (groups.length === 5) {
        console.log("potential straight", handValues)
        // all values have to be in sequence - compare to VALUES arr using index
        let numSequences = 0;
        handValues.forEach((hv, i) => {
            // this is the index of the hv in the VALUES arr
            let indexInVALUES = VALUES.indexOf(hv);
            console.log("indexInVALUES", indexInVALUES)
            // need the index of the NEXT hv (i++) in the VALUES arr
            let nextHv = handValues[i+1];
            console.log("nextHv", nextHv)
            let nextIndexInVALUES = VALUES.indexOf(nextHv);
            console.log("nextIndexInVALUES", nextIndexInVALUES)
            if ((indexInVALUES + 1) === nextIndexInVALUES) {
                numSequences++; // note that this fail if sequential going to the last val in array
            }
        })
        console.log("numSequences", numSequences)
    }

    // SUITS
    let isFlush = handSuits.every(hs => hs === handSuits[0]);
    if (isFlush) {
        currentHand = HANDS[4];
        if (HANDS.indexOf(currentHand) > HANDS.indexOf(bestHand)) {
            bestHand = currentHand;
        }
    }

    // if isFlush && isSequential && has ace return royal flush
    // if isFlush && isSequential return straight flush
    // if 4 of one value return four of a kind
    // if 3 of one value and 2 of another return full house
    // if isFlush return flush
    // if isSequential return straight
    console.log("bestHand wins!", bestHand)
    return bestHand;
}

let c1 = "10d";
let c2 = "9d";
let c3 = "7s";
let c4 = "jh";
let c5 = "qd";

poker(c1, c2, c3, c4, c5);
