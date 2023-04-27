import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const filteredTransactionList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )
    this.setState({transactionsList: filteredTransactionList})
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const optionType = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = optionType

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expenseAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expenseAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expenseAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const incomeAmount = this.getIncome()
    const expenseAmount = this.getExpenses()
    const balanceAmount = this.getBalance()

    return (
      <div className="main-container">
        <div className="container1">
          <h1 className="heading1">HI, Richard</h1>
          <p className="description1">
            Welcome back to your{' '}
            <span className="span-element">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmountP={balanceAmount}
          incomeAmountP={incomeAmount}
          expenseAmountP={expenseAmount}
        />

        <div className="container3">
          <div className="input-container">
            <h1 className="cont-3-heading">Add Transaction</h1>
            <form onSubmit={this.addTransaction} className="form-element">
              <label htmlFor="title" className="label-input">
                TITLE
              </label>
              <input
                id="title"
                placeholder="Title"
                type="text"
                className="title-input"
                value={titleInput}
                onChange={this.onChangeTitle}
              />

              <label htmlFor="amount" className="label-input">
                AMOUNT
              </label>
              <input
                id="amount"
                placeholder="Amount"
                type="text"
                className="title-input"
                value={amountInput}
                onChange={this.onChangeAmount}
              />

              <label htmlFor="type" className="label-input">
                TYPE
              </label>
              <select
                id="type"
                value={optionId}
                className="title-input"
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="button"
                onClick={this.addTransaction}
              >
                ADD
              </button>
            </form>
          </div>
          <div className="transactions-container">
            <h1 className="cont-3-heading">History</h1>
            <div>
              <ul className="ul-list">
                <li className="transaction-item">
                  <p className="transaction-item-heading">Title</p>
                  <p className="transaction-item-heading">Amount</p>
                  <p className="transaction-item-heading">Type</p>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
