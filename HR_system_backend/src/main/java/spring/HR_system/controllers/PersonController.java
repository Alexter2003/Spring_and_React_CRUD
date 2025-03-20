package spring.HR_system.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.HR_system.models.Person;
import spring.HR_system.services.PersonService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/hr")
@CrossOrigin(value = "http://localhost:3000")
public class PersonController {
    private static final Logger logger = LoggerFactory.getLogger(PersonController.class);

    @Autowired
    private PersonService personService;

    @GetMapping("/persons")
    public ResponseEntity<List<Person>> findAll() {
        List<Person> persons = this.personService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(persons);
    }

    @GetMapping("/persons/{id}")
    public ResponseEntity<Person> finById(@PathVariable Integer id) {
        Person person = this.personService.findById(id);

        if (person == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(person);
    }

    @PostMapping("/persons")
    public ResponseEntity<Person> addPerson(@RequestBody Person person) {
        Person newPerson = this.personService.save(person);
        return ResponseEntity.status(HttpStatus.CREATED).body(newPerson);
    }

    @PutMapping("/persons/{id}")
    public ResponseEntity<Person> editPerson(@PathVariable Integer id, @RequestBody Person person) {
        Person updtPerson = this.personService.findById(id);
        if (updtPerson != null) {
            if (person.getName() != null) {
                updtPerson.setName(person.getName());
            }

            if (person.getLast_name() != null) {
                updtPerson.setLast_name(person.getLast_name());
            }

            if (person.getAge() != null) {
                updtPerson.setAge(person.getAge());
            }

            if (person.getEmail() != null) {
                updtPerson.setEmail(person.getEmail());
            }

            if (person.getPhone() != null) {
                updtPerson.setPhone(person.getPhone());
            }

            if (person.getAddress() != null) {
                updtPerson.setAddress(person.getAddress());
            }

            updtPerson = this.personService.save(updtPerson);
            return ResponseEntity.status(HttpStatus.OK).body(updtPerson);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @DeleteMapping("/persons/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePerson(@PathVariable Integer id) {
        Person person = this.personService.findById(id);

        if (person == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        this.personService.deleteById(id);
        Map<String, Boolean> rs = Map.of("deleted", Boolean.TRUE);
        return ResponseEntity.status(HttpStatus.OK).body(rs);

    }
}
