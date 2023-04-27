// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmountP = 0, incomeAmountP, expenseAmountP = 0} = props

  return (
    <div className="container2">
      <div className="balance-type-container type-container">
        <div className="image-container balance-bg-color">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="img"
          />
        </div>
        <div className="money-details">
          <p className="moneyType-para">Your Balance</p>
          <p className="moneyType-heading" data-testid="balanceAmount">
            Rs {balanceAmountP}
          </p>
        </div>
      </div>
      <div className="income-type-container type-container">
        <div className="image-container income-bg-color">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="img"
          />
        </div>
        <div className="money-details">
          <p className="moneyType-para">Your Income</p>
          <p className="moneyType-heading" data-testid="incomeAmount">
            Rs {incomeAmountP}
          </p>
        </div>
      </div>
      <div className="expense-type-container type-container">
        <div className="image-container expense-bg-color">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="img"
          />
        </div>
        <div className="money-details">
          <p className="moneyType-para">Your Expenses</p>
          <p className="moneyType-heading" data-testid="expensesAmount">
            Rs {expenseAmountP}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
