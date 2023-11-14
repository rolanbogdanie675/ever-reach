Here is a JavaScript code that simulates a complex banking system with multiple accounts, transactions, and authentication. The filename for this code is "banking_system.js".

```javascript
/*
 * Filename: banking_system.js
 * Description: Complex banking system with multiple accounts, transactions, and authentication
 */

// Account class representing a bank account
class Account {
  constructor(accountNumber, accountHolder, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.transactions = [];
  }

  // Deposit funds into the account
  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      type: 'Deposit',
      amount: amount,
    });
  }

  // Withdraw funds from the account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({
        type: 'Withdrawal',
        amount: amount,
      });
    } else {
      console.log('Insufficient funds');
    }
  }

  // Get the account balance
  getBalance() {
    return this.balance;
  }

  // Get the account's transaction history
  getTransactionHistory() {
    return this.transactions;
  }
}

// Bank class representing a banking system
class Bank {
  constructor() {
    this.accounts = [];
  }

  // Create a new account
  createAccount(accountNumber, accountHolder, initialBalance) {
    const account = new Account(accountNumber, accountHolder, initialBalance);
    this.accounts.push(account);
  }

  // Authenticate a user
  authenticate(accountNumber, accountHolder) {
    const account = this.accounts.find(
      (acc) =>
        acc.accountNumber === accountNumber &&
        acc.accountHolder === accountHolder
    );
    return account !== undefined;
  }

  // Get an account by account number and account holder
  getAccount(accountNumber, accountHolder) {
    return this.accounts.find(
      (acc) =>
        acc.accountNumber === accountNumber &&
        acc.accountHolder === accountHolder
    );
  }
}

// Usage example

// Create a new bank instance
const bank = new Bank();

// Create some accounts
bank.createAccount('123456', 'John Doe', 1000);
bank.createAccount('654321', 'Jane Smith', 500);

// Authenticate the user (example: John Doe)
const isUserAuthenticated = bank.authenticate('123456', 'John Doe');

if (isUserAuthenticated) {
  // Get the authenticated user's account
  const account = bank.getAccount('123456', 'John Doe');
  console.log('Account Balance:', account.getBalance());

  // Perform some transactions
  account.deposit(500);
  account.withdraw(200);

  // Print transaction history
  console.log('Transaction History:', account.getTransactionHistory());
} else {
  console.log('Authentication Failed');
}
```

This complex banking system allows users to create multiple accounts, authenticate themselves, deposit and withdraw funds, and view transaction history. It demonstrates the use of classes, methods, arrays, loops, conditionals, and object-oriented programming concepts in JavaScript.