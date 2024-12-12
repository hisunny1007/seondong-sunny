public class Index {
    public static void main(String[] args) {
        int[] numbers = {10,20,30,40,50};
        System.out.println(numbers[0]);
        System.out.println(numbers[4]);
        System.out.println(numbers[numbers.length-1]);

        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }

//        배열의 길이 구하기
        System.out.println(numbers.length); // 이거 쓰지 말고 반복문 써볼까?

        // 배열의 길이 직접 구하기
        int[] numbers1 = {10,20,30,40,50};
        int length = 0;
        for (int i = 0; i < numbers1.length; i++) {
            length += 1;
        }

        System.out.println(length);
    }
}
