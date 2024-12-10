public class Practice {
//TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
// to see how IntelliJ IDEA suggests fixing it.
public static void main(String[] args) {


        String name = "kyle";
        int age = 20; // ctrl shift enter
        boolean isMale = true;

        System.out.println(name); // sout
        System.out.println("Main.main");
        System.out.println(name);
        System.out.println(age);
        System.out.println(isMale);

        int bigNumber = 2000000000;
        int bigNumber2 = 2000000000;
        System.out.println(bigNumber + bigNumber2);

        int intType = 100000;
        long longType = (long) intType;
        System.out.println(intType);
        System.out.println(longType);

        float floatType = 1.1234f;
        double doubleType = (double) floatType;

        System.out.println(floatType);
        System.out.println(doubleType);

        double doubleType2 = 3.5;
        int intType2 = (int) doubleType2;

        System.out.println(intType2);


        String stringType = "테스트";
        System.out.println(stringType);

//       정수를 문자열로 바꾸기 (기본 자료형 - 참조 자료형 간의 변환)
        int intType3 = 100;
        String stringType3 = Integer.toString(intType3);
        System.out.println(stringType3);
}
        // math.pow가 소수점 붙여서 값이 나오니까.. int로 할 수 없고 double 로 선언을 해야돼.
        // 그래서 return할 때 int를 붙여
        class Solution1 {
            public int solution(int number, int exponent) {
                double answer = Math.pow(number, exponent);
                return (int) answer;
            }
        }

        class Solution2 {
            public int solution(int totalPrice, String membership, String paymentMethod) {

                // 따로 변수를 만들어줘야 함. 정가라는 정보를 나중에 사용하기 때문에 정가를 복사한 거 변수 추가로 마련해줘
                // 사이즈가 커지는 방향이라 double result = totalprice; 만 해도 돼
                double result = (double) totalPrice;
                // int로 지정했는데 연산과정에서 실수가 나오면 결과는 실수가 될 수밖에 없기 때문에
                // 계산되는 게 실수면 double이 돼야 함.

                // 기본 할인
                if (totalPrice >= 500000) {
                    result = totalPrice * (1 - 0.15);
//                    result = discount(result, 0.15)

                } else if (totalPrice >= 300000) {
                    result = totalPrice * (1 - 0.1);

                } else if (totalPrice >= 100000) {
                    result = totalPrice * (1 - 0.05);
                }

                // 등급별 할인
                // string은 == 쓸 수 없음/ primitive type에만.. // string은 equals 써야돼 (값이 같냐?)
                // 어떤 벨류가 같니? 패턴 매칭 => switch가 좀 더 어울림
//                switch (조건) {
//                    case 값 :
//                        동작
//                    case 값 :
//                        동작
//                }
                // 같이 조건에 걸릴 일이 없기 때문에 break 써주는 게 좋음 (대부분 써주는게 보통임)
                // 특정 값이 무엇인가와 같을 때 (좀 더 좁은 if문임)
                // switch는 위에께 t여도 아래 블록들도 체크해 나감 (if문이랑 다른 점)
                switch (membership) {
                    case "실버":
                        result = result * (1 - 0.03);
                        break;
                    case "골드":
                        result = result * (1 - 0.05);
                        break;
                    case "플래티넘":
                        result = result * (1 - 0.10);
                        break;
                }


                // 결제 방식별 추가 할인
                if (paymentMethod.equals("현금")) {
                    result = result * (1 - 0.02);
                }

                // 특별 프로모션
                // 할인 적용 전의 총 구매 금액 => result랑 분리해줘야함 전 가격이니까 totalprice 써야돼
                if (totalPrice >= 500000 && membership.equals("플래티넘") && paymentMethod.equals("현금")) {
                    result -= 50000;
                }

                // 계산을 double로 해서 int로 형변환해줘야 함
                return (int) result;
            }
        }


//    discount (가격, 할인율) {
//        return 할인된 가격;
    }
