package org.example.collectionprac;

import java.util.ArrayList;
import java.util.List;

public class StringArrayList {
public static void main(String[] args) {

    //    String타입의 ArrayList를 만들고, 주어진 메서드들을 연습하시오.
    // ArrayList 내부적으로 배열을 사용하지만, 길이가 고정되어 있지 않고 동적으로 변화해서 데이터 유동적 관리 가능
    // ArrayList<String> strings = new ArrayList<>(); // <>안에 타입 넣고 ctrl alt v
    List<String> strings = new ArrayList<>();


    // 삽입 (끝에 삽입됨)
    strings.add("b");
    strings.add("l");
    strings.add("e");

    System.out.println(strings);

    strings.add(2, "u"); // index 위치에 새로운 원소 삽입
    System.out.println(strings);

    // 조회
    System.out.println(strings.get(2));

    // 교체
    strings.set(0, "y"); // index 위치에 새로운 원소로 교체
    System.out.println(strings);

    // 길이
    System.out.println(strings.size());

    // 비어있는 지 여부 (t/f)
    System.out.println(strings.isEmpty());

    //  특정 원소 포함 여부 (t/f)
    System.out.println(strings.contains("b"));
    System.out.println(strings.contains("y"));

    // 제거
    strings.remove(2);
    System.out.println(strings);

    // 마지막 결과 [y, l ,e] => 다시 blue로 만드려면
    strings.set(0,"b");
    strings.add(2, "u");
    System.out.println(strings);


}
}
