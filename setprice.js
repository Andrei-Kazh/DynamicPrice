class ManagePrice {
    constructor(curr_price, first_date,amount_start,limit_price,second_date,curr_amount) {
        this.curr_price = Number(curr_price)
        this.limit_price = Number(limit_price)
        this.amount_start = Number(amount_start)
        this.curr_amount = Number(curr_amount)
        this.first_date = first_date
        this.second_date = second_date
        // *
        this.day_coef = 1000 * 60 * 60 * 24
        this.days_between_dates = Math.abs((Date.parse(this.first_date) - Date.parse(second_date)) / this.day_coef)

    }

    SetPrice(coef_increase = 0.25) {
        this.differences_amount_prcnt = (this.amount_start - this.curr_amount) / this.amount_start
        this.dicrease_amount_day_prcnt = this.differences_amount_prcnt / this.days_between_dates

        this.new_price = this.curr_price * (1 + this.dicrease_amount_day_prcnt)
        if (this.new_price <= this.limit_price) {
            return this.new_price
        } else {
            return this.limit_price
        }
    }
}