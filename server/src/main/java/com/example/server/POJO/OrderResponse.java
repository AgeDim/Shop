package com.example.server.POJO;

import java.util.Map;

public class OrderResponse {

    private Map<String, Integer> prodNameToAmount;

    private Double cost;

    public OrderResponse(){}
    public OrderResponse(Map<String, Integer> prodNameToAmount, Double cost){
        this.prodNameToAmount = prodNameToAmount;
        this.cost = cost;
    }


    public Map<String, Integer> getProdNameToAmount() {
        return prodNameToAmount;
    }

    public void setProdNameToAmount(Map<String, Integer> prodNameToAmount) {
        this.prodNameToAmount = prodNameToAmount;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }
}
