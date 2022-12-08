package com.example.server.repositories;

import com.example.server.entities.ProductShopMatchEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductShopMatchRepository extends JpaRepository<ProductShopMatchEntity, Long> {

    List<ProductShopMatchEntity> getProductShopMatchEntitiesByShopId(Long shopId);
}
