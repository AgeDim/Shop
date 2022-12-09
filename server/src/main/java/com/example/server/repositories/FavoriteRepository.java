package com.example.server.repositories;

import com.example.server.entities.FavoriteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoriteRepository extends JpaRepository<FavoriteEntity, Long> {

    List<FavoriteEntity> getFavoriteEntitiesByUserId(Long id);
}
