package com.example.server.services;

import com.example.server.POJO.FishRequest;
import com.example.server.entities.FishEntity;
import com.example.server.repositories.FishRepository;
import com.example.server.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FishService {

    @Autowired
    private FishRepository fishRepository;

    public List<FishEntity> getFishes(){
        return fishRepository.getAll();
    }
    public List<Long> getProductsOfFishByFishId(Long id){
        return fishRepository.getProductsIdByFishMatch(id);
    }
    
    public FishEntity addFish(FishRequest request){
        FishEntity entity = new FishEntity();
        entity.setName(request.getName());
        entity.setLengthMax(request.getLengthMax());
        entity.setLengthMin(request.getLengthMin());
        entity.setWeightMax(request.getWeightMax());
        entity.setWeightMin(request.getWeightMin());
        entity.setHabitat(request.getHabitat());
        return fishRepository.save(entity);
    }
    
}
