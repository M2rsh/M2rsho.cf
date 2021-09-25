export async function getRandomFloat(max, min=0){
    return Math.random() * (max - min) + min;
}

export async function getRandomInt(max, min=0){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export async function getRandomBool(chance=0.5){
    return Math.random() < chance;
}