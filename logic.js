const inputs_ = document.querySelectorAll("input")
const curr_price_ = document.querySelector("#curr_price")
const new_price = document.querySelector("#new_price")


const values_input = {
    first_price: null,
    first_date: null,
    existing_amount: null,
    limit_price: null,
    second_date: null,
    current_amount: null
}
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    Object.keys(values_input).forEach((k, i) => values_input[k] = inputs_[i].value)
    const m = new ManagePrice(...Object.values(values_input))
    curr_price_.innerHTML = Number(inputs_[0].value).toFixed(2)
    new_price.innerHTML = (m.SetPrice()).toFixed(2)

})


