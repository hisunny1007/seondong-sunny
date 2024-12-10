public class DataType {
    public static void main(String[] args) {

//        변수와 자료형
        int number;
        number = 10;

        int number2 = 10;

        String name = "kyle";
        int age = 20;
        boolean isMale = true;

        System.out.println(name);
        System.out.println(age);
        System.out.println(isMale);

//        정수를 실수로 변환 (기본 자료형 간의 형변환)
        int intType = 1000; // 정수를 실수로
        double doubleType2 = (double) intType;
        System.out.println(intType);
        System.out.println(doubleType2); // 1000.0

        double doubleType3 = 3.5; // 실수를 정수로 (소수점 이하 버려짐)
        int intType2 = (int) doubleType3;
        System.out.println(doubleType3);
        System.out.println(intType2);

// 정수를 문자열로 (기본 자료형과 참조 자료형간의 변환)
        // String.valueOf(정수)
        // Integer.toString(정수)
        String stringType1 = String.valueOf(intType);
        String stringType2 = Integer.toString(intType);

// 문자열을 정수로
        // Integer.parseInt(문자열)
        String stringType = "100";

        int intType3 = Integer.parseInt(stringType);
        System.out.println(intType3);




    }

}
