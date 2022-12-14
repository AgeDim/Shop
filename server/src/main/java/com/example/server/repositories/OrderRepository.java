package com.example.server.repositories;

import com.example.server.entities.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Long> {

    OrderEntity getOrderEntityById(Long id);

    List<OrderEntity> getOrderEntitiesByUserId(Long userId);
}
