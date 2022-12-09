package com.example.server.POJO;

import java.time.LocalDateTime;
import java.util.Map;

public class OrderResponse {

    private Long id;
    private Map<String, Integer> prodNameToAmount;

    private Double cost;

    private LocalDateTime time;

    public OrderResponse(){}
    public OrderResponse(Long id, Map<String, Integer> prodNameToAmount, Double cost, LocalDateTime time){
        this.id = id;
        this.prodNameToAmount = prodNameToAmount;
        this.cost = cost;
        this.time = time;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }
}
