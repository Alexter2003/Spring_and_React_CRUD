package spring.HR_system.services;

import spring.HR_system.models.Person;

import java.util.List;

public interface IPersonService {
    public List<Person> findAll();
    public Person findById(Integer id);
    public Person save(Person person);
    public void deleteById(Integer id);
}
