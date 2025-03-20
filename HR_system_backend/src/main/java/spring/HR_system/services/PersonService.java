package spring.HR_system.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.HR_system.models.Person;
import spring.HR_system.repositories.IPersonRepository;

import java.util.List;

@Service
public class PersonService implements IPersonService {

    @Autowired
    private IPersonRepository personRepository;


    @Override
    public List<Person> findAll() {
        return this.personRepository.findAll();
    }

    @Override
    public Person findById(Integer id) {
        return this.personRepository.findById(id).orElse(null);
    }

    @Override
    public Person save(Person person) {
        return this.personRepository.save(person);
    }

    @Override
    public void deleteById(Integer id) {
        this.personRepository.deleteById(id);
    }
}
