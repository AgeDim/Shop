package com.example.server.entities.products;

import com.example.server.entities.products.enumsForProducts.Bracing;
import com.example.server.entities.products.enumsForProducts.Color;
import com.example.server.entities.products.enumsForProducts.SinkerType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="sinker", schema = "s313304")
public class SinkerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "sinker_serial_id_seq")
    @Column(name="serial_id", columnDefinition = "serial primary key")
    private Long serialId;

    @Column(name="name", columnDefinition = "varchar(255) NOT NULL")
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name="sinker_type", columnDefinition = "sinker_type NOT NULL")
    private SinkerType sinkerType;

    @Enumerated(EnumType.STRING)
    @Column(name="color", columnDefinition = "color NOT NULL")
    private Color color;

    @Enumerated(EnumType.STRING)
    @Column(name="bracing", columnDefinition = "bracing NOT NULL")
    private Bracing bracing;

    @Column(name="weight", columnDefinition = "REAL NOT NULL")
    private Double weight;

    @Column(name="default_price", columnDefinition = "money NOT NULL")
    private Double defaultPrice;

    public SinkerEntity(Long serialId, String name, SinkerType sinkerType, Color color, Bracing bracing,
                        Double weight, Double defaultPrice){
        this.serialId = serialId;
        this.name = name;
        this.sinkerType = sinkerType;
        this.color = color;
        this.bracing = bracing;
        this.weight = weight;
        this.defaultPrice = defaultPrice;
    }

    public SinkerEntity(){}
}
