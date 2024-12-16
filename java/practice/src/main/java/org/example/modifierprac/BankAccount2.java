package org.example.modifierprac;

public class BankAccount2 {
    private int balance;
    private String password;

// 보통 private으로 변수 숨겨놓는 편 => 그럼 getter setter로 가져와야 돼
// (setter없으면 접근 불가하니까)

    // 계좌 생성 (비밀번호 설정) => 생성자 만들기!!!
    public BankAccount2(String password) {
        this.password = password;
        this.balance = 0;
    }

// 입금
// input : 입금할 금액 / balance를 키움
// balance를 return(할까 하다가 이미 getter가 존재하기 때문에 void를 return하자)
// balance를 return? 고민해 봐. 잔액 조회를 입금할 때만 하진 않으니까
// getBalance로 잔액조회 / 입금할 때 잔액조회 / => 이렇게 해도 되고 설계 나름

// return => 반환 & 함수를 끝낸다라는 의미도 갖고 있음!! void여도 return; 쓸 수 있어(함수 멈춰)
//    public void deposit(int amount) {
//         if (amount <= 0) {
//             return;
//         }
//         balance += amount;
//    }

    public void deposit(int amount) {
        if (!validateAmount(amount)) {
            System.out.println("cannot deposit");
            return;
        }
        balance += amount;
        System.out.println(amount + "won is deposited");
    }

    // void 안 쓰고 싶으면 int로 하고 return balance해줘도 돼
//    public int deposit(int amount) {
//        if (!validateAmount(amount)) {
//            System.out.println("입금 불가 금액임");
//            return balance;
//        }
//        balance += amount;
//        return balance;
//        System.out.println(amount + "원이 입금됨");
//    }

// 출금 (비밀번호 확인 필요)
// input : 출금할 금액 / 비밀번호 // 비밀번호 체크 / balance를 줄임
// return void(또는 int) => 입금의 반대를 따라가는 기능

    public void withdraw(int amount, String password) {
         // 비밀번호 확인
        if (!validatePassword(password)) {
            System.out.println("invalid password");
            return;
        }

        // 금액 확인
//        if (amount <=0) {
//            return;
//        }
        if (!validateAmount(amount)) {
            System.out.println("cannot withdraw");
            return;
        }

        // 출금 금액이 잔고보다 많으면 안됨
        if (amount > balance) {
            return;
        }
        System.out.println(amount + "won is withdrawed");
        balance -= amount;
    }

// 잔액 조회 (비밀번호 확인 필요) => 잔액에 대한 getter
// 비밀번호에 대한 getter은 필요 없음 (비밀번호 조회란 기능은 x)
    public int getBalance(String password) {
        // 비밀번호 확인
        if (!validatePassword(password)) {
            // 처리 첫 번째 : 의미 없는 값을 return (대신, typing에 맞춰서)
            System.out.println("invalid password");
            return -1;
            // 처리 두 번째 : 에러 핸들링을 한다 (이 방식이 더 좋음)
        }
        System.out.println(balance);
        return balance;
    }



// 입금이나 출금 시 0원 이하 금액 불가능 : 입금, 출금에 동일한 if문 => 함수로 빼
// 유효성 검사를 해 => 실패했을 때 차단한다는 의미 부여하고 싶음 => 변수가 필요함 (눈으로 확인할 수 있는 변수라고 생각해)
//    private boolean validateAmount(int amount, int minAmount) {
//         if (amount > minAmount)
    private boolean validateAmount(int amount) {
        return amount > 0;
    }

//         if (amount >0){
//             return true;
//         } else {
//             System.out.println("under 0 impossible");
//             return false;
//         }

    private boolean validateMoney(int money) {
        if (money > 0) {
            return true;
        } else {
            return false;
        }
    }


    private boolean validatePassword(String password) {
        return this.password.equals(password);
        // 입력받은 password랑 원래 password 알아야하기 때문에 this 필요해

//        if (this.password.equals(password)) {
//            return true;
//        } else {
//            System.out.println("invalid password");
//            return false;
//        }
    }

// 생성 시 비밀번호 체크
    // instance에서 쓸래? / class에서 쓸래?(= 인스턴스 생성 안 하고 쓸래? =static)
    public static boolean validateInitialPassword(String password) {
         if (password.length() >= 4) {
             return true;
         } else {
             System.out.println("password is too short");
             return false;
         }
    }

}




