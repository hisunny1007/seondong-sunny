public class Main {

    public static void main(String[] args) {
        int bigger = getBigger(1, 2); // 메서드 호출
        // (1,2)가 인자임. 인자 전달해서 메서드 호출 => 반환값 할당당
        System.out.println(bigger);
    }

    // 두 개의 숫자 중 큰 숫자를 반환하는 메서드
    // number1, number2가 매개변수임. 인자가 매개변수에 할당됨됨
    public static int getBigger(int number1, int number2) {
        if (number1 > number2) {
            return number1;
        } else {
            return number2;
        }
    }
}

// 인자와 매개변수 => 반환 타입이 같아야 하고 순서, 갯수 같아야함