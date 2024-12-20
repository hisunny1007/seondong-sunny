package org.example.streampractice;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


public class Main {
    public static void main(String[] args) {

//     List<Integer> integers = new ArrayList<>();
//     integers.add(1);
//     integers.add(2);
//     integers.add(3);
//     integers.add(4);
//     System.out.println(integers);


        // 위랑 같은 코드임
       List<Integer> list = new ArrayList<Integer>(List.of(1,2,3,4));
        System.out.println(list); // [1,2,3,4]


        // 스트림
        Stream<Integer> stream = list.stream();

        List<Integer> overList = list.stream() // list를 stream으로 변경
                .filter(x -> x > 1) // filter 적용
//                .map()
//                .maptoInt()
                .collect(Collectors.toList()); // list로 변경

        System.out.println(overList);

        Stream<String> strings = Stream.of("a","b","c");
        Stream<String> upper = strings.map(string -> string.toUpperCase());

        System.out.println(upper.toList());

        Stream<String> numString = Stream.of("1","2","3");
//        System.out.println(numString); // 스트림 객체의 정보가 출력될 뿐, 내용 출력  x
//        스트림의 데이터를 확인하려면 최종 연산 사용해야 함.
//        numString.forEach(s -> System.out.println(s));
        numString.forEach(System.out::println); // 위랑 동일함


    }

}
