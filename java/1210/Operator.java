public class Operator {
    public static void main(String[] args) {
// 산술 연산자
        int i = 3;
        int j = 2;

        // 정수끼리 나눗셈 연산 => 소수점 이하 버려짐
        // 소수점까지 표현하고 싶으면? => 하나를 실수형으로 형변환 필요
        System.out.println(i / j); // 1
        System.out.println((double) i / j); // 1.5
        System.out.println( i % j); // 나머지 연산자

        double powResult = Math.pow(5,2); // 거듭제곱
        System.out.println(powResult); // 5의 2제곱

        double sqrtResult = Math.sqrt(25); // 제곱근(양수)
        System.out.println(sqrtResult); // 25의 양수 제곱근

// 비교 연산자
        // 결과는 boolean으로 표현
        int i1 = 3;
        int j1 = 2;

        System.out.println(i1 < j1);
        System.out.println(i1 == j1);
        System.out.println(i1 != j1);

        // == 동일연산자 / 정수 - 실수 비교할 때 정수가 실수로 자동 형변환 후 비교
        int intNumber = 1;
        double doubleNumber = 1.0;

        System.out.println(intNumber == doubleNumber); // true

        // 같은 실수값이라도 float, double 차이 남 => double을 float로 형변환 후 비교
        float floatNumber1 = 3.1234f;
        double doubleNumber2 = 3.1234;

        System.out.println(floatNumber1 == (float)doubleNumber2);

        // 참조 타입 비교는 ==연산자 대신 .equals() 메서드 사용해야 함
        // => 값이 아닌 참조를 비교하니까!
        String str1 = new String("hello");
        String str2 = new String("hello");

        System.out.println(str1 == str2); // false
        System.out.println(str1.equals(str2)); // true

//        논리 연산자
        // 결과는 boolean으로 표현

        boolean booleanType = true;
        System.out.println(!booleanType);

    }
}
