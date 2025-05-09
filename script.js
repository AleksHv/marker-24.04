class Marker {
    constructor(color, inkLevel) {
        this.color = color
        this.inkLevel = inkLevel
    }

    print(text) {
        const inkConsumptionPerChar = 0.5
        let charsToPrint = Math.floor(this.inkLevel / inkConsumptionPerChar)
        if (text.length > charsToPrint) {
            text = text.slice(0, charsToPrint)
        }
        if (text.length > 0) {
            console.log(`%c${text}`, `color: ${this.color}`)

            this.inkLevel -= text.length * inkConsumptionPerChar
        } else {
            console.log('недостаточно чернил')
        }
    }
}
class RefillableMarker extends Marker {
    refill(amount) {
        if (amount < 0 || amount > 100) {
            console.log('количество чернил должо быть в диапожоне от 0 до 100')
            return
        }
        this.inkLevel = Math.min(this.inkLevel + amount, 100)
        console.log(`маркер заполнен. Уровень чернил ${this.inkLevel}%`)
    }
}
const simpleMarker = new Marker('red', 50)
simpleMarker.print('Hello, World')

const refillableMarker = new RefillableMarker('blue', 30)
refillableMarker.print('hai')
refillableMarker.refill(50)
refillableMarker.print('hello')


// 2 задача

class ExtendedDate extends Date {
    toText() {
        const months = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ]
        const day = this.getDate()
        const month = months[this.getMonth()]
        return `${day} ${month}`
    }
    isFutureOrCurrent() {
        const now = new Date()
        return this >= now
    }
    isLeapYear() {
        const year = this.getFullYear()
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
    }
    getNextDate() {
        const nextDate = new Date(this)
        nextDate.setDate(this.getDate() + 1)
        return nextDate
    }
}
const myDate = new ExtendedDate(2023, 9, 1)
console.log('дата текстом:', myDate.toText())
console.log('будущая или текущая дата:', myDate.isFutureOrCurrent())
console.log('високосный год:', myDate.isLeapYear())
console.log('следующая дата:', myDate.getNextDate())

// 3 задача

class Employee {
    constructor(id, name, position, salary) {
        this.id = id
        this.name = name
        this.position = position
        this.salary = salary
    }
}
class EmpTable {
    constructor(employees) {
        this.employees = employees
    }
    getHtml() {
        let html = '<table border="1" cellpadding="5" cellspacing="0">'
        html += '<thead><tr>'
        html += '<th>ID</th><th>Имя</th><th>должность</th><th>зарплата</th>'
        html += '</tr></thead><tbody>'
        for (const emp of this.employees) {
            html += `<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.position}</td>
            <td>${emp.salary}</td>
            </tr>`
        }

        html += '</tbody></table>'
        return html
    }
}
const employees = [
    new Employee(1, 'Иван Иванов', 'менеджер', 50000),
    new Employee(2, 'Петр Птров', 'кассир', 35000),
]

const empTable = new EmpTable(employees)
document.body.innerHTML = empTable.getHtml()


// 4 задача


// Предположим, что класс EmpTable выглядит следующим образом:
class EmpTableTwo {
    constructor(data) {
        this.data = data;
    }

    getHtml2() {
        let html = '<table>';
        html += '<tr><th>Name</th><th>Position</th></tr>';
        this.data.forEach(emp => {
            html += `<tr><td>${emp.name}</td><td>${emp.position}</td></tr>`;
        });
        html += '</table>';
        return html;
    }
}

// Теперь создадим класс StyledEmpTable, который наследуется от EmpTable
class StyledEmpTableTwo extends EmpTableTwo {
    getStyles2() {
        return `
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                }
                th {
                    background-color: #f2f2f2;
                    text-align: left;
                }
                tr:hover {
                    background-color: #f5f5f5;
                }
            </style>
        `;
    }

    getHtml2() {
        // Получаем HTML из родительского класса
        const parentHtml = super.getHtml2();
        // Добавляем стили к HTML
        return this.getStyles2() + parentHtml;
    }
}

// Пример использования
const employeesTwo = [
    { name: 'John Doe', position: 'Developer' },
    { name: 'Jane Smith', position: 'Designer' },
];

// const styledEmpTableTwo = new StyledEmpTableTwo(employeesTwo);
// document.body.innerHTML = styledEmpTableTwo.getHtml2();