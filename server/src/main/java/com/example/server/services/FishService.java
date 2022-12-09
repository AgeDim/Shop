package com.example.server.services;

import com.example.server.POJO.FishRequest;
import com.example.server.entities.FishEntity;
import com.example.server.entities.ProductEntity;
import com.example.server.repositories.FishRepository;
import com.example.server.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class FishService {

    @Autowired
    private FishRepository fishRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<FishEntity> getFishes(){
        return fishRepository.getAll();
    }
    public Map<Long, String> getProductsOfFishByFishId(Long id){
        Map<Long, String> result = new HashMap<>();
        List<Long> list = fishRepository.getProductsIdByFishMatch(id);
        list.forEach(o -> result.put(o, productRepository.getProductEntityById(o).getName()));
        return result;
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
