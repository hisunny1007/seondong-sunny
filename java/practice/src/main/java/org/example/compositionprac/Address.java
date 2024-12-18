package org.example.compositionprac;

public class Address {

    private String city;
    private String street;

    public Address(String city, String street) {
        this.city = city;
        this.street = street;
    }

//    public String getCity() {
//        return city;
//    }
//
//    public String getStreet() {
//        return street;
//    }

    public String getFullAddress() {
        return city + "," + street;
    }


}

// 시와 도로 정보를 담고 있는 주소 클래스
