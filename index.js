const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");
const dayElContainer = document.querySelector(".day");
const monthElContainer = document.querySelector(".month");
const yearElContainer = document.querySelector(".year");
const dPEl = document.querySelector(".day p");
const mPEl = document.querySelector(".month p");
const yPEl = document.querySelector(".year p");
const btnEl = document.getElementById("submit");
const inputEl = document.querySelectorAll(".input");
const yOutput = document.querySelector(".result .y");
const mOutput = document.querySelector(".result .m");
const dOutput = document.querySelector(".result .d");

const now = new Date();
const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

btnEl.addEventListener("click", () => {
    let dayVal = dayEl.value;
    let monthVal = Number(monthEl.value) - 1;
    let yearVal = yearEl.value;

    let dv = day - dayVal;
    let mv = month - monthVal;
    let yv = year - yearVal;

    const checkYear = () => {
        if (yearVal == "") {
            yPEl.innerHTML = `<i>This field is required</i>`;
        } else if (yearVal > year) {
            yPEl.innerHTML = `<i>Must be in the past</i>`;
            yearElContainer.classList.add("error");
        } else {
            yOutput.textContent = `${yv} `;
            yPEl.innerHTML = ``;
        }
    };

    const checkMonth = () => {
        if (monthEl.value == "") {
            mPEl.innerHTML = `<i>This field is required</i>`;
        } else if (monthVal > 11) {
            mPEl.innerHTML = `<i>Must be a valid date</i>`;
            monthElContainer.classList.add("error");
        } else if (monthVal > month && yearVal >= year) {
            monthElContainer.classList.add("error");
            mPEl.innerHTML = `<i>Must be in the past</i>`;
        } else {
            mPEl.innerHTML = ``;
            mOutput.textContent = `${mv} `;
        }
    };

    const checkDay = () => {
        if (dayVal == "") {
            dPEl.innerHTML = `<i>This field is required</i>`;
        } else if (dayVal < 1) {
            dPEl.innerHTML = `<i>Must be a valid date</i>`;
            dayElContainer.classList.add("error");
        } else {
            dPEl.innerHTML = ``;
            dOutput.textContent = `${dv} `;
        }
    };
    if (dayVal == "" || monthVal == "" || yearVal == "") {
        inputEl.forEach((el) => {
            el.classList.add("error");
        });
    }

    checkYear();
    checkMonth();
    checkDay();
});
