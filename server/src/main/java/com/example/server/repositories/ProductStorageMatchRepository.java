package com.example.server.repositories;

import com.example.server.entities.ProductStorageMatchEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductStorageMatchRepository extends JpaRepository<ProductStorageMatchEntity, Long> {

    List<ProductStorageMatchEntity> getProductStorageMatchEntitiesByStorageId(Long storageId);

    ProductStorageMatchEntity getProductStorageMatchEntityByStorageIdAndProductId(Long storageId, Long productId);
}
