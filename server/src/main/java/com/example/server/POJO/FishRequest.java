package com.example.server.POJO;

public class FishRequest {

    private String name;

    private Double lengthMax;

    private Double lengthMin;

    private Double weightMax;

    private Double weightMin;

    private String habitat;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getLengthMax() {
        return lengthMax;
    }

    public void setLengthMax(Double lengthMax) {
        this.lengthMax = lengthMax;
    }

    public Double getLengthMin() {
        return lengthMin;
    }

    public void setLengthMin(Double lengthMin) {
        this.lengthMin = lengthMin;
    }

    public Double getWeightMax() {
        return weightMax;
    }

    public void setWeightMax(Double weightMax) {
        this.weightMax = weightMax;
    }

    public Double getWeightMin() {
        return weightMin;
    }

    public void setWeightMin(Double weightMin) {
        this.weightMin = weightMin;
    }

    public String getHabitat() {
        return habitat;
    }

    public void setHabitat(String habitat) {
        this.habitat = habitat;
    }
}
