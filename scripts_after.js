function toggle_modal() {
    document.getElementById('main').hidden = document.getElementById('modal').hidden
    document.getElementById('modal').hidden = !document.getElementById('modal').hidden
}

function add_cash() {
    document.getElementById('calc_modal_btn').hidden = false
    document.getElementById('modal_title').innerHTML = 'Новый приход'
    document.getElementById('modal_operation').innerHTML = 'income'
    document.getElementById('modal_data').value = 0.0
    toggle_modal()
}

function change_glass(glass, operation) {
    document.getElementById('calc_modal_btn').hidden = true
    document.getElementById('calc_modal_text').hidden = true
    var title = ''
    document.getElementById('modal_data').value = 0.0
    switch(operation) {
        case 'plus':
            title = 'Приход в '
            break
        case 'minus':
            title = 'Расход в '
            break
        case 'edit':
            document.getElementById('modal_data').value = localStorage.getItem(glass)
            title = 'Редактируем '
            break
    }
    title += ' стакан '
    
    switch(glass) {
        case 'common':
            title += 'обязательные'
            break
        case 'invest':
            title += 'инвестиции'
            break
        case 'enjoy':
            title += 'развлечения'
            break
        case 'learn':
            title += 'обучение'
            break
        case 'buy':
            title += 'покупки'
            break
        case 'gift':
            title += 'подарки'
            break
        case 'save':
            title += 'подушка'
            break
    }
    document.getElementById('modal_title').innerHTML = title
    document.getElementById('modal_operation').innerHTML = operation
    document.getElementById('modal_glass').innerHTML = glass
    toggle_modal()
}

function calc_modal() {
    var income = parseFloat(document.getElementById('modal_data').value)
    var persent = income * 0.05
    document.getElementById('calc_modal_text').innerHTML = 'На тиньков: ' + persent * 2 + ' ₽<br>На сбер сбер: ' + persent * 7 + ' ₽'
    document.getElementById('calc_modal_text').hidden = false
}

function save_modal() {
    var glass = document.getElementById('modal_glass').innerHTML
    var operation = document.getElementById('modal_operation').innerHTML
    switch(operation) {
        case 'plus':
            localStorage.setItem(glass, parseFloat(localStorage.getItem(glass)) + parseFloat(document.getElementById('modal_data').value))
            break
        case 'minus':
            localStorage.setItem(glass, parseFloat(localStorage.getItem(glass)) - parseFloat(document.getElementById('modal_data').value))
            break
        case 'edit':
            localStorage.setItem(glass, parseFloat(document.getElementById('modal_data').value))
            break
        case 'income':
            var income = parseFloat(document.getElementById('modal_data').value)
            var persent = income * 0.05
            localStorage.setItem('common', parseFloat(localStorage.getItem('common')) + persent * 11)
            localStorage.setItem('invest', parseFloat(localStorage.getItem('invest')) + persent * 2)
            localStorage.setItem('enjoy', parseFloat(localStorage.getItem('enjoy')) + persent * 2)
            localStorage.setItem('learn', parseFloat(localStorage.getItem('learn')) + persent * 2)
            localStorage.setItem('buy', parseFloat(localStorage.getItem('buy')) + persent * 2)
            localStorage.setItem('gift', parseFloat(localStorage.getItem('gift')) + persent * 1)
            break
    }
    toggle_modal()
    render_summs()
}

function render_summs() {
    var summ_all = 0
    glasses.forEach((element) => {
        document.getElementById('summ_' + element).innerHTML = localStorage.getItem(element) + ' ₽'
        summ_all += parseFloat(localStorage.getItem(element))
    })
    document.getElementById('summ_all').innerHTML = summ_all + ' ₽'

    var sber_main = parseFloat(localStorage.getItem('common'))
    document.getElementById('sber_main').innerHTML = sber_main + ' ₽'

    var sber_sber = parseFloat(localStorage.getItem('enjoy')) + parseFloat(localStorage.getItem('enjoy')) + parseFloat(localStorage.getItem('learn')) + parseFloat(localStorage.getItem('gift')) + parseFloat(localStorage.getItem('save'))
    document.getElementById('sber_sber').innerHTML = sber_sber + ' ₽'

    var tinkoff = parseFloat(localStorage.getItem('invest'))
    document.getElementById('tinkoff').innerHTML = tinkoff + ' ₽'
}

render_summs()