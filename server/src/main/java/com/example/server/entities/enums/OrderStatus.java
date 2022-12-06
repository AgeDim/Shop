package com.example.server.entities.enums;

public enum OrderStatus {
    inProcess(1),
    done(2),
    fail(3);

    private Integer code;

    OrderStatus(Integer code){
        this.code = code;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }
}
