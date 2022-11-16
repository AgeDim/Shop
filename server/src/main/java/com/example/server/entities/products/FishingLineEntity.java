package com.example.server.entities.products;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="fishing_line", schema = "s313304")
public class FishingLineEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "fishing_line_serial_id_seq")
    @Column(name="serial_id", columnDefinition = "serial primary key")
    private Long serialId;

    @Column(name="name", columnDefinition = "varchar(255) NOT NULL")
    private String name;

    @Column(name="fishing_line_type", columnDefinition = "fishing_line_type NOT NULL")
    private String fishingLineType;

    @Column(name="color", columnDefinition = "color NOT NULL")
    private String color;

    @Column(name="length", columnDefinition = "REAL NOT NULL")
    private Double length;

    @Column(name="diameter", columnDefinition = "REAL NOT NULL")
    private Double diameter;

    @Column(name="strength", columnDefinition = "REAL NOT NULL")
    private Double strength;

    @Column(name="default_price", columnDefinition = "money NOT NULL")
    private Double defaultPrice;

    public FishingLineEntity(Long serialId, String name, String fishingLineType, String color, Double length,
                             Double diameter, Double strength, Double defaultPrice){
        this.serialId = serialId;
        this.name = name;
        this.fishingLineType = fishingLineType;
        this.color = color;
        this.length = length;
        this.diameter = diameter;
        this.strength = strength;
        this.defaultPrice = defaultPrice;
    }
    public FishingLineEntity(){}
}
