package com.example.server.POJO;

import java.util.List;

public class FavoriteSaveRequest {

    private String email;

    private List<Integer> productIds;

    public String getUserEmail() {
        return email;
    }

    public void setUserEmail(String email) {
        this.email = email;
    }

    public List<Integer> getProductIds() {
        return productIds;
    }

    public void setProductIds(List<Integer> productIds) {
        this.productIds = productIds;
    }
}
