// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck es una rreglo destring 
 * @returns {string} retorna una carta 
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}