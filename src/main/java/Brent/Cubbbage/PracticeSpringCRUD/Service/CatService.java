package Brent.Cubbbage.PracticeSpringCRUD.Service;

import Brent.Cubbbage.PracticeSpringCRUD.Model.Cat;
import Brent.Cubbbage.PracticeSpringCRUD.Repository.CatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CatService {


    private CatRepository repository;

    @Autowired
    public CatService(CatRepository repository) {
        this.repository = repository;
    }

    public Cat createCat(Cat cat){
        repository.save(cat);
        return cat;
    }

    public Cat findCat(Long id){
        return repository.findById(id).get();

    }

    public List<Cat> findAllCats(){
        List<Cat> catList = new ArrayList<>();
        Iterable<Cat> catIterable = repository.findAll();

        catIterable.forEach(cat -> catList.add(cat));

        return catList;
    }

    public Cat updateCat(Long id, Cat cat){
        Cat updateThisCat = findCat(id);
        updateThisCat.setName(cat.getName());
        updateThisCat.setColor(cat.getColor());

        return createCat(updateThisCat);
    }

    public Cat deleteCat(Long id){
        Cat deletedCat = findCat(id);
        repository.delete(deletedCat);
        return deletedCat;
    }


}
