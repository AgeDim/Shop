package com.example.server.entities.products;

import com.example.server.entities.products.enumsForProducts.BaitSize;
import com.example.server.entities.products.enumsForProducts.BaitType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name="bait", schema = "s313304")
public class BaitEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "bait_serial_id_seq")
    @Column(name="serial_id", columnDefinition = "serial primary key")
    private Long serialId;

    @Enumerated(EnumType.STRING)
    @Column(name="bait_type", columnDefinition = "bait_type NOT NULL")
    private BaitType baitType;

    @Enumerated(EnumType.STRING)
    @Column(name="bait_size", columnDefinition = "size_bait NOT NULL")
    private BaitSize baitSize;

    @Column(name="weight", columnDefinition = "REAL NOT NULL")
    private Double weight;

    @Column(name="length", columnDefinition = "REAL NOT NULL")
    private Double length;

    @Column(name="deepening", columnDefinition = "REAL")
    private Double deepening;

    @Column(name="default_price", columnDefinition = "money NOT NULL")
    private Double defaultPrice;

    public BaitEntity(Long serialId, BaitType baitType, BaitSize baitSize, Double weight, Double length,
                      Double deepening, Double defaultPrice){
        this.serialId = serialId;
        this.baitType = baitType;
        this.baitSize = baitSize;
        this.weight = weight;
        this.length = length;
        this.deepening = deepening;
        this.defaultPrice = defaultPrice;
    }

    public BaitEntity(){}
}
