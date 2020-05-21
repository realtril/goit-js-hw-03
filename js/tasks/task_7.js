/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [
    { id: 1, type: "deposit", amount: Date.now() * Math.random() },
    { id: 2, type: "deposit", amount: Date.now() * Math.random() },
    { id: 3, type: "withdraw", amount: Date.now() * Math.random() },
    { id: 4, type: "deposit", amount: Date.now() * Math.random() },
  ],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let newTransaction = { id: Date.now() * Math.random(), type: type, amount };
    console.log(newTransaction);
    return newTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    let depositTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );
    Transaction.DEPOSIT;
    this.transactions = [...this.transactions, depositTransaction];
    console.log(this.transactions);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    Transaction.WITHDRAW;
    withdrawTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
    if (amount > this.balance) {
      console.log("У вас недостаточно средств.");
    } else {
      this.balance -= amount;
    }
    this.transactions = [...this.transactions, Transaction.WITHDRAW];
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    console.log(id);

    for (const obj of this.transactions) {
      if (obj.id === id) {
        return obj;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    console.log(type);
    let total = 0;

    for (const obj of this.transactions) {
      if (obj.type === type) {
        total += obj.amount;
      }
    }

    return total.toFixed(0);
  },
};

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getBalance());
console.log(account.getBalance());
console.log(account.deposit(1246));
