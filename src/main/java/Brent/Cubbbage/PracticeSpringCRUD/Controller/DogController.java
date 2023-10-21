package Brent.Cubbbage.PracticeSpringCRUD.Controller;

import Brent.Cubbbage.PracticeSpringCRUD.Model.Cat;
import Brent.Cubbbage.PracticeSpringCRUD.Model.Dog;
import Brent.Cubbbage.PracticeSpringCRUD.Service.CatService;
import Brent.Cubbbage.PracticeSpringCRUD.Service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping(value = "/dog")
public class DogController {

    private DogService service;

    @Autowired
    public DogController(DogService service) {
        this.service = service;
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Dog> create(@RequestBody Dog dog){
        service.createDog(dog);
        return ResponseEntity.status(HttpStatus.CREATED).body(dog);
    }

    @GetMapping(value = "/read")
    public ResponseEntity<List<Dog>> readAll(){
        List<Dog> dogList = service.findAllDogs();
        return ResponseEntity.status(HttpStatus.OK).body(dogList);
    }

    @GetMapping(value = "/read/{id}")
    public ResponseEntity<Dog> readById(@PathVariable Long id){
        Dog readDog = service.findDog(id);
        return ResponseEntity.status(HttpStatus.OK).body(readDog);
    }

    @PutMapping(value = "/update/{id}")
    public ResponseEntity<Dog> updateDog(@PathVariable Long id, @RequestBody Dog dog){
        Dog updatedDog = service.updateDog(id, dog);
        return ResponseEntity.status(HttpStatus.OK).body(updatedDog);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Dog> deleteDog(@PathVariable Long id){
        Dog deletedDog = service.deleteDog(id);
        return ResponseEntity.status(HttpStatus.OK).body(deletedDog);
    }



}
