package com.example.server.entities;

import com.example.server.entities.enums.OrderStatus;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name="order", schema = "s313304")
public class OrderEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "order_id_seq")
    @Column(name="id", columnDefinition = "serial primary key")
    private Long id;

    @Column(name="user_id", columnDefinition = "serial NOT NULL")
    private Long userId;

    @Type(type = "list-array")
    @Column(name = "products_id", columnDefinition = "INT[] NOT NULL")
    private List<Integer> productsId;

    @Column(name = "order_time", columnDefinition = "timestamp")
    private LocalDateTime orderTime;

    @Type(type="list-array")
    @Column(name="amounts", columnDefinition = "INT[]")
    private List<Integer> amounts;

    @Column(name = "shop_id", columnDefinition = "serial")
    private Long shopId;

    @Column(name="storage_id", columnDefinition = "serial")
    private Long storageId;

    @Column(name="status", columnDefinition = "INT NOT NULL")
    private Integer status;

    public OrderEntity(Long userId, List<Integer> productsId, LocalDateTime orderTime, List<Integer> amounts,
                       Long shopId, Long storageId, OrderStatus status){
        this.userId = userId;
        this.productsId = productsId;
        this.orderTime = orderTime;
        this.amounts = amounts;
        this.shopId = shopId;
        this.storageId = storageId;
        this.status = status.getCode();
    }

    public OrderEntity(){}
}
