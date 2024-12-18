package org.example.compositionprac;

//public class Building extends Address{
//    public Building(String city, String street) {
//        super(city, street);
//    }
//
//    public void showAddress() {
//        System.out.println("시" + getCity());
//        System.out.println("도로" + getStreet());
//    }
//}

// 건물은 각자 자신만의 고유한 주소를 가짐.
// building이 자식. address가 부모/ -> 상속이니까 자식 클래스는 부모 클래스 메서드 사용 가능



public class Building {

    // composition - address 클래스를 변수로 가짐
    // address 클래스 타입의 변수 address를 인스턴스 변수로 포함
    private Address address;

    public Building(Address address) {
        this.address = address;
    }

    // 시와 도시 정보 출력하려면 address 클래스 메서드 호출해 값 꺼내야 함
    public void showAddress() {
        System.out.println("city name: " + this.address.getCity());
        System.out.println("street name : " + this.address.getStreet());
    }
}
