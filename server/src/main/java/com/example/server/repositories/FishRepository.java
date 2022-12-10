package com.example.server.repositories;

import com.example.server.entities.FishEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FishRepository extends JpaRepository<FishEntity, Long> {

    @Query(value = "SELECT product_id FROM product_fish_match WHERE fish_id = :id", nativeQuery = true)
    List<Long> getProductsIdByFishMatch(Long id);

    @Query(value = "SELECT * FROM fish", nativeQuery = true)
    List<FishEntity> getAll();
}
