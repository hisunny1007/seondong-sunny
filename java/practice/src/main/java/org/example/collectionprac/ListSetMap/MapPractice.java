package org.example.collectionprac.ListSetMap;

import java.util.HashMap;
import java.util.Set;

public class MapPractice {

    public static void main(String[] args) {

        HashMap<String, Integer> map = new HashMap<>();


//      js :  map[korean] = 100
        map.put("korean", 100);
        map.put("english", 10);

        System.out.println(map);

        map.put("korean",30);
        System.out.println(map);

        // 조회 (key 값으로 조회함)
        System.out.println(map.get("korean"));
        System.out.println(map.get("math")); // 없는 값 조회할 땐 null

        // 기본값 지정
        System.out.println(map.getOrDefault("math", 0)); // null 대신 지정해준 기본값 0 나옴
        System.out.println(map.getOrDefault("korean", 0));

        // 크기 (콜렉션은 크기 다 size로 접근)
        System.out.println(map.size());


        Set<String> keys = map.keySet();

        for (String key : keys) {
            Integer value = map.get(key);
            System.out.println(key + value);
        }

        map.keySet();
//        value는 중복 허용되기 때문에 set 사용할 수 없음
        map.values();

    }
}
