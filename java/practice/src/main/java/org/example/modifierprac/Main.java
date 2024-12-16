package org.example.modifierprac;

public class Main {
    public static void main(String[] args) {
        Person me = new Person("sunny", 16, 183.7);

//        System.out.println(me.name);
//        me.name = "nayeon"
        System.out.println(me.getName());
        me.setName("nayeon");
        me.age = 20;
        me.height = 175.3;

        System.out.println(me.getName());
        System.out.println(me.age);
        System.out.println(me.height);

//        me.run();
//       직접적으로 달리지는 못하지만 달려! 라고 하면 달릴 수 있음 (외부에다 공개x)
        me.exercise();
        me.walk();
        me.study();

        System.out.println("--------------------");

        BankAccount ba = new BankAccount(1102003000, 123, 30000);

        // 기본값 조회하기
        System.out.println(ba.account);
//        System.out.println(ba.balance);
//        System.out.println(ba.password);
        System.out.println(ba.getPassword());
        System.out.println(ba.getBalance());

        System.out.println("--------------------");

        // 계좌 생성 (비밀번호 설정)
//        ba.createAccount();
        int newAccount = ba.setAccount(1234500000);
        System.out.println("new account number: " + newAccount);
        ba.setPassword(1007);
        System.out.println(ba.getPassword());

        System.out.println("--------------------");

        // 입금
        int putMoney = ba.deposit(50000);
        System.out.println("deposit result: " + putMoney);

        // 출금
//        ba.withdrawal;
        int outMoney = ba.goWithdrawal(3000, 1007);
        System.out.println("withdrawal result: " + outMoney);

        System.out.println("--------------------");

        // 잔액 조회
//        ba.seeBalance;
        ba.watchBalance(1007);

        System.out.println("--------------------");


        BankAccount2 myAccount = new BankAccount2("abc123"); // ctrl+alt+v
        myAccount.deposit(10000);
        myAccount.getBalance("abc123");
        myAccount.withdraw(10000,"abc123");
        myAccount.getBalance("abc123");

        myAccount.getBalance("hdkfkdks");


        // 비밀번호 틀리면 생성 못하게 막고 싶어!
        // 비밀번호 validation 체크 해야 돼.
        // 인스턴스를 만들 때 막아야돼. => class에 만들어..
        // 실패했어? => 하지마 !!!!!!

        String myPassword = "abc";
        if (BankAccount2.validateInitialPassword(myPassword)) {
            new BankAccount2(myPassword);
        } else {
            System.out.println("fail.");
        }


    }
}
