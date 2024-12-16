package org.example.modifierprac;

public class BankAccount {
//- 계좌는 잔액과 비밀번호 정보를 가진다
//- 잔액과 비밀번호는 외부에서 직접 접근할 수 없다

    int account;
    private int password;
    private int balance;

    public BankAccount(int account, int password, int balance) {
        this.account = account;
        this.password = password;
        this.balance = balance;
    }


    //    - 계좌 생성 (비밀번호 설정)
    // 이거는 이렇게 하면 안 돼. 숫자를 넣으면 숫자를 return 하는데 생성자랑..
    private int createAccount(int account) {
        return account;
    }

    // private인 createAccount 메서드 실행시키기 위해서 public 메서드 사용
    public int setAccount(int account) {
        return createAccount(account);
    }
    // 여기 createAccount에 account 왜 집어넣어야되지?

    // getter setter
    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
        this.password = password;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }


    //    - 입금
    public int deposit(int money) {
        if (money <= 0) {
            System.out.println("0원보다 작은 금액 입금 불가");
            return balance;
        }
        balance += money;
        return balance;
    }

    //    - 출금 (비밀번호 확인 필요)
    private int withdrawal(int money, int password) {
        if (money <= 0) {
            System.out.println("0원보다 작은 금액 출금 불가");
            return balance;
        }
        if (money > balance) {
            System.out.println("잔액보다 큰 금액 출금 불가");
        }
        balance -= money;
        return balance;
    }

    public int goWithdrawal(int money, int password) {
        return withdrawal(money, password);
    }

    //    - 잔액 조회 (비밀번호 확인 필요)
    private void seeBalance(int password) {
        System.out.println(balance);
    }

    public void watchBalance(int password) {
        seeBalance(password);
    }

}
// 입금이나 출금 시 0원 이하 금액 불가능, 잔액보다 큰 금액 출금 불가능