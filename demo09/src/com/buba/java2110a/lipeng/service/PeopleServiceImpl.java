package com.buba.java2110a.lipeng.service;

import com.buba.java2110a.lipeng.dao.PeopleDaoImpl;
import com.buba.java2110a.lipeng.entity.People;

import java.util.List;

public class PeopleServiceImpl implements PeopleService {
    private PeopleDaoImpl peopleDao = new PeopleDaoImpl();
    @Override
    public List<People> findAll() {
        return peopleDao.findAll();
    }
}
