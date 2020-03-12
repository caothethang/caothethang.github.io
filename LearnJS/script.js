function phuongtrinhbac2() {
    var a, b, c, delta, x1, x2;
    a = Number.parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    c = parseInt(document.getElementById("c").value);
    delta = b * b - 4 * a * c;
    var result = document.getElementById('result');
    if (a != 0 && b == 0 && c == 0) {
        result.innerHTML = "Phương trình có nghiệm x=0";
        return 0;
    }
    if (a == 0) {
        if (b != 0) {
            result.innerHTML = "Phương trình có nghiệm : " + (-c / b);
        } else {
            if (c == 0) {
                result.innerHTML = "Phương trình vô số nghiệm";
            } else {
                result.innerHTML = "Phương trình vô nghiệm";
            }
        }
    } else {

        if (delta < 0) {
            result.innerHTML = 'Phương trình vô nghiệm';
        } else if (delta == 0) {
            var x = (-b) / (2 * a);
            result.innerHTML = "Phương trình có nghiệm kép" + (x);
        } else {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            result.innerHTML = "Phương trình có 2 nghiệm x1:" + (x1) + "và x2:" + (x2);
        }
    }
}

function resetPhuongTrinh() {
    var a, b, c, result;
    a = document.getElementById("a");
    b = document.getElementById("b");
    c = document.getElementById("c");
    result = document.getElementById("result");
    a.value = "";
    b.value = "";
    c.value = "";
    result.textContent = "";
}

function countdays() {
    var month, year, day;
    month = parseInt(document.getElementById("month").value);
    day = document.getElementById("dayNumber");
    year = parseInt(document.getElementById("year").value);
    switch (month) {
        case 1:
            day.textContent = "Tháng 1 có 31 ngày"
            break;
        case 2:
            if (year % 4 == 0) day.textContent = "Tháng 2 có 29 ngày vì là năm nhuận ";
            else day.textContent = "Tháng 2 có 28 ngày";
            break;
        case 3:
            day.textContent = "Tháng 3 có 31 ngày"
            break;
        case 4:
            day.textContent = "Tháng 4 có 30 ngày"
            break;
        case 5:
            day.textContent = "Tháng 5 có 31 ngày"
            break;
        case 6:
            day.textContent = "Tháng 6 có 30 ngày"
            break;
        case 7:
            day.textContent = "Tháng 7 có 31 ngày"
            break;
        case 8:
            day.textContent = "Tháng 1 có 31 ngày"
            break;
        case 9:
            day.textContent = "Tháng 9 có 30 ngày"
            break;
        case 10:
            day.textContent = "Tháng 10 có 31 ngày"
            break;
        case 11:
            day.textContent = "Tháng 11 có 30 ngày"
            break;
        case 12:
            day.textContent = "Tháng 12 có 31 ngày"
            break;
        default:
            break;
    }
}

function resetDate() {
    var month, year, day;
    month = document.getElementById("month");
    day = document.getElementById("dayNumber");
    year = document.getElementById("year");
    month.value = "";
    year.value = "";
    day.textContent = "";
}

function primeNumber() {
    var n = parseInt(document.getElementById("number").value);
    var i = 0;
    var primenumbers = document.getElementById("primeNumbers");
    var str = "";
    if (n <= 1) {
        primenumbers.innerHTML = '-1';
        return 0;
    }
    for (var i = 2; i <= n; i++) {
        var check = 0;
        for (var j = 1; j <= i / 2; j++) {
            if (i % j == 0) {
                check++;
            }
        }
        if (check == 1) {
            str = str + " " + i;
        }
    }
    primenumbers.innerHTML = str;
}

function resetNumber() {
    var number = document.getElementById("number");
    var primenumbers = document.getElementById("primeNumbers");
    number.value = "";
    primenumbers.textContent = "";
}