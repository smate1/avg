$('.reviews__slider').slick({
	slidesToShow: 4,
	centerMode: true,
	centerPadding: '0px',
	infinite: true,
	arrows: true,
	responsive: [
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				autoplay: true,
				arrows: false,
			},
		},
	],
})

document.addEventListener('DOMContentLoaded', function () {
	const modal = document.getElementById('modal')
	const modalOverlay = document.getElementById('modal-overlay')
	const modalService = document.getElementById('modal-service')
	const closeModalBtn = document.getElementById('modal-close')
	const modalThanks = document.getElementById('modal-thanks')
	const goHomeBtn = document.getElementById('go-home')
	const form = document.querySelector('.modal__form')

	// отримуємо мову з <html lang="UKR">
	const lang = document.documentElement.lang.toUpperCase() || 'UKR'

	// словник послуг для кожної мови
	const services = {
		UKR: {
			'order-interpretation': 'Усний переклад',
			'order-written': 'Письмовий переклад',
			'order-notarization': 'Нотаріальне посвідчення',
			'order-appostille': 'Апостиль/легалізація',
			'order-record': 'Довідка про несудимість',
			'order-consultations': 'Міграційні консультації',
		},
		RUS: {
			'order-interpretation': 'Устный перевод',
			'order-written': 'Письменный перевод',
			'order-notarization': 'Нотариальное удостоверение',
			'order-appostille': 'Апостиль/легализация',
			'order-record': 'Справка об отсутствии судимости',
			'order-consultations': 'Миграционные консультации',
		},
		ENG: {
			'order-interpretation': 'Oral translation',
			'order-written': 'Written translation',
			'order-notarization': 'Notarial certification',
			'order-appostille': 'Apostille/legalization',
			'order-record': 'Criminal record certificate',
			'order-consultations': 'Migration consultations',
		},
		ARM: {
			'order-interpretation': 'Բանավոր թարգմանություն',
			'order-written': 'Գրավոր թարգմանություն',
			'order-notarization': 'Նոտարական վավերացում',
			'order-appostille': 'Ապոստիլ / օրինականացում',
			'order-record': 'Ոչ դատապարտված լինելու մասին տեղեկանք',
			'order-consultations': 'Միգրացիոն խորհրդատվություն',
		},
	}

	const selectedServices = services[lang] || services['UKR']

	Object.keys(selectedServices).forEach(id => {
		const btn = document.getElementById(id)
		if (btn) {
			btn.addEventListener('click', function () {
				modal.classList.add('show')
				modalOverlay.classList.add('show')
				modalService.textContent = selectedServices[id]
			})
		}
	})

	closeModalBtn?.addEventListener('click', function () {
		modal.classList.remove('show')
		modalOverlay.classList.remove('show')
	})

	modalOverlay?.addEventListener('click', function () {
		modal.classList.remove('show')
		modalThanks?.classList.remove('show')
		modalOverlay.classList.remove('show')
	})

	form?.addEventListener('submit', function (e) {
		e.preventDefault()
		modal.classList.remove('show')
		modalThanks?.classList.add('show')
	})

	// goHomeBtn?.addEventListener('click', function () {
	// 	modalThanks?.classList.remove('show')
	// 	modalOverlay.classList.remove('show')
	// 	window.location.href = 'index.html'
	// })
})

document.addEventListener('DOMContentLoaded', function () {
	const burger = document.getElementById('burger')
	const menu = document.querySelector('.header')
	const closeBtn = document.getElementById('burger-menu')
	const menuLinks = document.querySelectorAll('.header a') // Всі посилання в меню
	const body = document.body

	// Функція для відкриття/закриття меню
	function toggleMenu() {
		menu.classList.toggle('open')
		body.classList.toggle('no-scroll') // Вмикаємо/вимикаємо скрол
	}

	// Відкриваємо/закриваємо меню при кліку на бургер
	burger.addEventListener('click', toggleMenu)

	// Закриваємо меню при кліку на кнопку "burger-menu"
	closeBtn.addEventListener('click', function () {
		menu.classList.remove('open')
		body.classList.remove('no-scroll')
	})

	// Закриваємо меню при кліку на будь-яке посилання
	menuLinks.forEach(link => {
		link.addEventListener('click', function () {
			menu.classList.remove('open')
			body.classList.remove('no-scroll')
		})
	})
})

const trigger = document.querySelector('.custom-select-trigger')
const optionsContainer = document.querySelector('.custom-options')
const hiddenInput = document.getElementById('language-input')

function updateOptions(currentValue) {
	const allOptions = Array.from(document.querySelectorAll('.custom-option'))

	allOptions.forEach(opt => {
		if (opt.getAttribute('data-value') === currentValue) {
			opt.style.display = 'none' // Приховуємо активний варіант
		} else {
			opt.style.display = 'block'
		}
	})
}

trigger.addEventListener('click', () => {
	const currentValue = hiddenInput.value
	updateOptions(currentValue)
	optionsContainer.style.display =
		optionsContainer.style.display === 'flex' ? 'none' : 'flex'
})

document.querySelectorAll('.custom-option').forEach(option => {
	option.addEventListener('click', () => {
		const newValue = option.getAttribute('data-value')
		trigger.textContent = option.textContent
		hiddenInput.value = newValue
		optionsContainer.style.display = 'none'
	})
})

// Закрити меню при кліку поза ним
document.addEventListener('click', e => {
	if (!e.target.closest('.custom-select-wrapper')) {
		optionsContainer.style.display = 'none'
	}
})
const header = document.querySelector('.header')

function toggleMenu() {
	header.classList.toggle('open')

	if (header.classList.contains('open')) {
		document.body.classList.add('no-scroll')
	} else {
		document.body.classList.remove('no-scroll')
	}
}
document.addEventListener('DOMContentLoaded', function () {
	const links = document.querySelectorAll('.services__menu-link')
	const items = document.querySelectorAll('.infos__item')
	const servicesMobile = document.querySelector('.services-mobile')
	const backButton = document.querySelector('.mobile-arrow-service')

	links.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault()

			const targetId = this.getAttribute('data-target').replace('#', '')
			const targetElement = document.getElementById(targetId)

			if (targetElement) {
				items.forEach(item => item.classList.remove('active'))
				targetElement.classList.add('active')

				if (servicesMobile) {
					servicesMobile.style.transition = 'opacity 0.3s ease'
					servicesMobile.style.opacity = '0'
					setTimeout(() => {
						servicesMobile.style.display = 'none'
					})
				}

				setTimeout(() => {
					targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
				}, 50)
			}
		})
	})

	if (backButton) {
		backButton.addEventListener('click', function () {
			const isAnyItemActive = document.querySelector('.infos__item.active')

			if (isAnyItemActive) {
				// Закриваємо активний блок і повертаємо список
				items.forEach(item => item.classList.remove('active'))

				if (servicesMobile) {
					servicesMobile.style.display = 'block'
					setTimeout(() => {
						servicesMobile.style.opacity = '1'
					}, 50)
				}
			} else {
				// Якщо нічого не відкрито — переходимо на index.html
				window.location.href = './index.html'
			}
		})
	}
})
document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.burger')
	const header = document.querySelector('.header') // бо клас .open додається до .header
	const body = document.body
	const menuLinks = document.querySelectorAll('.mobile__menu-link')

	// Відкриття меню
	burger.addEventListener('click', function () {
		header.classList.add('open')
		body.classList.add('no-scroll')
	})

	// Закриття при кліку на пункт меню
	menuLinks.forEach(link => {
		link.addEventListener('click', function () {
			header.classList.remove('open')
			body.classList.remove('no-scroll')
		})
	})
})
