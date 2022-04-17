/**
 * In Black-Jack, 'Card Counting' is a technique to gain advantange over the house.
 * Having more high cards remaining in the deck favors the player.
 * Each card is assigned a value according to the table below.
 * When the count > 0, the player should bet high.
 * When the count == 0 or < 0, the player should bet low.
 */ 
const cardCounting = card => {
    let count = 0;
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;

        case 7:
        case 8:
        case 9:
            break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1;
            break;
    }
    if (count > 0) {
        return count + " Bet";

    } else if (count < 0) {
        return count + " Hold";

    } else {
        return count + " Hold";
    }
}

cardCounting(2);
cardCounting(3);
cardCounting(7);
cardCounting('K');
cardCounting('A');