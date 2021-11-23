const Statuses = [
	'default',
	'success',
	'warning',
	'error',
];

const Output = {
	Statuses,
}

export default Output;



//	Кнопки "Показать результат"
let finishElems = document.querySelectorAll('[name="sp-finish"]');

//	Изначально они скрыты
finishElems.forEach((finish) => {
	finish.style.display = 'none';
});

//	Все элементы всех результатов, изначально скрыты
document.querySelectorAll('[name="sp-r-"]').forEach((resElem) => {
	resElem.style.display = 'none';
});

//	qCount - кол-во вопросов, qDone - кол-во отвеченых вопросов
//	ToDo: определить общее количество вопросов по селекторам
let qCount = 10,
	qDone = 0;

//	resultsScore - объект с баллами за каждый результат.
//	Ключ каждого свойства - номер результата, начиная с 1. Значения свойств - кол-во баллов за этот результат
let resultsScore = {};

//	Перебираем все элементы результатов, чтобы определить, сколько всего результатов.
document.querySelectorAll('[name*="sp-r-"]').forEach((result) => {
	let  name = result.getAttribute('name'),
		number = parseInt(name.split('-')[2]);

	//	Если результата с индексом number нет в resultsScore, добавляем его и начисляем 0 баллов.
	if (!resultsScore.hasOwnProperty(number)) {
		resultsScore[number] = 0;
	}
});

//	Перебираем все ответы
document.querySelectorAll('[name*="sp-q-"]').forEach((answer) => {
	answer.style.cursor = 'pointer';
	// qIndex - номер вопроса
	// rIndex - номер результата
	// weight - вес (необязательный, по умолчанию 1)
	let name = answer.getAttribute('name'),
		qIndex = parseInt(name[2]),
		rIndex = parseInt(name[3]),
		weight = parseInt(name[4] || 1);
	answer.addEventListener('click', (event) => {
		document.querySelectorAll('[name*="sp-q-' + qIndex + '"]').forEach((qCurrentAnswer) => {
			qCurrentAnswer.style.pointerEvents = 'none';
			if (qCurrentAnswer !== answer) {
				qCurrentAnswer.style.opacity = 0.3;
			}
		});
		resultsScore[rIndex] += weight;
		qDone++;
		if (qDone >= qCount) {
			finishElems.forEach((finish) => {
				finish.style.display = 'block';
				finish.addEventListener('click', (event) => {
					let resultIndex = findMax(resultsScore).key;
					document.querySelectorAll('[name="sp-r-' + resultIndex + '"]').forEach((resElem) => {
						resElem.style.display = 'block';
					});
				});
			});
		}
	})
});

function findMax(source) {
	let max = 0,
		maxKey;
	for (let k in source) {
		if (source[k] >= max) {
			max = source[k];
			maxKey = k;
		}
	}
	return {
		key: maxKey,
		value: max,
	}
}
