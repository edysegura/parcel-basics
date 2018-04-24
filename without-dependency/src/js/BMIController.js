import BMIService from './BMIService.js'

export default class BMIController {

    static init() {
        BMIController.setForm()
    }

    static setForm() {
        const form = document.querySelector('form')
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            BMIController.calculateBMI(form)
        })
    }

    static calculateBMI(form) {
        let weight = parseFloat(form.weight.value)
        let height = parseFloat(form.height.value)
        let result = 0

        result = BMIService.getIndex(weight, height)

        BMIController.showResult(result)
    }

    static showResult(result) {
        const spanResult = document.querySelector('.result')
        spanResult.innerHTML = result.toFixed(2)
    }
}