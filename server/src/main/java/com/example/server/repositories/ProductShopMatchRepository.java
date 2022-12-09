package com.example.server.repositories;

import com.example.server.entities.ProductShopMatchEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductShopMatchRepository extends JpaRepository<ProductShopMatchEntity, Long> {

    List<ProductShopMatchEntity> getProductShopMatchEntitiesByShopId(Long shopId);

    ProductShopMatchEntity getProductShopMatchEntityByShopIdAndProductId(Long shopId, Long productId);
    @Query(value = "SELECT new_price FROM product_shop_match WHERE product_id = :prodId AND shop_id = :shopId",nativeQuery = true)
    Double getProductPriceByProductAndShopIds(Long prodId, Long shopId);
}
