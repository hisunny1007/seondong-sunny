package org.example.compositionprac;

public class Address {

    private String city;
    private String street;

    public Address(String city, String street) {
        this.city = city;
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public String getStreet() {
        return street;
    }

    public String getFullAddress() {
        return city + "," + street;
    }


    // 혹시 빌딩이 이사갔다면? 주소 변경 필요함
    public void setCity(String city) {
        this.city = city;
    }

    public void setStreet(String street) {
        this.street = street;
    }

}

// 시와 도로 정보를 담고 있는 주소 클래스
