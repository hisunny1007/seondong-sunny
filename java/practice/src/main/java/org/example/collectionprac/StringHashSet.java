package org.example.collectionprac;

import java.util.ArrayList;
import java.util.List;
import java.util.HashSet;
import java.util.Set;

public class StringHashSet {
    public static void main(String[] args) {

//        String 타입의 HashSet을 만들고, 주어진 메서드들을 연습하시오.
//        set 은 데이터의 중복을 허용하지 않으면서 순서가 없는 자료구조
//        HashSet<String> set = new HashSet<>();
        Set<String> set = new HashSet<>();

        // 삽입 (새로운 원소 element를 삽입)
        set.add("d");
        set.add("d");
        set.add("r");
        set.add("a");
        System.out.println(set);

        // list는 integer이니까 string으로 바꿔야돼
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        System.out.println(list);

        // 반복문 사용해서 string으로 변환 후 set에 추가
        for (Integer i : list) {
            set.add(String.valueOf(i));
        }
        System.out.println(set);

        // 컬렉션 c의 모든 원소 삽입 .addAll(Collection c)
        Set<String> set2 = new HashSet<>();
        set2.add("1");
        set2.add("2");

        List<String> stringList = new ArrayList<>();
        stringList.add("3");
        stringList.add("5");

        set2.addAll(stringList);
        System.out.println(set2); // [1, 2, 3, 5]

        // 크기
        System.out.println(set2.size());

        // 비어있는지 여부(t/f)
        System.out.println(set2.isEmpty());

        // 특정 원소 element의 포함 여부 (t/f)
        System.out.println(set2.contains("2"));
        System.out.println(set2.contains(3));

        // 특정 원소 element를 제거
        set2.remove("2");
        System.out.println(set2);


    }
}
