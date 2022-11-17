package com.example.server.entities.products;

import com.example.server.entities.products.enumsForProducts.LureType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="lure", schema = "s313304")
public class LureEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "lure_serial_id_seq")
    @Column(name="serial_id", columnDefinition = "serial primary key")
    private Long serialId;

    @Enumerated(EnumType.STRING)
    @Column(name="lure_type", columnDefinition = "lure_type NOT NULL")
    private LureType lureType;

    @Column(name="weight", columnDefinition = "REAL NOT NULL")
    private Double weight;

    @Column(name="buoyancy", columnDefinition = "REAL NOT NULL")
    private Double buoyancy;

    @Column(name="amount", columnDefinition = "REAL NOT NULL")
    private Double amount;

    @Column(name="default_price", columnDefinition = "money NOT NULL")
    private Double defaultPrice;

    public LureEntity(Long serialId, LureType lureType, Double weight, Double buoyancy,
                      Double amount, Double defaultPrice){
        this.serialId = serialId;
        this.lureType = lureType;
        this.weight = weight;
        this.buoyancy = buoyancy;
        this.amount = amount;
        this.defaultPrice = defaultPrice;
    }

    public LureEntity(){}
}
