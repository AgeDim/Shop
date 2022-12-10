package com.example.server.entities.enums;

public enum ProductType {
    rod(1), coil(2), fishing_line(3), hook(4), lure(5), bait(6), leash(7), sinker(8), feeder(9), pack(10), feeding_up(11), base(12), additive(13), flavoring(14);

    private Integer code;

    ProductType(Integer code) {
        this.code = code;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }
}
