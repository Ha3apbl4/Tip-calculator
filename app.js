const BILL_INPUT = document.getElementById('billTotalInput')
const TIP_INPUT = document.getElementById('tipInput')
const NUMBER_OF_PEOPLE_DIV = document.getElementById('numberOfPeople')
const PER_PERSON_TOTAL_DIV = document.getElementById('perPersonTotal')

let numberOfPeople = Number(NUMBER_OF_PEOPLE_DIV.innerHTML)

const calculateBill = () => {
	const BILL = Number(BILL_INPUT.value)
	const TIP_PERCENT = Number(TIP_INPUT.value) / 100
	const TIP_AMOUNT = BILL * TIP_PERCENT
	const TOTAL = TIP_AMOUNT * BILL
	const PER_PERSON_TOTAL = TOTAL / numberOfPeople
	PER_PERSON_TOTAL_DIV.innerText = `$${PER_PERSON_TOTAL.toFixed(2)}`
}

const increasePeople = () => {
	numberOfPeople += 1
	NUMBER_OF_PEOPLE_DIV.innerText = numberOfPeople
	calculateBill()
}

const decreasePeople = () => {
	if (numberOfPeople <= 1) {
		return
	}
	numberOfPeople -= 1
	NUMBER_OF_PEOPLE_DIV.innerText = numberOfPeople
	calculateBill()
}
