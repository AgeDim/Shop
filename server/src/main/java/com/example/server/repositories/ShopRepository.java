package com.example.server.repositories;

import com.example.server.entities.ShopEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShopRepository extends JpaRepository<ShopEntity, Long> {

    @Query(value = "SELECT id FROM shop", nativeQuery = true)
    List<Long> findAllShopsId();
}
