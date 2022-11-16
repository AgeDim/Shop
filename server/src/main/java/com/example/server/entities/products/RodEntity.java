package com.example.server.entities.products;

import com.example.server.entities.products.enumsForProducts.Action;
import com.example.server.entities.products.enumsForProducts.Power;
import com.example.server.entities.products.enumsForProducts.RodType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="rod", schema = "s313304")
public class RodEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "rod_serial_id_seq")
    @Column(name="serial_id", columnDefinition = "serial primary key")
    private Long serialId;

    @Column(name="name", columnDefinition = "varchar(255) NOT NULL")
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name="rod_type", columnDefinition = "rod_type NOT NULL")
    private RodType rodType;

    @Enumerated(EnumType.STRING)
    @Column(name="action", columnDefinition = "action NOT NULL")
    private Action action;

    @Column(name="hardness", columnDefinition = "INT NOT NULL")
    private Integer hardness;

    @Enumerated(EnumType.STRING)
    @Column(name="power", columnDefinition = "power NOT NULL")
    private Power power;

    @Column(name="test_max", columnDefinition = "INT NOT NULL")
    private Integer testMax;

    @Column(name="test_min", columnDefinition = "INT NOT NULL")
    private Integer testMin;

    @Column(name="length", columnDefinition = "numeric NOT NULL")
    private Long length;

    @Column(name="strength", columnDefinition = "numeric NOT NULL")
    private Long strength;

    @Column(name="weight", columnDefinition = "numeric NOT NULL")
    private Long weight;

    @Column(name="default_price", columnDefinition = "money NOT NULL")
    private Double defaultPrice;

    public RodEntity(Long serialId, String name, RodType rodType, Action action, Integer hardness, Power power,
                     Integer testMax, Integer testMin, Long length, Long strength, Long weight, Double defaultPrice){
        this.serialId = serialId;
        this.name = name;
        this.rodType = rodType;
        this.action = action;
        this.hardness = hardness;
        this.power = power;
        this.testMax = testMax;
        this.testMin = testMin;
        this.length = length;
        this.strength = strength;
        this.weight = weight;
        this.defaultPrice = defaultPrice;
    }

    public RodEntity(){}
}
