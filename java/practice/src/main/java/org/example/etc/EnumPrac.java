package org.example.etc;

public enum EnumPrac {

    // ENUM(열거형) : (바뀌지 않은 변수=상수) 상수들의 집합
    // 무조건 쓸 것 약속해 놓음 (작성 형태에 대한 일종의 약속)
    // 여기서만 써라
    // 각각이 인스턴스임
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY;

    // 각각의 상수는 인스턴스임 => 변수랑 메서드 갖을 수 있음
    // ordinal : 상수에 대한 인덱스

//    **상수 각각은 해당 Enum 클래스의 인스턴스에 해당한다.
//    ** Enum 클래스의 인스턴스인 상수는 두 번 이상 생성될 수 없으므로 유일
//    => 비교 시 `.equals()` 대신 `==`으로 비교
}
