package com.example.server.repositories;

import com.example.server.entities.StorageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StorageRepository extends JpaRepository<StorageEntity, Long> {

    @Query(value = "SELECT id FROM storage", nativeQuery = true)
    List<Long> findAllStoragesId();

}
