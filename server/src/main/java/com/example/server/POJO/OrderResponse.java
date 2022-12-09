package com.example.server.POJO;

import java.time.LocalDateTime;
import java.util.Map;

public class OrderResponse {

    private Long id;
    private Map<String, Integer> prodNameToAmount;

    private Double cost;

    private LocalDateTime time;

    private Integer status;

    public OrderResponse(){}
    public OrderResponse(Long id, Map<String, Integer> prodNameToAmount, Double cost, LocalDateTime time, Integer status){
        this.id = id;
        this.prodNameToAmount = prodNameToAmount;
        this.cost = cost;
        this.time = time;
        this.status = status;
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

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
