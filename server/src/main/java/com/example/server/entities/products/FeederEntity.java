package com.example.server.entities.products;

import com.example.server.entities.products.enumsForProducts.Bracing;
import com.example.server.entities.products.enumsForProducts.FeederType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="feeder", schema = "s313304")
public class FeederEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "feeder_serial_id_seq")
    @Column(name="serial_id", columnDefinition = "serial primary key")
    private Long serialId;

    @Enumerated(EnumType.STRING)
    @Column(name="feeder_type", columnDefinition = "feeder_type NOT NULL")
    private FeederType feederType;

    @Enumerated(EnumType.STRING)
    @Column(name="bracing", columnDefinition = "bracing NOT NULL")
    private Bracing bracing;

    @Column(name="weight", columnDefinition = "REAL")
    private Double weight;

    @Column(name="capacity", columnDefinition = "INT")
    private Integer capacity;

    @Column(name="default_price", columnDefinition = "money NOT NULL")
    private Double defaultPrice;

    public FeederEntity(Long serialId, FeederType feederType, Bracing bracing, Double weight,
                        Integer capacity, Double defaultPrice){
        this.serialId = serialId;
        this.feederType = feederType;
        this.bracing = bracing;
        this.weight = weight;
        this.capacity = capacity;
        this.defaultPrice = defaultPrice;
    }
    public FeederEntity(){}
}
