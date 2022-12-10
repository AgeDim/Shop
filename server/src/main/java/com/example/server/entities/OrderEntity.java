package com.example.server.entities;

import com.example.server.entities.enums.OrderStatus;
import com.vladmihalcea.hibernate.type.array.IntArrayType;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "order", schema = "s313304")
@TypeDef(name = "int-array", typeClass = IntArrayType.class)
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "order_id_seq")
    @Column(name = "id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name = "user_id", columnDefinition = "serial NOT NULL")
    private Long userId;

    @Type(type = "int-array")
    @Column(name = "products_id", columnDefinition = "INT[] NOT NULL")
    private Integer[] productsId;

    @Column(name = "order_time", columnDefinition = "timestamp")
    private LocalDateTime orderTime;

    @Type(type = "int-array")
    @Column(name = "amounts", columnDefinition = "INT[]")
    private Integer[] amounts;

    @Column(name = "shop_id", columnDefinition = "serial")
    private Long shopId;

    @Column(name = "storage_id", columnDefinition = "serial")
    private Long storageId;

    @Column(name = "status", columnDefinition = "INT NOT NULL")
    private Integer status;

    public OrderEntity(Long userId, Integer[] productsId, LocalDateTime orderTime, Integer[] amounts, Long shopId, Long storageId, OrderStatus status) {
        this.userId = userId;
        this.productsId = productsId;
        this.orderTime = orderTime;
        this.amounts = amounts;
        this.shopId = shopId;
        this.storageId = storageId;
        this.status = status.getCode();
    }

    public OrderEntity() {
    }
}
