package com.example.server.entities.products;

import com.example.server.entities.products.enumsForProducts.LeashType;
import com.example.server.entities.products.enumsForProducts.MaterialOfLeashes;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="leashes", schema = "s313304")
public class LeashEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "leashes_serial_id_seq")
    @Column(name="serial_id", columnDefinition = "serial primary key")
    private Long serialId;

    @Enumerated(EnumType.STRING)
    @Column(name="leashes_type", columnDefinition = "leashes_type NOT NULL")
    private LeashType leashType;

    @Enumerated(EnumType.STRING)
    @Column(name="material", columnDefinition = "material_of_leashes NOT NULL")
    private MaterialOfLeashes material;

    @Column(name="length", columnDefinition = "REAL NOT NULL")
    private Double length;

    @Column(name="diameter", columnDefinition = "REAL NOT NULL")
    private Double diameter;

    @Column(name="strength", columnDefinition = "REAL NOT NULL")
    private Double strength;

    @Column(name="default_price", columnDefinition = "money NOT NULL")
    private Double defaultPrice;

    public LeashEntity(Long serialId, LeashType leashType, MaterialOfLeashes material, Double length, Double diameter,
                       Double strength, Double defaultPrice){
        this.serialId = serialId;
        this.leashType = leashType;
        this.material = material;
        this.length = length;
        this.diameter = diameter;
        this.strength = strength;
        this.defaultPrice = defaultPrice;
    }

    public LeashEntity(){}
}
