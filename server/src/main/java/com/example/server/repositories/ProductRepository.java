package com.example.server.repositories;

import com.example.server.entities.ProductEntity;
import com.example.server.entities.enums.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {

    @Query(value = "SELECT * FROM product ORDER BY amount desc LIMIT 8", nativeQuery = true)
    List<ProductEntity> getTopProducts();

    List<ProductEntity> getProductEntitiesByProductType(Integer productType);
}
