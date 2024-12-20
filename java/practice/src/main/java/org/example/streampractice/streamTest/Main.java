package org.example.streampractice.streamTest;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        System.out.println(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        // 짝수만 필터링하여 리스트 반환
        List<Integer> evenNum = numbers.stream()
                .filter(e -> e % 2 == 0)
                .collect(Collectors.toList());
        System.out.println(evenNum);


        // 모든 숫자에 2를 곱하여 리스트 반환
        List<Integer> multiple2 = numbers.stream()
                .map(e -> e * 2)
                .collect(Collectors.toList());
        System.out.println(multiple2);

        // 숫자들의 합계 계산 (반복문 사용)
//        Integer sum = 0;
//        for (Integer number : numbers) {
//            sum += number;
//        }
//        System.out.println(sum);

        // 숫자들의 합계 계산 - 내장되어 있는 sum 함수 사용해야 해서 int로 변경 과정 필요함
        int sum = numbers.stream() // 스트림으로 변경
                .mapToInt(Integer::intValue) // intstream으로 변경 - sum()이라는 함수를 사용하기 위해
                .sum(); // sum()함수는 숨겨져 있음.
        System.out.println(sum);

        // 5보다 큰 숫자의 개수 계산
        long count = numbers.stream()
                .filter(i -> i >5)
                .count();
        // count()는 long 타입 반환함. int로 하면 x

        System.out.println();


        List<String> words = Arrays.asList("apple", "banana", "cherry", "fineapple", "apple");

        // 길이가 5이상인 단어들만 필터링하여 리스트 반환
        List<String> longWords = words.stream()
                .filter(w -> w.length() >= 5)
                .collect(Collectors.toList());
        System.out.println(longWords);

        // 모든 단어들을 대문자로 변환하여 리스트 반환
        List<String> upperWords = words.stream()
//                .map(string -> string.toUpperCase())
                .map(String::toUpperCase)
                .collect(Collectors.toList());
        System.out.println(upperWords);


        // 중복된 단어 제거하고 알파벳 순 정렬하여 리스트 반환
        List<String> uniqueSorted = words.stream()
                .distinct()
                .sorted()
                .collect(Collectors.toList());
        System.out.println(uniqueSorted);

        // 각 단어의 길이를 리스트로 변환
        List<Integer> wordLengths = words.stream()
//                .map(string -> string.length())
                .map(String::length) // 각 단어의 길이를 구함
                .collect(Collectors.toList());
        System.out.println(wordLengths);



        // list타입인데 list안에 있는 원소들은 product 타입인 거임
        // 클래스만 들어올 수 있음 => 그냥 대문자로 다 들어올 수 있다고 생각하셈
        // primitive type 은 안된다는 거임

        List<Product> products = Arrays.asList(
                new Product("notebook", 1200000, "SALE"),
                new Product("mouse", 50000, "SALE"),
                new Product("keyboard", 150000, "SOLD_OUT"),
                new Product("monitor", 350000, "SOLD_OUT"),
                new Product("speaker", 400000, "SALE")
        );

        // 상품들의 이름 리스트 반환
        List<String> productsName = products.stream()
                .map(product -> product.getName())
                .collect(Collectors.toList());
        System.out.println(productsName);

        // 20만원 이상인 상품들의 이름 리스트 반환
        List<String> collect = products.stream()
                .filter(product -> product.getPrice() >= 200000)
                .map(product -> product.getName())
                .collect(Collectors.toList());
        System.out.println(collect);

        // 판매 중인 상품의 가격 합
        int totalPrice = products.stream()
                .filter(product -> product.getStatus().equals("SALE"))
                .mapToInt(Product::getPrice)
                .sum();

        // 판매 중이면서 20만원 이상인 상품들의 이름 리스트 반환
        List<String> expensiveProductsSaleName = products.stream()
                .filter(p -> p.getStatus().equals("SALE"))
                .filter(p -> p.getPrice() >= 200000)
                .map(Product::getName)
                .collect(Collectors.toList());




    }
}
