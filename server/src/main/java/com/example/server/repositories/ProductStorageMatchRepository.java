package com.example.server.repositories;

import com.example.server.entities.ProductStorageMatchEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductStorageMatchRepository extends JpaRepository<ProductStorageMatchEntity, Long> {

    List<ProductStorageMatchEntity> getProductStorageMatchEntitiesByStorageId(Long storageId);

    ProductStorageMatchEntity getProductStorageMatchEntityByStorageIdAndProductId(Long storageId, Long productId);
}
