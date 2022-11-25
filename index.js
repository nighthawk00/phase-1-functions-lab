const hq = 42; //nd street
const blockInFt = 264; //ft

function distanceFromHqInBlocks(clientStreet) {
    //returns the number of blocks given the input of client location
    if (clientStreet > hq) {
        const distanceInBlocks = clientStreet - hq;
        return distanceInBlocks;
    } else if (clientStreet < hq) {
        const distanceInBlocks = hq - clientStreet;
        return distanceInBlocks;
    } else if (clientStreet == hq) {
        return 0;
    }
}

function distanceFromHqInFeet(clientStreet) {
    const distInFt = (distanceFromHqInBlocks(clientStreet)) * blockInFt;
    return distInFt;
}

function distanceTravelledInFeet(a, b) { 
    if (a > b) {
        const distanceTravelled = a - b;
        const distTInFt = distanceTravelled * blockInFt;
        return distTInFt; 
    } else if (a < b) { 
        const distanceTravelled = b - a;
        const distTInFt = distanceTravelled * blockInFt;
        return distTInFt;
    }
}

function calculatesFarePrice(a, b) {
    if ((distanceTravelledInFeet(a, b)) < 400) {
        const farePrice = 0;
        return farePrice;
    } else if ((distanceTravelledInFeet(a, b)) < 2000 ) {
        const farePrice = ((distanceTravelledInFeet(a, b)) - 400) * .02;
        return farePrice;
    } else if ((distanceTravelledInFeet(a, b)) > 2000 && (distanceTravelledInFeet(a, b)) < 2500) {
        const farePrice = 25;
        return farePrice;
    } else if ((distanceTravelledInFeet(a, b)) >= 2500) {
        const farePrice = 'cannot travel that far'
        return farePrice;
    }
}