/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, directror, budget) {
        this.title = title,
        this.directror = directror,
        this.budget = budget
    }
    wasExpensive(){return this.budget > 100000000}
    }

    const movieOne = new Movie("El camino", "As", 300000);
    const movieTwo = new Movie("Better call saul", "As", 4600000000);
    console.log(movieOne.wasExpensive())
    console.log(movieTwo.wasExpensive())

