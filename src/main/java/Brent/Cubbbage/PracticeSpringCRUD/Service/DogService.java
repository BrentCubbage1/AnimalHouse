package Brent.Cubbbage.PracticeSpringCRUD.Service;



import Brent.Cubbbage.PracticeSpringCRUD.Model.Dog;
import Brent.Cubbbage.PracticeSpringCRUD.Repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DogService {

    private DogRepository repository;

    @Autowired
    public DogService(DogRepository repository) {
        this.repository = repository;
    }

    public Dog createDog(Dog dog){
        repository.save(dog);
        return dog;
    }

    public Dog findDog(Long id){
        return repository.findById(id).get();

    }

    public List<Dog> findAllDogs(){
        List<Dog> dogList = new ArrayList<>();
        Iterable<Dog> dogIterable = repository.findAll();

        dogIterable.forEach(dog -> dogList.add(dog));

        return dogList;
    }

    public Dog updateDog(Long id, Dog dog){
        Dog updateThisDog = findDog(id);
        updateThisDog.setName(dog.getName());
        updateThisDog.setColor(dog.getColor());

        return createDog(updateThisDog);
    }

    public Dog deleteDog(Long id){
        Dog deletedDog = findDog(id);
        repository.delete(deletedDog);
        return deletedDog;
    }

}
