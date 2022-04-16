let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for(let i = 0; i < weeklyExpenseQuestions.length; i++){

    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer

}


for(let i = 0; i < monthlyExpenseQuestions.length; i++){

    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer

}


for(let i = 0; i < anualExpenseQuestions.length; i++){

    let answer = parseFloat(window.prompt(anualExpenseQuestions[i]))
    anualExpenses = monthlyExpenses + answer

}








// let weeklyExpenseQuestions = [
//     `What's your weekly budget for lunches?`,
//     `What's your weekly budget for entertainment?`,
//     `What's your weekly budget for groceries?`
// ]

// let monthlyExpenseQuestions = [
//     `What's your monthly rent budget?`,
//     `What's your monthly insurance budget?`,
//     `What's your monthly gas budget?`,
//     'What are your monthly utility costs?'
// ]

// let annualExpenseQuestions = [
//     `What's your annual subscription budget?`,
//     `What's  your annual vacation budget?`,
//     `What's your annual donation budget?`
//  ]





