package org.example.collectionprac.ListSetMap;

import java.util.HashMap;
import java.util.Map;

public class StringHashMap {
    public static void main(String[] args) {

//        Key와 Value가 모두 String 타입인 HashMap을 만들고, 주어진 메서드들을 연습하시오.
        // Map은 key와 value의 쌍으로 저장하는 자료구조 => hashmap은 해시테이블 활용해 map  구현한 자료구조

        // HashMap<String, String> map = new HashMap<>();
        Map<String, String> map = new HashMap<>();

        // 삽입 (새로운 key=value 쌍을 삽입)
        map.put("name", "sunny");
        map.put("job", "home-protector");
        map.put("age", "13");
        System.out.println(map);

            // 이미 해당 key에 대한 value 존재하면 value값 교체
            map.put("name", "chris"); // name이라는 key의 value를 교체함
            System.out.println(map);

        // 조회 (key에 해당하는 value 조회) (key가 존재하지 않는 경우 null 반환)
        System.out.println(map.get("name"));
        System.out.println(map.get("gender")); // null

            // 조회이긴 한데 (key가 존재하지 않는다면 defaultValue 반환)
        System.out.println(map.getOrDefault("name", "myname"));
        System.out.println(map.getOrDefault("gender", "woman"));

        //  크기
        System.out.println(map);
        System.out.println(map.size());

        // 특정 key 또는 특정 value 존재 여부(t/f)
        System.out.println(map.containsKey("name"));
        System.out.println(map.containsValue("sunny"));

        // 제거 (특정 key에 해당하는 key=value 쌍 제거)
        System.out.println(map);
        map.remove("age");
        System.out.println(map);

        // key의 집합 반환 (보통 전체 데이터를 순회하기 위해 반복문과 함께 사용)
        for (String key : map.keySet()) {
            System.out.println(key);
        } // key의 집합  name job

        for (String key2 : map.keySet()) {
            System.out.println(key2 + map.get(key2));
        } // get은 key에 해당하는 value 조회










    }
}
